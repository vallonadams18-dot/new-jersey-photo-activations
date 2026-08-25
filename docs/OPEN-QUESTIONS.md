# Open questions

Things that need your input. Nothing here blocks the site from running — every
one has a working placeholder — but each is a real decision only you can make.

Ordered by how much it costs to leave unanswered.

---

## 1. The domain, exactly

**Placeholder in use:** `https://www.newjerseyphotoactivations.com`

Nothing is hard-coded. Every canonical, Open Graph tag, sitemap entry and schema
`@id` reads `SITE.url` in [`src/lib/site.ts`](../src/lib/site.ts), which reads
`NEXT_PUBLIC_SITE_URL`. Setting the real domain is one environment variable, or
one line in that file.

**Needed:** is it `.com`? Is it registered? Once you confirm, I set the variable,
add the `CNAME` file and point the Pages deployment at it.

---

## 2. A CheckCherry contact form for New Jersey

**Placeholder in use:** the site's own quote form, posting to a configurable
endpoint that currently falls back to a FormSubmit relay to `hello@mirrormebrooklyn.com`.

The Brooklyn site runs a CheckCherry widget hard-coded to contact form `20601`
on the `magic-mirror-brooklyn-llc` account. I deliberately did **not** clone
that: every New Jersey enquiry would have landed in the Brooklyn pipeline
indistinguishable from a Brooklyn lead.

**Needed:** create a second CheckCherry contact form for New Jersey and send me
the form ID. I will swap the built-in form for the widget, or keep both — the
built-in form is honestly quite good and captures county and company, which the
CheckCherry one does not.

---

## 3. Email address and phone number

**Placeholders in use:** `hello@mirrormebrooklyn.com` and `(917) 724-6051`.

Both are correct today — same business, same people. But a New Jersey brand with
a Brooklyn-facing email address undercuts the positioning slightly, and a
separate number would let you attribute calls.

**Needed:** do you want `hello@newjerseyphotoactivations.com` (or similar) and a
dedicated NJ tracking number? Both are one-line changes in `site.ts`.

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

## 9. Analytics and Search Console

**Currently:** the quote form fires a `generate_lead` event if `gtag` is present,
but no analytics property is installed and no Search Console verification token
is set.

**Needed:** once the domain is live — a GA4 property ID and a Search Console
verification token. Both drop into `layout.tsx` in a minute.

---

## 10. Phase 7 items, parked by design

From the approved plan, deliberately not built yet:

- **The 301s from Brooklyn.** Twenty-one New Jersey URLs on
  `magicmirrorbrooklyn.com` redirect across *after* this site indexes, not before.
- **Experience × market combination pages.** Roughly 25, chosen from real Search
  Console data rather than guessed. Not 111, and not generated.
- **Cross-linking strategy** between the two sites.
