import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { locationCities, locationCounties } from "@/data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";
import type { Location } from "@/data/types";

export const metadata: Metadata = pageMeta({
  title: "Photo Booth Rental Across New Jersey | Service Areas",
  description:
    "Where we work across New Jersey — Jersey City, Hoboken, Newark, Princeton, Atlantic City and every county from Bergen to Ocean. Venues, load-in detail and what suits each market.",
  path: "/locations",
});

function LocationRow({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      prefetch={false}
      className="group flex flex-col gap-3 border-b border-ivory/10 py-8 transition-colors last:border-0 sm:flex-row sm:items-baseline sm:gap-8"
    >
      <h3 className="font-display text-2xl text-ivory transition-colors group-hover:text-champagne sm:w-64 sm:shrink-0 sm:text-[1.75rem]">
        {location.name}
      </h3>
      <p className="flex-1 text-[14px] leading-relaxed text-mute">
        {location.covers.slice(0, 7).join(" · ")}
      </p>
      <ArrowUpRight
        className="size-4 shrink-0 text-champagne opacity-0 transition-all duration-300 group-hover:opacity-100 sm:self-center"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function LocationsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Service areas"
        h1="Across New Jersey"
        sub="Travel is quoted from your venue's ZIP code before you book and never added afterwards. Each page below covers the venues, the load-in realities and what actually works in those rooms."
        trail={[{ name: "Home", href: "/" }, { name: "Locations" }]}
      />

      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Cities"
            heading="The markets we know best"
            sub="Venue-level detail, real neighbourhoods, and the logistics that actually decide a load-in."
          />
          <div className="mt-12">
            {locationCities.map((location) => (
              <LocationRow key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Counties are hubs with a different job — venue types and towns,
          linking down — which is what stops them competing with the cities. */}
      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Counties"
            heading="Statewide coverage, county by county"
            sub="These pages map the venue types and towns inside each county rather than repeating a city page at wider scale."
          />
          <div className="mt-12">
            {locationCounties.map((location) => (
              <LocationRow key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Not sure if we cover your venue?"
        sub="We work statewide. Send the venue name and date and we will confirm, with travel included in the quote from the start."
        secondaryHref="/experiences"
        secondaryLabel="Explore Experiences"
      />

      <JsonLd
        data={collectionPageJsonLd({
          name: "New Jersey service areas",
          description:
            "Photo booth and event experience coverage across New Jersey, city by city and county by county.",
          path: "/locations",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
    </>
  );
}
