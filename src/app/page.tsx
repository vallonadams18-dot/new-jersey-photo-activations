import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandLogos } from "@/components/BrandLogos";
import { CtaButton, GhostButton } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PhotoStrip } from "@/components/PhotoGrid";
import { SectionHeading } from "@/components/SectionHeading";
import {
  FEATURED_SLUGS,
  galleryEvents,
  homeFaqs,
  resolveExperiences,
  whyUs,
} from "@/data";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";
import { NAV_LOCATIONS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title:
    "Photo Booth Rental New Jersey | Luxury Event Experiences | New Jersey Photo Activations",
  description:
    "Luxury photo booth rental and interactive event experiences across New Jersey. Corporate activations, trade shows, weddings and celebrations — branded end to end, attendant included.",
  path: "",
});

const featured = resolveExperiences(FEATURED_SLUGS);

// The homepage shows one photograph per event so the strip reads as a range of
// clients rather than a run of frames from a single night.
const showcase = galleryEvents.map((event) => event.photos[0]);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-obsidian">
        <div className="absolute inset-0">
          <Image
            src="/img/champagne-wall-hero.jpg"
            alt="Champagne wall styled for an evening event reception"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/88 to-obsidian/40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/55"
            aria-hidden="true"
          />
        </div>
        {/* First of at most two glows on this page. */}
        <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-[86rem] flex-col justify-center px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <p className="eyebrow text-champagne">Statewide · New Jersey</p>
          {/* No entrance animation: animating the hero from opacity 0 delays
              LCP until hydration finishes. */}
          <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.02] text-ivory sm:text-[4rem] lg:text-[5rem]">
            Luxury Photo Booths &amp; Interactive Event Experiences Across New
            Jersey
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            Corporate activations, trade shows, weddings and private
            celebrations — branded end to end, staffed by people who run the
            experience so your team does not have to.
          </p>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <CtaButton>Get a Free Quote</CtaButton>
            <GhostButton href="/experiences">Explore Experiences</GhostButton>
          </div>
        </div>
      </section>

      <BrandLogos label="Experiences delivered for" />

      {/* ── Featured experiences ─────────────────────────────────────── */}
      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="The inventory"
            heading="Eighteen experiences. These six lead."
            sub="Every one includes a trained attendant, a design pass on the output, and instant delivery to your guests. The full lineup runs from the classic mirror to a robotic cinema arm."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((experience, i) => (
              <ExperienceCard
                key={experience.slug}
                experience={experience}
                priority={i < 3}
              />
            ))}
          </div>
          <div className="mt-14">
            <GhostButton href="/experiences">
              View all 18 experiences
            </GhostButton>
          </div>
        </div>
      </section>

      {/* ── Corporate & brand activations: the longest section ───────── */}
      <section className="cv-auto relative overflow-hidden bg-obsidian px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="relative mx-auto max-w-[86rem]">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Corporate &amp; brand activations"
                heading="An activation that produces content, contacts and numbers"
                sub="The reason a photo experience earns a place in a marketing budget is not the photograph. It is that the photograph gets shared by the attendee, to an audience that trusts them, carrying your branding — and that a permissioned contact list comes out of the same interaction."
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <GhostButton href="/corporate-events">
                  Corporate Events
                </GhostButton>
                <GhostButton href="/brand-activations">
                  Brand Activations
                </GhostButton>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sharp border border-ivory/10 bg-ivory/10 sm:grid-cols-2">
              {[
                {
                  title: "Full booth branding",
                  desc: "Physical wrap, custom start screen, overlays and print templates built to your guidelines.",
                },
                {
                  title: "Opt-in data capture",
                  desc: "Consent taken inside the sharing step, in exchange for something the guest wants.",
                },
                {
                  title: "Branded galleries",
                  desc: "Every asset lands on a page carrying your identity, not a supplier's.",
                },
                {
                  title: "Custom fabrication",
                  desc: "Backdrops, step-and-repeats and built sets designed with your team in advance.",
                },
                {
                  title: "Venue coordination",
                  desc: "Load-in windows, freight lifts, marshalling and exhibitor kits handled as routine.",
                },
                {
                  title: "COI, same day",
                  desc: "A $3M policy and certificates naming the venue, building and management company.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-obsidian p-7">
                  <h3 className="heading-sm text-[15px] text-champagne">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-mute">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/10 pt-10">
            <Link
              href="/trade-shows"
              prefetch={false}
              className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span className="font-display text-2xl text-ivory transition-colors group-hover:text-champagne sm:text-3xl">
                Trade shows &amp; exhibition floors
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-mute">
                Edison, Meadowlands and Atlantic City
                <ArrowUpRight
                  className="size-4 text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Weddings & private: the ivory switch ──────────────────────── */}
      <section className="cv-auto bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Weddings &amp; celebrations"
              heading="The other half of the room"
              sub="Guests stay later, the dance floor stays full, and you go home with a book of photographs nobody had to ask anyone to take. From Bergen County ballrooms to bayfront estates on the shore."
              tone="light"
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GhostButton href="/weddings" tone="light">
                Weddings
              </GhostButton>
              <GhostButton href="/special-events" tone="light">
                Special Events
              </GhostButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sharp sm:mt-12">
              <Image
                src="/img/wedding-booth-1.jpg"
                alt="Wedding photo booth setup with a floral backdrop"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sharp">
              <Image
                src="/img/glam-booth-1.jpg"
                alt="Black and white glam booth portrait of guests"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────────── */}
      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Why us"
            heading="What actually decides whether it works"
          />
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <div key={item.title} className="flex gap-6">
                <span
                  className="pt-1 font-sans text-[11px] tabular-nums tracking-[0.16em] text-champagne"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                  <p className="max-w-md text-[15px] leading-relaxed text-mute">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Jersey coverage ──────────────────────────────────────── */}
      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Statewide coverage"
            heading="Across New Jersey"
            sub="Travel is quoted from your venue's ZIP code before you book and never added afterwards. Each area page covers the venues, the load-in realities and what actually works in those rooms."
          />
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {NAV_LOCATIONS.map((loc) => (
              <li key={loc.href}>
                <Link
                  href={loc.href}
                  prefetch={false}
                  className="group flex h-full items-center gap-3 rounded-sharp border border-ivory/10 bg-charcoal px-5 py-4 transition-colors duration-400 hover:border-champagne/45"
                >
                  <MapPin
                    className="size-4 shrink-0 text-champagne"
                    aria-hidden="true"
                  />
                  <span className="text-[14px] text-ivory transition-colors group-hover:text-champagne">
                    {loc.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Event moments ────────────────────────────────────────────── */}
      <section className="cv-auto bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Selected work"
            heading="Events already delivered"
            sub="Twelve activations from the portfolio — brand, corporate and cultural. These were shot by this team at events outside New Jersey."
          />
        </div>
        <div className="mt-14">
          <PhotoStrip images={showcase} />
        </div>
        <div className="mx-auto mt-12 max-w-[86rem] px-5 sm:px-8 lg:px-10">
          <GhostButton href="/gallery">See the full gallery</GhostButton>
        </div>
      </section>

      <FaqSection
        eyebrow="Before you book"
        heading="The things people ask first"
        faqs={homeFaqs}
      />

      <CtaSection />

      <JsonLd data={faqJsonLd(homeFaqs)} />
    </>
  );
}
