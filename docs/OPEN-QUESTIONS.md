# Open questions

Things that need your input. Nothing here blocks the site from running — every
one has a working placeholder — but each is a real decision only you can make.

Ordered by how much it costs to leave unanswered.

---

## 1. ~~The domain~~ — DONE, 25 Aug 2026

**Live at [https://www.newjerseyphotoactivations.com](https://www.newjerseyphotoactivations.com).**

DNS moved off Squarespace hosting onto GitHub Pages, custom domain set, HTTPS
enforced, apex 301s to `www`. Full record of what changed in
[`DOMAIN-SETUP.md`](DOMAIN-SETUP.md).

Two follow-ups it raised:

- The Squarespace "Coming Soon" placeholder is gone. **If a Squarespace website
  subscription is attached to this domain, cancel it separately** — DNS changes
  do not stop billing.
- `TXT @` is `v=spf1 -all`, so this domain currently sends **no** email. Fine for
  a website; must change before `hello@newjerseyphotoactivations.com` could send
  anything. See item 3.

---

## 2. A CheckCherry contact form for New Jersey

**Placeholder in use:** the site's own quote form, posting to a configurable
endpoint that currently falls back to a FormSubmit relay to
`newjerseyphotoactivations@gmail.com`, confirmed delivering (see item 3).

The Brooklyn site runs a CheckCherry widget hard-coded to contact form `20601`
on the `magic-mirror-brooklyn-llc` account. I deliberately did **not** clone
that: every New Jersey enquiry would have landed in the Brooklyn pipeline
indistinguishable from a Brooklyn lead.

**Needed:** create a second CheckCherry contact form for New Jersey and send me
the form ID. I will swap the built-in form for the widget, or keep both — the
built-in form is honestly quite good and captures county and company, which the
CheckCherry one does not.

---

## 3. Email — set. Phone still open.

**Email:** `newjerseyphotoactivations@gmail.com`, set 25 Aug 2026. It appears in
the footer, on Contact, in the Organization schema, and is the fallback
destination for the quote form.

> **Delivery confirmed end to end, 29 Aug 2026.** With no Cloudflare Worker or
> CRM webhook configured, the quote form posts to FormSubmit at
> `formsubmit.co/ajax/newjerseyphotoactivations@gmail.com`. FormSubmit requires a
> one-time confirmation of any new address, and that has now been done: a test
> enquiry was submitted through the live form and **arrived in the inbox**.
>
> Two things came out of that test and both are fixed:
>
> 1. The address is activated, so enquiries now deliver.
> 2. The form used to treat any 2xx as delivered. FormSubmit answers `200` with
>    `{"success":"false"}` for an unconfirmed address, so an undelivered lead
>    still pushed the visitor to `/thank-you` and fired a `generate_lead`
>    conversion. The form now reads the response body and fails visibly instead.
>
> Re-test after any change to the delivery endpoint — this is the one part of
> the site that can fail without anyone noticing.

A Gmail address rather than one on the domain is the right call for now — the
domain's SPF record is `v=spf1 -all`, so it cannot send mail at all until that
changes.

**Phone still open.** Currently `(917) 724-6051` — the parent business's number.
Correct, but a dedicated New Jersey number would let you attribute calls to this
site. One line in `site.ts` whenever you have one.

---

## 4. A logo

**Placeholder in use:** a typographic wordmark — the name set in Cormorant
Garamond with a champagne rule, in [`src/components/Wordmark.tsx`](../src/components/Wordmark.tsx).

This is a deliberate holding position, not an oversight. It reads as a luxury
identity on its own, and it means nothing on this site borrows the Magic Mirror
Brooklyn mark. Several premium brands never use anything else.

**Needed:** only if you want one. If you do, supply an SVG and I will swap it in.
If you are happy with the wordmark, we are done — I would lean towards keeping it.

---

## 5. Hudson County — keep, cut, or stub?

**Currently:** built, as a genuine hub page.

I flagged in the audit that Hudson County overlaps Jersey City and Hoboken, both
of which have their own pages. Rather than leave a gap, I wrote it around the
things that are *only* true at county level — the Meadowlands Exposition Center
in Secaucus, the Weehawken and Bayonne waterfront, and the skyline corridor as a
whole — and it explicitly points readers down to the two city pages.

**Needed:** nothing urgent. It earns its place as written. Flagging it only
because I said I would.

---

## 6. Headshots as their own page

**Currently:** a major section inside the Studio Booth experience page.

"Corporate headshots New Jersey" is a strong commercial search term with
different intent from "photo booth". Splitting it into `/experiences/headshots`
would target it directly.

I did not do it unprompted because it would mean presenting one service as two,
and the audit rule was that nothing gets invented.

**Needed:** your call on whether corporate headshots are a service you actively
want to sell. If yes, it is a genuinely valuable page.

---

## 7. New Jersey event photography

**Currently:** the gallery carries twelve real events, all shot outside New Jersey,
and [`/gallery`](../src/app/gallery/page.tsx) says so plainly in a banner above
the work.

That is the honest position and it is fine. But New Jersey work would be the
strongest content on the site, and it would let the location pages carry proof
rather than only argument.

**Needed:** if you have photographs from any New Jersey event, send them. They go
straight in.

---

## 8. A real New Jersey business presence

**Currently:** none, and the site never implies otherwise. Schema uses
`Organization` with a statewide `areaServed` rather than `LocalBusiness` with an
address, precisely because there is no address to state.

This is the single biggest ceiling on the project. No New Jersey address means no
New Jersey Google Business Profile, which means no map pack — and the Phase 0
benchmark showed the map pack is doing most of the work for the thin sites
currently ranking.

**Needed:** a decision, eventually, about whether a genuine registered New Jersey
address is worth establishing. That is a real business decision with real costs,
and entirely yours. I will not invent one to shortcut it.

---

## 9. ~~Analytics and Search Console~~ — DONE, 29 Aug 2026

**GA4:** property `G-GLTGV3RLRW`, live on every page.

**Search Console:** URL-prefix property `https://www.newjerseyphotoactivations.com/`,
**ownership verified** by HTML tag.

> **Registered under the wrong Google account.** It was created from the account
> that happened to be signed in, not `newjerseyphotoactivations@gmail.com`. This
> brand keeps its own accounts, so the property should move: add the New Jersey
> address as an owner, confirm it, then remove the other account. The
> verification token is a property of the site, not the account, so moving
> ownership does not change it and does not re-trigger verification.

**Sitemap submitted 29 Aug 2026:** `/sitemap.xml`, status *Success*, 52 pages
discovered on the first read.

The token lives in `SITE.gscVerification` and renders on all 55 pages.
`NEXT_PUBLIC_GSC_VERIFICATION` still overrides it if it ever needs rotating.

> **Do not remove that meta tag.** Google re-checks it after verification; taking
> it out silently un-verifies the property. Search Console suggests adding a
> second method under *Settings → Ownership verification* as insurance — worth
> doing, not urgent.

The Google Analytics verification method does **not** work on this site and is
not worth retrying: it requires the tracking snippet in `<head>`, and
`@next/third-parties` injects gtag into `<body>` after hydration.

Indexing is now Google's move. Nothing more to do here but wait and watch
Performance.

---

## 10. Phase 7 items, parked by design

From the approved plan, deliberately not built yet:

- **The 301s from Brooklyn.** Twenty-one New Jersey URLs on
  `magicmirrorbrooklyn.com` redirect across *after* this site indexes, not before.
- **Experience × market combination pages.** Roughly 25, chosen from real Search
  Console data rather than guessed. Not 111, and not generated.
- **Cross-linking strategy** between the two sites.
