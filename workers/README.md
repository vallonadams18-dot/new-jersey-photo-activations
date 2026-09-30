# Lead endpoint (Cloudflare Worker)

What this is, and why the site has one.

On **29 September 2026** FormSubmit's API returned `500` for hours. The quote
form posted straight to it, so for the length of that outage every enquiry was
lost — and nothing anywhere recorded that they had even been attempted. There
was no way to know how many were missed, or to follow up a single one.

This Worker sits between the form and whatever delivers the email. Its job is to
make sure a lead survives the delivery mechanism failing.

## The contract

It differs from the Magic Mirror Brooklyn worker it was adapted from, on purpose:

| | Brooklyn | New Jersey |
|---|---|---|
| Success means | the upstream accepted it | **the lead is stored** |
| Upstream down | guest sees an error | guest sees success, lead is flagged for chasing |
| Cannot store | — | guest sees an error, honestly |

Once a lead is in storage it is captured. Turning away someone who has just
filled in eleven fields, because a third party is having a bad afternoon, loses
a booking for no reason. The one failure reported honestly is being unable to
store it — at that point nothing has the lead, and saying otherwise would be the
exact bug this whole line of work began with.

## Deploying it

You need a Cloudflare account. Run these from the repo root.

```bash
npx wrangler login
```

Create the two KV namespaces and paste the returned ids into `wrangler.toml`,
replacing `PASTE_LEAD_LOG_ID` and `PASTE_RATE_KV_ID`:

```bash
npx wrangler kv namespace create LEAD_LOG
npx wrangler kv namespace create RATE_KV
```

Set the secrets. `ADMIN_TOKEN` should be long and random — it is the only thing
protecting enquirers' contact details:

```bash
npx wrangler secret put LEAD_WEBHOOK
npx wrangler secret put ADMIN_TOKEN
```

For `LEAD_WEBHOOK`, `https://formsubmit.co/ajax/newjerseyphotoactivations@gmail.com`
is a reasonable starting value — it goes to the same inbox as today, except that
now an outage no longer loses anything. If you add a second provider later, set
it as `LEAD_WEBHOOK_FALLBACK` and the Worker tries it whenever the primary fails.

Deploy:

```bash
npx wrangler deploy --config workers/wrangler.toml
```

Then point the site at it. In the repo's **Settings → Secrets and variables →
Actions → Variables**, set:

```
NEXT_PUBLIC_LEAD_ENDPOINT = https://njpa-lead.<your-subdomain>.workers.dev
```

and re-run the deploy workflow. The form already prefers that variable over
FormSubmit — see `NEXT_PUBLIC_LEAD_ENDPOINT` in `QuoteForm.tsx` — so no code
change is needed.

## Reading leads back

```
GET https://njpa-lead.<subdomain>.workers.dev/leads?token=<ADMIN_TOKEN>
GET https://njpa-lead.<subdomain>.workers.dev/leads?token=<ADMIN_TOKEN>&undelivered=1
```

The second one is the important one: anything listed there reached the site but
did **not** reach the inbox, and needs chasing by hand. Check it after any
outage. Leads are kept for 400 days, because an enquiry for an event 14 months
out is still live long after a debug log stops being interesting.

## Tests

```bash
npm run test:worker
```

Thirteen cases covering validation, the honeypot, rate limiting, the admin token,
and — the one that matters — delivery failing while the lead is still stored and
the guest still told the truth.

Writing them caught a real bug inherited from the Brooklyn worker: email was
validated *before* trimming, so anyone pasting ` dana@example.com ` with a stray
space was rejected outright. Fixed here.
