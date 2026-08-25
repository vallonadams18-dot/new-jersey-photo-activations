/**
 * Every outward-facing constant for the New Jersey site.
 *
 * The domain is deliberately not hard-coded anywhere else in the codebase —
 * canonicals, Open Graph tags, the sitemap and every schema `@id` read
 * `SITE.url`, so pointing the site at its final domain is a one-line change
 * (or an Actions variable) rather than a find-and-replace.
 */
export const SITE = {
  name: "New Jersey Photo Activations",
  legalName: "New Jersey Photo Activations",
  /**
   * The live domain. Confirmed registered 25 Aug 2026, currently on Squarespace
   * nameservers — see docs/DOMAIN-SETUP.md for the DNS change that points it here.
   *
   * The env var wins in CI so the domain can be changed without a code deploy;
   * this literal is the local-dev and fallback value.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.newjerseyphotoactivations.com",
  /**
   * The public contact address. Also the fallback destination for the quote
   * form (see QuoteForm) when no Worker or CRM webhook is configured.
   *
   * Note this is a Gmail address, not an address on this domain — which is
   * deliberate and, for now, necessary: the domain's SPF record is
   * `v=spf1 -all`, declaring that it sends no mail at all. See
   * docs/DOMAIN-SETUP.md.
   */
  email:
    process.env.NEXT_PUBLIC_SITE_EMAIL || "newjerseyphotoactivations@gmail.com",
  phone: "(917) 724-6051",
  phoneHref: "tel:+19177246051",
  instagram: "https://www.instagram.com/magicmirrorbk/",
  /**
   * GA4 property for this domain — separate from the parent business's, so
   * New Jersey traffic is never mixed into Brooklyn's reporting.
   *
   * Loading this is also what makes the quote form's `generate_lead`
   * conversion event fire: QuoteForm calls `window.gtag` only after a
   * confirmed 2xx from the lead endpoint, and until now nothing was
   * listening.
   */
  gaMeasurementId:
    process.env.NEXT_PUBLIC_GA_ID || "G-GLTGV3RLRW",
  /**
   * Decision 3: this is a distinct brand, so it carries no rating and no
   * review schema of its own. The credibility is borrowed openly and
   * attributed to the parent business rather than claimed here.
   */
  parent: {
    name: "Magic Mirror Brooklyn",
    url: "https://www.magicmirrorbrooklyn.com",
    rating: 4.9,
    reviewCount: 210,
    reviewsUrl: "https://maps.google.com/?cid=13389849959803291430",
  },
  /** Statewide. There is no New Jersey office — see docs/OPEN-QUESTIONS.md. */
  serviceArea: "New Jersey",
} as const;

export const NAV_CORPORATE = [
  { href: "/corporate-events", label: "Corporate Events" },
  { href: "/brand-activations", label: "Brand Activations" },
  { href: "/trade-shows", label: "Trade Shows" },
] as const;

export const NAV_PRIVATE = [
  { href: "/weddings", label: "Weddings" },
  { href: "/special-events", label: "Special Events" },
] as const;

export const NAV_EXPERIENCES = [
  { href: "/experiences/branded-photo-booth", label: "Branded Booth" },
  { href: "/experiences/ai-photo-booth", label: "AI Photo Booth" },
  { href: "/experiences/glambot", label: "Glambot" },
  { href: "/experiences/mirror-x", label: "Mirror X" },
  { href: "/experiences/magic-mirror", label: "Magic Mirror" },
  { href: "/experiences/360-photo-booth", label: "360 Photo Booth" },
  { href: "/experiences/roaming-photo-booth", label: "Roaming Booth" },
  { href: "/experiences/studio-booth", label: "Studio Booth" },
  { href: "/experiences/glam-booth", label: "Glam Booth" },
  { href: "/experiences/vogue-booth", label: "Vogue Booth" },
  { href: "/experiences/green-screen-photo-booth", label: "Green Screen" },
  { href: "/experiences/mosaic-wall", label: "Mosaic Wall" },
  { href: "/experiences/magazine-booth", label: "Magazine Booth" },
  { href: "/experiences/gif-booth", label: "GIF Booth" },
  { href: "/experiences/3d-slider-booth", label: "3D Slider Booth" },
  { href: "/experiences/enclosed-photo-booth", label: "Enclosed Booth" },
  { href: "/experiences/champagne-wall", label: "Champagne Wall" },
  { href: "/experiences/flower-wall", label: "Flower Wall" },
] as const;

export const NAV_LOCATIONS = [
  { href: "/locations/jersey-city", label: "Jersey City" },
  { href: "/locations/hoboken", label: "Hoboken" },
  { href: "/locations/newark", label: "Newark" },
  { href: "/locations/princeton", label: "Princeton" },
  { href: "/locations/atlantic-city", label: "Atlantic City" },
  { href: "/locations/bergen-county", label: "Bergen County" },
  { href: "/locations/essex-county", label: "Essex County" },
  { href: "/locations/hudson-county", label: "Hudson County" },
  { href: "/locations/union-county", label: "Union County" },
  { href: "/locations/morris-county", label: "Morris County" },
  { href: "/locations/middlesex-county", label: "Middlesex County" },
  { href: "/locations/monmouth-county", label: "Monmouth County" },
  { href: "/locations/ocean-county", label: "Ocean County" },
] as const;

export const QUOTE_HREF = "/get-a-quote";
