import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Location } from "@/data/types";
import { getLocation, resolveExperiences } from "@/data";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { CtaSection } from "@/components/CtaSection";
import { ExperienceCard, MiniCard } from "@/components/ExperienceCard";
import { FaqAccordion } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Prose } from "@/components/Prose";
import { SectionHeading } from "@/components/SectionHeading";

export function LocationPage({ location }: { location: Location }) {
  const experiences = resolveExperiences(location.experiences);
  const nearby = location.nearby
    .map(getLocation)
    .filter((l): l is Location => Boolean(l));
  const path = `/locations/${location.slug}`;

  return (
    <>
      <Hero
        eyebrow={location.kind === "county" ? "County coverage" : "Service area"}
        h1={location.h1}
        sub={location.heroSub}
        image={location.heroImg}
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: location.name },
        ]}
        secondaryHref="/locations"
        secondaryLabel="All Locations"
      />

      {/* The argument for this specific place */}
      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Prose blocks={[location.intro]} />
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sharp border border-champagne/20 bg-charcoal p-8">
              <p className="eyebrow text-champagne">
                {location.kind === "county" ? "Towns covered" : "Neighbourhoods covered"}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {location.covers.map((place) => (
                  <li
                    key={place}
                    className="rounded-sharp border border-ivory/12 px-3 py-1.5 text-[13px] text-ivory/75"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Real named venues. Public landmarks of the local scene — no
          partnership, listing or relationship is claimed anywhere here. */}
      <section className="cv-auto bg-ivory px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Local venues"
            heading={`Venues we work in around ${location.name}`}
            sub="A sense of the rooms and what each one asks for. We are not an approved or preferred vendor at any of them — this is simply where the work happens."
            tone="light"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sharp border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
            {location.venues.map((venue) => (
              <div key={venue.name} className="flex flex-col gap-2 bg-ivory p-7">
                <h3 className="heading-sm text-lg text-charcoal">{venue.name}</h3>
                <p className="eyebrow text-champagne-deep">{venue.where}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-charcoal/70">
                  {venue.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics — the thing that makes a location page real rather than a
          city name find-and-replace. */}
      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Planning"
            heading={`Working in ${location.name}`}
          />
          <Prose blocks={[location.logistics]} />
        </div>
      </section>

      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Recommended here"
            heading={`Experiences that suit ${location.name}`}
            sub="Ordered by how often they are the right answer in these rooms, rather than alphabetically."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.slice(0, 6).map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Before you book"
            heading={`${location.name} questions`}
          />
          <FaqAccordion faqs={location.faqs} />
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[86rem]">
            <SectionHeading eyebrow="Nearby" heading="Also serving" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nearby.map((n) => (
                <MiniCard
                  key={n.slug}
                  href={`/locations/${n.slug}`}
                  title={n.name}
                  desc={
                    n.kind === "county"
                      ? `Coverage across ${n.covers.length} towns.`
                      : `Venues, neighbourhoods and load-in detail for ${n.name}.`
                  }
                />
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/locations"
                prefetch={false}
                className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-champagne"
              >
                <MapPin className="size-4" aria-hidden="true" />
                <span className="underline-gold">All New Jersey locations</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaSection
        heading={`Planning something in ${location.name}?`}
        sub="Send us the date, the venue and roughly how many guests. We come back with real pricing for the experience that actually fits the room — travel from your venue ZIP included."
      />

      <JsonLd
        data={serviceJsonLd({
          name: `Photo booth and event experience rental in ${location.name}`,
          description: location.meta.description,
          path,
          areaName: `${location.name}, New Jersey`,
        })}
      />
      <JsonLd data={faqJsonLd(location.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.name, path },
        ])}
      />
    </>
  );
}
