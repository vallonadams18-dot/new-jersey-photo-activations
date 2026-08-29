import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogos } from "@/components/BrandLogos";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Hero";
import { Prose } from "@/components/Prose";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "About | New Jersey Photo Activations",
  description:
    "New Jersey Photo Activations delivers luxury photo experiences across New Jersey — corporate activations, trade shows and weddings, with a trained attendant on every booking.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        h1="A New Jersey practice, with a decade behind it"
        sub="New and not new at the same time — a dedicated New Jersey operation, run by a team that has been delivering photo experiences for brands and private clients for years."
        trail={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Prose
            blocks={[
              {
                heading: "Where we come from",
                paragraphs: [
                  "New Jersey Photo Activations is a dedicated New Jersey practice, run by a team that has been delivering photo booths and interactive experiences across the New York metropolitan area for years — for Google Cloud, adidas, ServiceNow, Macy's, Hellmann's and Hilton as readily as for couples and families.",
                  "We set this up as a separate practice rather than a service area on someone else's map because New Jersey deserves better than being treated as the place a New York company will travel to. The venues here have their own rules, the counties behave nothing like each other, and a supplier who has not worked out the difference between an Exchange Place freight lift and a Hoboken walk-up will find out on your event day.",
                ],
              },
              {
                heading: "What we actually believe about this",
                paragraphs: [
                  "Any company can wheel a machine into a room. What decides whether the experience becomes the thing people talk about afterwards is who is standing next to it — how the queue gets started, whether the props table is still in order at nine o'clock, whether a print lands in someone's hand while they are still laughing at it.",
                  "So every booking includes a trained attendant for its full duration, and we have never sold an unattended booth. It costs more and it is the single largest determinant of whether the money was worth spending.",
                  "The second thing we believe is that the brief matters more than the hardware. A corporate holiday party in a Parsippany campus, a bayfront wedding in Manahawkin, and a trade show stand in Edison are three completely different jobs, even when the booth in the corner looks identical. We ask about the room and the crowd before we recommend anything, and we will tell you when a cheaper option would serve you better.",
                ],
              },
              {
                heading: "How we work in New Jersey",
                paragraphs: [
                  "Statewide, from the Hudson waterfront down to Atlantic City and out to the shore. Travel is quoted from your venue's ZIP code before you book and never added afterwards — the longer runs cost more and we say so rather than hiding it in a total.",
                  "We carry a $3 million liability policy and issue certificates of insurance the same day they are requested, naming the venue, building owner and management company wherever that is required. For corporate campuses and casino properties we ask for badging and dock requirements at booking, because those windows close days ahead and cannot be rescued at the last minute.",
                ],
              },
            ]}
          />

          <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sharp">
              <Image
                src="/img/home-crowd.jpg"
                alt="Guests gathered around a photo booth at an evening event"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <BrandLogos label="Experiences delivered for" tone="light" />

      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Plainly stated"
            heading="Two things we will not do"
            sub="Both come up often enough in this industry to be worth putting in writing."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sharp border border-ivory/10 bg-ivory/10 sm:grid-cols-2">
            <div className="bg-charcoal p-9">
              <h3 className="font-display text-2xl text-ivory">
                Claim a New Jersey address we do not have
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">
                We work statewide and we travel to you. We have not invented a
                local office to look closer than we are, and we do not hold a
                Google Business listing in a town we do not operate from.
              </p>
            </div>
            <div className="bg-charcoal p-9">
              <h3 className="font-display text-2xl text-ivory">
                Show a rating we have not earned
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">
                This site displays no star rating and no review count. This
                practice has not earned any yet, and numbers earned somewhere
                else would tell you nothing about the job we would do for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
