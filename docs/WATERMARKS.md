# Watermarks and image quality

Two problems came out of building this site on a shared asset library, and both
are now guarded by the build rather than by memory.

---

## The parent company's watermark

Many photographs in the shared library have a **"Magic Mirror Brooklyn"** mark
burned into the bottom-right corner. It cannot appear here — this is a different
brand — and it is not something a viewer would read as a stock artefact. It reads
as the wrong company's site.

**32 images were affected.** They are cropped rather than deleted: these are our
own photographs carrying our own watermark, and dropping them would have stripped
several pages of their imagery. Every one is framed loosely enough that losing
the bottom sixth costs nothing. One (`3d-slider-hero.jpg`) carries a mark about
twice normal size and gets a deeper crop.

`scripts/strip-watermarks.mjs` does the cropping and records what it did in
`watermark-crops.json`. It is idempotent — re-running after re-copying assets
from the source library re-crops only what came back watermarked.

### How the list was found

Correlating the bottom-right corner of every referenced image against a template
built from known-watermarked frames. The corners are high-pass filtered first
(subtract a blurred copy) so the mark's *structure* drives the match rather than
its colour — it is semi-transparent and sits over wildly different backgrounds.

Scores separated cleanly: watermarked frames scored 0.26–0.66, everything else
below 0.10. Each hit was then confirmed by eye on a contact sheet, and a handful
of low-scoring misses were caught the same way and added by hand.

> A multi-scale sliding-window version was tried and performed **worse** —
> scores collapsed into a narrow band as the window found spurious matches
> elsewhere in the frame. The fixed-region detector is the one to reuse.

### Not to be confused with client branding

Gallery event photographs carry *client* branding in the same corner — EBIN,
Google Cloud, adidas, Hellmann's, The Blackening, botify × CommerceNext. That is
the print overlay we produced for those events and it is exactly the evidence
the site exists to show. It stays.

---

## Image quality

`scripts/check-image-quality.mjs` fails the build on images too small for the
slot they sit in. Thresholds in megapixels:

| Slot | Minimum | Why |
| --- | --- | --- |
| `hero` | 1.4 MP | Full-bleed behind the H1, and the LCP element |
| `inline` | 1.0 MP | ~700px-wide figures between the prose blocks |
| `gallery` | 0.18 MP | Grid tiles and scrolling strips, displayed small |

This caught nine heroes below the bar on its first run, including the homepage
(`hero-gold-wall.jpg`, 1000×750) and the AI Photo Booth (768×512). All were
swapped for high-resolution frames.

It also caught the first version of the experience-page inline images. Those had
reached for the event-photography sets to avoid repeating gallery images, but
those sets top out at 600×900 — displayed ~700px wide they were upscaled and
soft. On-subject and sharp beats novel and mushy.

### Known unfixable

Some source groups have **no** frame above 1 MP: `green-screen-*`,
`glam-booth-*`, `template-*`, and the event sets (`aftr-*`, `ebin-*`,
`harlem-*`, `fitchvid-*`, `sweetheart-*` at 600×900; `hanky-panky-*` at
467×700). Pages needing those subjects borrow a high-resolution frame from a
related shoot, with alt text describing what is actually in the picture.

Higher-resolution originals for those shoots would let several pages use their
own photography instead.

---

## Running them

All three run automatically in `prebuild`:

```bash
npm run build
```

Or individually:

```bash
node scripts/fix-logo-transparency.mjs
node scripts/strip-watermarks.mjs
npm run check:images
```
