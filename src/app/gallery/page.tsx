import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Hero";
import { PhotoStrip } from "@/components/PhotoGrid";
import { galleryEvents } from "@/data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Gallery | Brand Activations & Corporate Event Photography",
  description:
    "Selected work from the portfolio — brand activations, corporate events and cultural programming for Google Cloud, adidas, ServiceNow, Hellmann's, Macy's and more.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        h1="Twelve events, in full"
        sub="Brand activations, corporate programmes and cultural events delivered by this team. Every image below is our own work."
        trail={[{ name: "Home", href: "/" }, { name: "Gallery" }]}
      />

      {/* Stated plainly rather than buried. The photographs are genuinely ours;
          they were not shot in New Jersey, and the site does not imply they were. */}
      <section className="border-y border-champagne/20 bg-charcoal px-5 py-8 sm:px-8 lg:px-10">
        <p className="mx-auto max-w-[86rem] text-[14px] leading-relaxed text-mute">
          <span className="text-champagne">A note on this gallery — </span>
          New Jersey Photo Activations is a new practice, and the work below was
          delivered by this team at events outside New Jersey. It is our own
          work, shown to evidence what we do rather than where we have done it.
        </p>
      </section>

      <div className="cv-auto bg-obsidian py-20 sm:py-24">
        <div className="flex flex-col gap-20 sm:gap-24">
          {galleryEvents.map((event) => (
            <section key={event.id}>
              <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
                <h2 className="font-display text-[1.9rem] leading-tight text-ivory sm:text-[2.4rem]">
                  {event.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute">
                  {event.sub}
                </p>
              </div>
              <div className="mt-9">
                <PhotoStrip images={event.photos} />
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaSection
        heading="Your event, next"
        sub="Tell us what you are planning and roughly when. We come back with real pricing and an honest recommendation about which experience fits the room."
      />

      <JsonLd
        data={collectionPageJsonLd({
          name: "Gallery — brand activations and corporate events",
          description:
            "Selected photo activation and event work from the portfolio.",
          path: "/gallery",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
    </>
  );
}
