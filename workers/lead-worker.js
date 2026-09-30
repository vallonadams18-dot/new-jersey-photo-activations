/**
 * New Jersey Photo Activations — lead delivery Worker (Cloudflare).
 *
 * WHY THIS EXISTS
 *
 * On 29 Sep 2026 FormSubmit's API returned 500 for hours. The site posted
 * enquiries straight to it, so for the length of that outage every enquiry was
 * lost — and worse, nothing anywhere recorded that they had been attempted, so
 * there was no way to know how many or to follow any of them up.
 *
 * This Worker exists so that can never happen again. Its contract differs from
 * the Magic Mirror Brooklyn worker it is adapted from in one deliberate way:
 *
 *   Brooklyn:    deliver upstream, and only report success on an upstream 2xx.
 *   New Jersey:  STORE THE LEAD FIRST, then attempt delivery. Once the lead is
 *                durably stored it is captured, and the enquirer is told so.
 *
 * Failing a guest who has just filled in eleven fields, because some third
 * party is having a bad afternoon, loses a booking for no reason at all. The
 * lead is safe in KV either way; delivery is a convenience on top of that, not
 * the thing that defines success.
 *
 * The one failure this Worker DOES report honestly is being unable to store the
 * lead. At that point nothing has captured it and saying otherwise would be a
 * lie — which is the exact bug this whole line of work started with.
 *
 * Required bindings (configure in the Cloudflare dashboard or wrangler.toml —
 * never in the site repo):
 *   LEAD_LOG          KV      — every lead and every attempt. THE source of truth.
 *   RATE_KV           KV      — rate-limit counters
 *   ALLOWED_ORIGIN    var     — https://www.newjerseyphotoactivations.com
 *   LEAD_WEBHOOK      secret  — primary delivery URL
 *   LEAD_WEBHOOK_FALLBACK secret (optional) — tried when the primary fails, so
 *                              one provider's outage is not an outage here
 *   ADMIN_TOKEN       secret  — long random string; required to read leads back
 *   TURNSTILE_SECRET  secret  (optional) — add the site key to the form to enable
 *   MOCK_MODE         var     — "1" to accept without forwarding (local/testing)
 *
 * Deploy:  npx wrangler deploy workers/lead-worker.js --name njpa-lead
 * Then set NEXT_PUBLIC_LEAD_ENDPOINT to the Worker URL in the Actions variables.
 *
 * Read leads back:
 *   GET /leads?token=<ADMIN_TOKEN>              most recent 100
 *   GET /leads?token=<ADMIN_TOKEN>&undelivered=1  only those delivery missed
 */

const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_S = 600; // per 10 minutes per IP

const REQUIRED = ["name", "email", "eventDate", "venueZip"];
const MAX_LEN = 2000;

// Leads outlive the 90 days the Brooklyn worker keeps: an enquiry for an event
// 14 months out is still a live opportunity long after a debug log stops being
// interesting.
const LEAD_TTL_S = 60 * 60 * 24 * 400;

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

function json(env, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(env),
  });
}

/** Constant-time-ish compare so the admin token cannot be guessed byte by byte. */
function tokenMatches(given, expected) {
  if (!expected || typeof given !== "string") return false;
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i++) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

/**
 * Attempts one delivery target. Never throws — the caller treats every failure
 * the same way, and an exception here must not be able to lose a stored lead.
 */
async function deliver(url, lead) {
  if (!url) return { ok: false, error: "not_configured" };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    // Some relays answer 200 with a failure flag in the body rather than a
    // non-2xx status. Treat that as the failure it is.
    let flaggedFailure = false;
    try {
      const body = await res.clone().json();
      const success = body?.success;
      flaggedFailure = success === false || success === "false";
    } catch {
      /* not JSON, or empty — judge on status alone */
    }
    if (!res.ok || flaggedFailure) {
      return { ok: false, error: `upstream_${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    // Read leads back. Guarded by ADMIN_TOKEN and never CORS-exposed to the
    // site, because this returns enquirers' contact details.
    if (request.method === "GET" && url.pathname === "/leads") {
      if (!tokenMatches(url.searchParams.get("token"), env.ADMIN_TOKEN)) {
        return new Response(JSON.stringify({ ok: false, error: "forbidden" }), {
          status: 403,
          headers: { "Content-Type": "application/json" },
        });
      }
      if (!env.LEAD_LOG) {
        return new Response(
          JSON.stringify({ ok: false, error: "not_configured" }),
          { status: 500, headers: { "Content-Type": "application/json" } },
        );
      }
      const undeliveredOnly = url.searchParams.get("undelivered") === "1";
      const list = await env.LEAD_LOG.list({ prefix: "lead:", limit: 100 });
      const leads = [];
      for (const key of list.keys) {
        const raw = await env.LEAD_LOG.get(key.name);
        if (!raw) continue;
        const entry = JSON.parse(raw);
        if (undeliveredOnly && entry.delivered) continue;
        leads.push(entry);
      }
      // Newest first: keys are ISO-prefixed, so reverse lexicographic works.
      leads.sort((a, b) => String(b.receivedAt).localeCompare(a.receivedAt));
      return new Response(JSON.stringify({ ok: true, count: leads.length, leads }, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (request.method !== "POST") {
      return json(env, 405, { ok: false, error: "method_not_allowed" });
    }

    let lead;
    try {
      lead = await request.json();
    } catch {
      return json(env, 400, { ok: false, error: "invalid_json" });
    }

    const ip = request.headers.get("cf-connecting-ip") || "unknown";

    // Honeypot: pretend success, store nothing, deliver nothing.
    if (lead.company_website) {
      return json(env, 200, { ok: true });
    }

    // Server-side validation. The client validates too, but the client is not
    // something we control.
    // Validate the TRIMMED values. Checking the raw string rejects anyone who
    // pastes " dana@example.com " with a stray space — a typo worth absorbing,
    // not an enquiry worth turning away. Normalization below trims anyway, so
    // validating the raw value only ever disagreed with what we would store.
    const field = (name) => String(lead[name] ?? "").trim();

    const errors = [];
    for (const name of REQUIRED) {
      if (!field(name)) errors.push(name);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field("email")))
      errors.push("email_format");
    if (!/^\d{5}(-\d{4})?$/.test(field("venueZip"))) errors.push("zip_format");
    for (const [k, v] of Object.entries(lead)) {
      if (typeof v === "string" && v.length > MAX_LEN) errors.push(`${k}_too_long`);
    }
    if (errors.length) {
      return json(env, 422, { ok: false, error: "validation", fields: errors });
    }

    // Rate limit by IP.
    if (env.RATE_KV) {
      const bucket = `rate:${ip}:${Math.floor(Date.now() / (RATE_WINDOW_S * 1000))}`;
      const count = parseInt((await env.RATE_KV.get(bucket)) || "0", 10) + 1;
      await env.RATE_KV.put(bucket, String(count), { expirationTtl: RATE_WINDOW_S });
      if (count > RATE_LIMIT) {
        return json(env, 429, { ok: false, error: "rate_limited" });
      }
    }

    // Turnstile verification (when configured).
    if (env.TURNSTILE_SECRET) {
      const token = String(lead["cf-turnstile-response"] ?? "");
      const verify = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: env.TURNSTILE_SECRET,
            response: token,
            remoteip: ip,
          }),
        },
      ).then((r) => r.json());
      if (!verify.success) {
        return json(env, 403, { ok: false, error: "captcha" });
      }
      delete lead["cf-turnstile-response"];
    }

    const receivedAt = new Date().toISOString();
    const id = crypto.randomUUID().slice(0, 8);
    const clean = {
      ...lead,
      name: String(lead.name).trim(),
      email: String(lead.email).trim().toLowerCase(),
      phone: String(lead.phone ?? "").replace(/[^\d+]/g, ""),
      venueZip: String(lead.venueZip).trim(),
      receivedAt,
      id,
      ip,
    };

    if (env.MOCK_MODE === "1") {
      return json(env, 200, { ok: true, mock: true });
    }

    // ---- Step 1: store it. This is what "received" actually means. ----
    const key = `lead:${receivedAt}-${id}`;
    if (!env.LEAD_LOG) {
      // Nothing has captured the lead, so do not claim otherwise.
      return json(env, 503, { ok: false, error: "not_configured" });
    }
    try {
      await env.LEAD_LOG.put(
        key,
        JSON.stringify({ ...clean, delivered: false }),
        { expirationTtl: LEAD_TTL_S },
      );
    } catch (err) {
      return json(env, 503, { ok: false, error: "store_failed", detail: String(err) });
    }

    // ---- Step 2: try to deliver. The lead is already safe. ----
    let result = await deliver(env.LEAD_WEBHOOK, clean);
    let via = "primary";
    if (!result.ok && env.LEAD_WEBHOOK_FALLBACK) {
      result = await deliver(env.LEAD_WEBHOOK_FALLBACK, clean);
      via = "fallback";
    }

    await env.LEAD_LOG.put(
      key,
      JSON.stringify({
        ...clean,
        delivered: result.ok,
        deliveredVia: result.ok ? via : null,
        deliveryError: result.ok ? null : result.error,
      }),
      { expirationTtl: LEAD_TTL_S },
    );

    // Stored either way, so the enquirer hears success either way. When
    // delivery missed, `delivered: false` says so for anyone reading the
    // response, and /leads?undelivered=1 lists exactly what needs chasing.
    return json(env, 200, { ok: true, delivered: result.ok });
  },
};

export default worker;
