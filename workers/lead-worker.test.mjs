/**
 * Contract tests for the lead Worker.
 *
 * The case that matters most is "delivery failed but the lead was stored":
 * that is the exact scenario of 29 Sep 2026, and the whole point of the Worker
 * is that a guest is told the truth — their enquiry is captured — rather than
 * being turned away because a third party is down.
 *
 * Run:  node --test workers/lead-worker.test.mjs
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import worker from "./lead-worker.js";

/** Minimal in-memory stand-in for a KV namespace. */
function fakeKV({ failWrites = false } = {}) {
  const store = new Map();
  return {
    store,
    async get(key) {
      return store.has(key) ? store.get(key) : null;
    },
    async put(key, value) {
      if (failWrites) throw new Error("kv unavailable");
      store.set(key, value);
    },
    async list({ prefix = "", limit = 1000 } = {}) {
      const keys = [...store.keys()]
        .filter((k) => k.startsWith(prefix))
        .slice(0, limit)
        .map((name) => ({ name }));
      return { keys };
    },
  };
}

function makeEnv(overrides = {}) {
  return {
    ALLOWED_ORIGIN: "https://www.newjerseyphotoactivations.com",
    LEAD_LOG: fakeKV(),
    RATE_KV: fakeKV(),
    LEAD_WEBHOOK: "https://upstream.example/hook",
    ADMIN_TOKEN: "a-long-random-admin-token",
    ...overrides,
  };
}

const VALID = {
  name: "  Dana Whitfield ",
  email: "  Dana@Example.COM ",
  eventDate: "2026-12-12",
  venueZip: "07030",
  phone: "(609) 555-0142",
  message: "Glambot for a corporate party",
};

function post(body, headers = {}) {
  return new Request("https://njpa-lead.workers.dev/", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

/** Stubs global fetch for the duration of one call. */
async function withFetch(impl, fn) {
  const original = globalThis.fetch;
  globalThis.fetch = impl;
  try {
    return await fn();
  } finally {
    globalThis.fetch = original;
  }
}

const ok = () => new Response(JSON.stringify({ ok: true }), { status: 200 });
const dead = () => new Response("Server Error", { status: 500 });

async function storedLeads(env) {
  const { keys } = await env.LEAD_LOG.list({ prefix: "lead:" });
  const out = [];
  for (const k of keys) out.push(JSON.parse(await env.LEAD_LOG.get(k.name)));
  return out;
}

test("OPTIONS preflight is allowed", async () => {
  const res = await worker.fetch(
    new Request("https://x/", { method: "OPTIONS" }),
    makeEnv(),
  );
  assert.equal(res.status, 204);
});

test("a stray GET is rejected", async () => {
  const res = await worker.fetch(new Request("https://x/"), makeEnv());
  assert.equal(res.status, 405);
});

test("malformed JSON is rejected", async () => {
  const req = new Request("https://x/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{not json",
  });
  const res = await worker.fetch(req, makeEnv());
  assert.equal(res.status, 400);
});

test("a honeypot hit looks successful but stores nothing", async () => {
  const env = makeEnv();
  const res = await worker.fetch(
    post({ ...VALID, company_website: "spam" }),
    env,
  );
  assert.equal(res.status, 200);
  assert.deepEqual(await storedLeads(env), []);
});

test("missing and malformed fields are rejected with the field names", async () => {
  const env = makeEnv();
  const res = await worker.fetch(
    post({ name: "A", email: "not-an-email", eventDate: "", venueZip: "abc" }),
    env,
  );
  assert.equal(res.status, 422);
  const body = await res.json();
  assert.equal(body.error, "validation");
  assert.ok(body.fields.includes("eventDate"));
  assert.ok(body.fields.includes("email_format"));
  assert.ok(body.fields.includes("zip_format"));
});

test("a sixth submission from one IP inside the window is rate limited", async () => {
  const env = makeEnv();
  await withFetch(ok, async () => {
    for (let i = 0; i < 5; i++) {
      const res = await worker.fetch(
        post(VALID, { "cf-connecting-ip": "203.0.113.9" }),
        env,
      );
      assert.equal(res.status, 200);
    }
    const res = await worker.fetch(
      post(VALID, { "cf-connecting-ip": "203.0.113.9" }),
      env,
    );
    assert.equal(res.status, 429);
  });
});

test("a delivered lead is stored, normalized and marked delivered", async () => {
  const env = makeEnv();
  const res = await withFetch(ok, () => worker.fetch(post(VALID), env));
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true, delivered: true });

  const [lead] = await storedLeads(env);
  assert.equal(lead.delivered, true);
  assert.equal(lead.deliveredVia, "primary");
  assert.equal(lead.name, "Dana Whitfield", "name is trimmed");
  assert.equal(lead.email, "dana@example.com", "email is lowercased and trimmed");
  assert.equal(lead.phone, "6095550142", "phone is reduced to digits");
});

test("THE OUTAGE CASE: delivery fails, the guest still succeeds, lead is kept", async () => {
  const env = makeEnv();
  const res = await withFetch(dead, () => worker.fetch(post(VALID), env));

  assert.equal(res.status, 200, "the enquirer is not turned away");
  assert.deepEqual(await res.json(), { ok: true, delivered: false });

  const [lead] = await storedLeads(env);
  assert.equal(lead.delivered, false, "and it is flagged for chasing");
  assert.equal(lead.email, "dana@example.com", "with the enquirer's details intact");
  assert.match(lead.deliveryError, /upstream_500/);
});

test("a 200 carrying success:\"false\" counts as failed delivery", async () => {
  const env = makeEnv();
  const flagged = () =>
    new Response(JSON.stringify({ success: "false" }), { status: 200 });
  const res = await withFetch(flagged, () => worker.fetch(post(VALID), env));
  assert.deepEqual(await res.json(), { ok: true, delivered: false });
});

test("the fallback target is used when the primary is down", async () => {
  const env = makeEnv({ LEAD_WEBHOOK_FALLBACK: "https://backup.example/hook" });
  const impl = (url) =>
    String(url).includes("backup") ? ok() : dead();
  const res = await withFetch(impl, () => worker.fetch(post(VALID), env));
  assert.deepEqual(await res.json(), { ok: true, delivered: true });
  const [lead] = await storedLeads(env);
  assert.equal(lead.deliveredVia, "fallback");
});

test("if the lead cannot be STORED, that failure is reported honestly", async () => {
  const env = makeEnv({ LEAD_LOG: fakeKV({ failWrites: true }) });
  const res = await withFetch(ok, () => worker.fetch(post(VALID), env));
  assert.equal(res.status, 503, "nothing captured it, so do not claim success");
  const body = await res.json();
  assert.equal(body.ok, false);
  assert.equal(body.error, "store_failed");
});

test("/leads refuses a missing or wrong token", async () => {
  const env = makeEnv();
  for (const url of [
    "https://x/leads",
    "https://x/leads?token=wrong",
    "https://x/leads?token=a-long-random-admin-toke",
  ]) {
    const res = await worker.fetch(new Request(url), env);
    assert.equal(res.status, 403, url);
  }
});

test("/leads returns leads, and can filter to the undelivered ones", async () => {
  const env = makeEnv();
  await withFetch(ok, () => worker.fetch(post(VALID), env));
  await withFetch(dead, () =>
    worker.fetch(post({ ...VALID, email: "second@example.com" }), env),
  );

  const all = await (
    await worker.fetch(
      new Request("https://x/leads?token=a-long-random-admin-token"),
      env,
    )
  ).json();
  assert.equal(all.count, 2);

  const missed = await (
    await worker.fetch(
      new Request(
        "https://x/leads?token=a-long-random-admin-token&undelivered=1",
      ),
      env,
    )
  ).json();
  assert.equal(missed.count, 1);
  assert.equal(missed.leads[0].email, "second@example.com");
});

// ---------------------------------------------------------------------------
// Check Cherry delivery
//
// The guest never sees Check Cherry: they fill in this site's own form and the
// lead is pushed through the API from the Worker. These cover the mapping and
// the fall-through, because a wrong mapping fails as a 422 at the far end where
// nobody is watching.
// ---------------------------------------------------------------------------

const CC_KEY = "ik_test_key_do_not_use";

/** Captures what was sent to the Check Cherry API. */
function captureCC(respond = () => new Response("{}", { status: 200 })) {
  const calls = [];
  return {
    calls,
    impl: (url, init) => {
      if (String(url).includes("checkcherry")) {
        calls.push({
          url: String(url),
          apiKey: init?.headers?.["Api-Key"],
          body: JSON.parse(init.body),
        });
        return respond();
      }
      return ok();
    },
  };
}

test("Check Cherry: lead is mapped onto the API's field names", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC();
  const res = await withFetch(cc.impl, () =>
    worker.fetch(
      post({
        ...VALID,
        company: "Whitfield Events",
        eventType: "Corporate event",
        county: "Hudson",
        experience: "Glambot",
        guestCount: "140",
      }),
      env,
    ),
  );

  assert.deepEqual(await res.json(), { ok: true, delivered: true });
  assert.equal(cc.calls.length, 1);

  const { url, apiKey, body } = cc.calls[0];
  assert.equal(url, "https://api.checkcherry.com/api/v1/leads");
  assert.equal(apiKey, CC_KEY, "the key travels as an Api-Key header");

  assert.equal(body.email, "dana@example.com");
  assert.equal(body.first_name, "Dana");
  assert.equal(body.last_name, "Whitfield");
  assert.equal(body.phone, "6095550142");
  assert.equal(body.company_name, "Whitfield Events");
  assert.equal(body.event_date, "2026-12-12");
  assert.equal(body.estimated_number_guests, 140, "sent as a number, not a string");
  assert.equal(body.venue_zip, "07030");
  assert.equal(body.venue_state, "NJ");
  assert.equal(body.lead_source, "newjerseyphotoactivations.com");
  assert.equal(body.lead_type, "Corporate event");

  assert.match(body.notes, /Hudson/, "county is kept as sales context");
  assert.match(body.notes, /Glambot/, "so is the experience they asked about");

  const [lead] = await storedLeads(env);
  assert.equal(lead.deliveredVia, "checkcherry");
});

test("Check Cherry: a one-word name does not invent a surname", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC();
  await withFetch(cc.impl, () =>
    worker.fetch(post({ ...VALID, name: "Cher" }), env),
  );
  assert.equal(cc.calls[0].body.first_name, "Cher");
  assert.equal(cc.calls[0].body.last_name, undefined);
});

test("Check Cherry: a multi-word surname stays whole", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC();
  await withFetch(cc.impl, () =>
    worker.fetch(post({ ...VALID, name: "Marisol Reyes Vega" }), env),
  );
  assert.equal(cc.calls[0].body.first_name, "Marisol");
  assert.equal(cc.calls[0].body.last_name, "Reyes Vega");
});

test("Check Cherry: empty fields are omitted, not sent as empty strings", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC();
  await withFetch(cc.impl, () =>
    worker.fetch(
      post({
        name: "Solo",
        email: "solo@example.com",
        eventDate: "2027-03-01",
        venueZip: "08540",
      }),
      env,
    ),
  );
  const body = cc.calls[0].body;
  assert.equal(body.company_name, undefined);
  assert.equal(body.message, undefined);
  assert.equal(body.estimated_number_guests, undefined);
  assert.ok(!("phone" in body) || body.phone === undefined);
  assert.equal(body.email, "solo@example.com", "the one required field survives");
});

test("Check Cherry: an out-of-state enquiry is not labelled NJ", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC();
  await withFetch(cc.impl, () =>
    worker.fetch(post({ ...VALID, county: "Outside New Jersey" }), env),
  );
  assert.equal(cc.calls[0].body.venue_state, undefined);
});

test("Check Cherry: campaign attribution reaches the pipeline", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC();
  await withFetch(cc.impl, () =>
    worker.fetch(
      post({
        ...VALID,
        utm_source: "google",
        utm_medium: "cpc",
        utm_campaign: "nj-360-booth",
        gclid: "abc123",
      }),
      env,
    ),
  );
  const body = cc.calls[0].body;
  assert.equal(body.utm_source, "google");
  assert.equal(body.utm_medium, "cpc");
  assert.equal(body.utm_campaign, "nj-360-booth");
  assert.equal(body.gclid, "abc123");
});

test("Check Cherry down: falls through to the webhook, guest unaffected", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const cc = captureCC(() => new Response("upstream boom", { status: 503 }));
  const res = await withFetch(cc.impl, () => worker.fetch(post(VALID), env));

  assert.deepEqual(await res.json(), { ok: true, delivered: true });
  const [lead] = await storedLeads(env);
  assert.equal(lead.deliveredVia, "primary", "the webhook caught it");
});

test("everything down: lead still stored, both failures recorded", async () => {
  const env = makeEnv({ CHECKCHERRY_API_KEY: CC_KEY });
  const res = await withFetch(dead, () => worker.fetch(post(VALID), env));

  assert.deepEqual(await res.json(), { ok: true, delivered: false });
  const [lead] = await storedLeads(env);
  assert.match(lead.deliveryError, /checkcherry_500/);
  assert.match(lead.deliveryError, /primary:/);
});

test("no Check Cherry key configured: it is skipped silently", async () => {
  const env = makeEnv();
  const cc = captureCC();
  const res = await withFetch(cc.impl, () => worker.fetch(post(VALID), env));
  assert.equal(cc.calls.length, 0, "no call attempted without a key");
  assert.deepEqual(await res.json(), { ok: true, delivered: true });
  const [lead] = await storedLeads(env);
  assert.equal(lead.deliveredVia, "primary");
});
