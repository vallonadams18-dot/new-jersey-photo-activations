# New Jersey Photo Activations

Luxury photo booth and interactive event experiences across New Jersey. The New
Jersey practice of the team behind Magic Mirror Brooklyn.

A separate site and a separate repository from
[magicmirrorbrooklyn.com](https://www.magicmirrorbrooklyn.com) — that site
remains the New York operation and is not affected by anything here.

**Start here:** [`docs/OPEN-QUESTIONS.md`](docs/OPEN-QUESTIONS.md) — the ten
things that need a decision, each with a working placeholder in the meantime.

---

## Running it

```bash
npm install
npm run dev
```

`npm run build` produces a fully static site in `out/`, deployable to GitHub
Pages or any static host. The `prebuild` step regenerates responsive WebP
variants for every image, so the first build after adding images is slower.

## How the site is built

Pages are **data, not files**. Content lives in typed data modules under
`src/data/`, five template components render it, and the sitemap is generated
from the same data — so a new page physically cannot be missing from it.

| Data | Pages | Route |
| --- | --- | --- |
| `experiences-a.ts`, `experiences-b.ts` | 18 | `/experiences/[slug]` |
| `locations-cities.ts` | 5 | `/locations/[slug]` |
| `locations-counties.ts` | 8 | `/locations/[slug]` |
| `services.ts` | 5 | `/corporate-events`, `/weddings`, … |
| `guides.ts` | 6 | `/guides/[slug]` |
| `gallery.ts` | 12 events | `/gallery` |

Plus the homepage, four index pages, and the usual static and legal pages —
**52 URLs in the sitemap**.

### Adding a page

Add an entry to the relevant data module. The route, the sitemap entry, the
schema and the internal links follow automatically. Do not hand-author page
files.

## The design system

Defined once, in `src/app/globals.css` as Tailwind v4 `@theme` tokens.

| Token | Value | Use |
| --- | --- | --- |
| `obsidian` | `#0B0B0D` | Primary ground |
| `charcoal` | `#17171B` | Raised surfaces, alternating sections |
| `champagne` | `#C8A96B` | Accent — **dark grounds only** |
| `champagne-deep` | `#8A6A32` | Accent on ivory and white |
| `ivory` | `#F7F3EA` | Light sections, body text on dark |
| `mute` | `#A7A7AC` | Secondary text |

Three utilities carry the gradients: `gradient-gold` (primary CTAs),
`gradient-dark` (major dark areas) and `glow-gold` (at most twice per page).

**The one rule that matters:** champagne gold measures 2.25:1 on ivory and fails
WCAG AA badly. It measures 8.75:1 on obsidian. So gold text sits on dark grounds
only; on ivory and white it becomes `champagne-deep`, which measures 5.01:1 on
white and 4.53:1 on ivory. That second figure has almost no margin — do not
lighten either token without re-measuring. Verified in-browser: **zero failing
combinations across the site.**

Type is Cormorant Garamond for display and Jost for body and UI. Cormorant is
display-only — it is too delicate below about 28px, so smaller headings use the
`.heading-sm` class, which switches to Jost.

## Deployment

GitHub Actions builds and deploys to Pages on push to `main`. Set these as
Actions **variables** (Settings → Secrets and variables → Actions):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The live domain. Drives every canonical, OG tag, sitemap entry and schema `@id`. |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | Optional. A Cloudflare Worker that validates and rate-limits leads. |
| `NEXT_PUBLIC_LEAD_WEBHOOK_URL` | Optional. A CRM inbound webhook. |
| `NEXT_PUBLIC_SITE_EMAIL` | Optional. Overrides the contact address. |

A `public/CNAME` file is still needed for the custom domain — added once the
domain is confirmed.

## Things this site deliberately does not do

These were decisions, not omissions:

- **No `aggregateRating` schema.** The 4.9 belongs to Magic Mirror Brooklyn's
  Google listing. It appears in the page copy with attribution and a link, and
  is never marked up as this domain's own.
- **No `LocalBusiness` schema.** There is no New Jersey premises. Schema uses
  `Organization` with a statewide `areaServed`, because `LocalBusiness` without a
  real `PostalAddress` is either incomplete markup or an invitation to invent an
  address.
- **No claimed venue relationships.** Venues are named as public landmarks of the
  local event scene. `/locations/*` and `/terms` both say explicitly that no
  partnership or preferred-vendor status is implied.
- **No cross-domain canonicals** to or from the Brooklyn site.
- **No combination pages yet.** Deferred until this site indexes, then built from
  real Search Console data — roughly 25, hand-written, not 111 generated.
