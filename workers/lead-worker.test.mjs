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
