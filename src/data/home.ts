import type { Faq } from "./types";

/** The six experiences that lead the homepage, in card order. */
export const FEATURED_SLUGS = [
  "branded-photo-booth",
  "ai-photo-booth",
  "glambot",
  "mirror-x",
  "360-photo-booth",
  "studio-booth",
] as const;

/**
 * Real client logos from the portfolio. Nothing here is invented.
 *
 * Hilton is deliberately absent. Its source PNG is black artwork on an opaque
 * black field, so there is no background to separate from the mark — the row's
 * `brightness-0 invert` treatment turns the whole rectangle into a solid white
 * block, and stripping the background erases the logo entirely.
 * `scripts/fix-logo-transparency.mjs` detects and reports this. Drop in a
 * transparent Hilton PNG and it can go straight back into this list.
 */
export const brandLogos = [
  { src: "/img/logos/google-cloud.png", alt: "Google Cloud" },
  { src: "/img/logos/adidas.png", alt: "adidas" },
  { src: "/img/logos/servicenow.png", alt: "ServiceNow" },
  { src: "/img/logos/figma.png", alt: "Figma" },
  { src: "/img/logos/macys.png", alt: "Macy's" },
  { src: "/img/logos/hellmanns.png", alt: "Hellmann's" },
  { src: "/img/logos/prabal-gurung.png", alt: "Prabal Gurung" },
  { src: "/img/logos/sexyhair.png", alt: "SexyHair" },
  { src: "/img/logos/farmacy-beauty.png", alt: "Farmacy Beauty" },
  { src: "/img/logos/botify.png", alt: "Botify" },
  { src: "/img/logos/ebin-new-york.png", alt: "EBIN New York" },
  { src: "/img/logos/wellcare.png", alt: "WellCare" },
  { src: "/img/logos/lockton.png", alt: "Lockton" },
  { src: "/img/logos/oak-street-health.png", alt: "Oak Street Health" },
  { src: "/img/logos/flow-traders.png", alt: "Flow Traders" },
  { src: "/img/logos/pulsepoint.png", alt: "PulsePoint" },
  { src: "/img/logos/the-guarantors.png", alt: "The Guarantors" },
  { src: "/img/logos/good-morning-america.png", alt: "Good Morning America" },
  { src: "/img/logos/tamron-hall.png", alt: "Tamron Hall" },
];

/** Four claims, each defensible from what the business actually delivers. */
export const whyUs = [
  {
    title: "An operator, always",
    desc: "Every booking includes a trained attendant for its full duration. The difference between a booth people queue for and one that sits in a corner is almost never the machine — it is whether someone is standing next to it who knows how to start a line.",
  },
  {
    title: "Equipment that holds up in print",
    desc: "Pro Canon DSLRs, studio-powered lighting and dye-sublimation printers that produce a dry 4×6 in seconds. Not a tablet on a stand.",
  },
  {
    title: "Designed, not selected",
    desc: "Print templates, on-screen journeys, overlays and backgrounds are built for your event rather than picked from a dropdown — to brand guidelines where you have them.",
  },
  {
    title: "Paperwork handled early",
    desc: "A $3 million policy and same-day certificates of insurance naming whoever your venue requires. We ask for the building's requirements at booking, not the week of the event.",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "Where in New Jersey do you work?",
    a: "The whole state — Jersey City and Hoboken through Newark, Princeton and the shore, down to Atlantic City. Travel is quoted from your venue's ZIP code before you book and never added afterwards.",
  },
  {
    q: "What is included in a booking?",
    a: "A trained attendant for the full booking, unlimited sessions, unlimited prints where the experience prints, a print template designed for your event, instant sharing to guests by text, email or QR code, an online gallery, and a premium backdrop. Setup and breakdown sit outside your booked hours.",
  },
  {
    q: "How much space do you need?",
    a: "Most static experiences want ten by ten feet, with eight by eight the working minimum. The 360 needs eight by eight genuinely clear plus room for the crowd it draws. The enclosed booth fits a compact footprint against a wall, and the roaming booth needs no floor space at all.",
  },
  {
    q: "How far in advance should we book?",
    a: "For a December corporate party or a summer shore Saturday, as far ahead as you can — both compress badly. Otherwise a few weeks usually works, though a full physical booth wrap needs two to three weeks on its own.",
  },
  {
    q: "Are you insured, and can you provide a COI?",
    a: "Yes to both. We carry a $3 million policy and issue certificates the same day they are requested, naming the venue, building owner and management company where required. Corporate campuses and casino properties also need badging arranged days ahead — send us their requirements early.",
  },
  {
    q: "Can the whole experience be branded?",
    a: "Yes. Booth wrap, start screen, on-screen journey, overlays, print templates and a branded gallery or microsite. Opt-in data capture and a post-event report of sessions, shares and opt-in rate are available on any experience that shares digitally.",
  },
  {
    q: "How soon do guests get their photos?",
    a: "Prints come out in seconds. Digital copies reach the guest's phone by text, email or QR code before they have walked away, and everything from the event lands in an online gallery afterwards.",
  },
  {
    q: "Who is behind New Jersey Photo Activations?",
    a: "A team that has been running photo and interactive experiences for years, for brands including Google Cloud, adidas, ServiceNow, Macy's and Hellmann's. New Jersey Photo Activations is the New Jersey-focused side of that work, with its own team on the ground here.",
  },
];
