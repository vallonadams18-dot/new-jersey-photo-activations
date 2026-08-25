import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/data/types";
import { resolveExperiences } from "@/data";
import { experienceInline } from "@/data/experience-inline";
import { NAV_LOCATIONS } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/jsonld";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MiniCard } from "@/components/ExperienceCard";
import { PhotoGrid } from "@/components/PhotoGrid";
import { CheckList, Prose } from "@/components/Prose";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoPlayer } from "@/components/VideoPlayer";

export function ExperiencePage({ experience }: { experience: Experience }) {
  const related = resolveExperiences(experience.related);
  const path = `/experiences/${experience.slug}`;
  // Falls back to an empty list rather than throwing if a new experience is
  // added before its inline photography is chosen.
  const inline = experienceInline[experience.slug] ?? [];

  return (
    <>
      <Hero
        eyebrow="Experience"
        h1={experience.h1}
        sub={experience.heroSub}
        image={experience.heroImg}
        trail={[
          { name: "Home", href: "/" },
          { name: "Experiences", href: "/experiences" },
          { name: experience.name },
        ]}
        secondaryHref="/experiences"
        secondaryLabel="All Experiences"
      />

      {/* At a glance — the three things a planner checks first */}
      <section className="border-b border-ivory/8 bg-charcoal px-5 py-12 sm:px-8 lg:px-10">
        <dl className="mx-auto grid max-w-[86rem] gap-8 sm:grid-cols-3">
          {[
            { term: "Guests leave with", desc: experience.output },
            { term: "Space needed", desc: experience.space },
            {
              term: "Best suited to",
              desc:
                experience.weight === "corporate"
                  ? "Corporate events, brand activations and trade shows"
                  : experience.weight === "private"
                    ? "Weddings, celebrations and private events"
                    : "Corporate and private events equally",
            },
          ].map((item) => (
            <div key={item.term} className="flex flex-col gap-2">
              <dt className="eyebrow text-champagne">{item.term}</dt>
              <dd className="text-[15px] leading-relaxed text-ivory/80">
                {item.desc}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Story + what's included.

          The prose blocks are interleaved with photography rather than left as
          an unbroken run of text on a dark ground. These images are separate
          from the gallery grid further down, so the page does not repeat
          itself. */}
      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div className="flex min-w-0 flex-col gap-14">
            {experience.prose.map((block, i) => (
              <Fragment key={block.heading}>
                <Prose blocks={[block]} />
                {inline[i] && (
                  <figure className="group relative aspect-[3/2] overflow-hidden rounded-sharp border border-ivory/10">
                    <Image
                      src={inline[i].src}
                      alt={inline[i].alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                    />
                  </figure>
                )}
              </Fragment>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sharp border border-champagne/20 bg-charcoal p-8">
              <p className="eyebrow text-champagne">What is included</p>
              <div className="mt-6">
                <CheckList items={experience.included} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {experience.video && (
        <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionHeading
              eyebrow="See it running"
              heading="This is what it looks like on site"
              sub="Footage from real events. Sound on if you want the full effect."
            />
            <VideoPlayer
              src={experience.video.src}
              poster={experience.video.poster}
              label={experience.video.label}
            />
          </div>
        </section>
      )}

      {/* The two audiences, side by side — the brief asked every experience
          page to speak to corporate and private use explicitly. */}
      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-px overflow-hidden rounded-sharp border border-ivory/10 bg-ivory/10 lg:grid-cols-2">
          <div className="bg-obsidian p-9 sm:p-12">
            <p className="eyebrow text-champagne">Corporate &amp; brands</p>
            <h3 className="mt-5 text-[1.7rem] leading-tight text-ivory sm:text-[2rem]">
              {experience.corporate.heading}
            </h3>
            <div className="mt-5 flex flex-col gap-4 text-[15px] leading-[1.75] text-mute">
              {experience.corporate.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="bg-ivory p-9 sm:p-12">
            <p className="eyebrow text-champagne-deep">Weddings &amp; private</p>
            <h3 className="mt-5 text-[1.7rem] leading-tight text-charcoal sm:text-[2rem]">
              {experience.privateUse.heading}
            </h3>
            <div className="mt-5 flex flex-col gap-4 text-[15px] leading-[1.75] text-charcoal/72">
              {experience.privateUse.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {experience.gallery.length > 0 && (
        <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[86rem]">
            <SectionHeading
              eyebrow="From real events"
              heading={`The ${experience.name} in the room`}
            />
            <PhotoGrid images={experience.gallery} className="mt-14" />
          </div>
        </section>
      )}

      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Before you book"
            heading={`${experience.name} questions`}
          />
          <FaqAccordion faqs={experience.faqs} />
        </div>
      </section>

      {/* Cross-links: related experiences, then a genuine route into the
          location tier so the internal graph runs both ways. */}
      <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading eyebrow="You might also consider" heading="Related experiences" />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <MiniCard
                key={r.slug}
                href={`/experiences/${r.slug}`}
                title={r.name}
                desc={r.tagline}
              />
            ))}
          </div>

          <div className="mt-16 border-t border-ivory/10 pt-12">
            <p className="eyebrow text-champagne">
              The {experience.name} across New Jersey
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {NAV_LOCATIONS.map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  prefetch={false}
                  className="group inline-flex items-center gap-1.5 text-[14px] text-mute transition-colors hover:text-champagne"
                >
                  {loc.label}
                  <ArrowUpRight
                    className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading={`Bring the ${experience.name} to your event`}
        sub="Tell us the date, the venue and roughly how many guests, and we will come back with real pricing — travel included, nothing hidden."
      />

      <JsonLd
        data={serviceJsonLd({
          name: `${experience.name} rental in New Jersey`,
          description: experience.meta.description,
          path,
        })}
      />
      <JsonLd data={faqJsonLd(experience.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
          { name: experience.name, path },
        ])}
      />
    </>
  );
}
