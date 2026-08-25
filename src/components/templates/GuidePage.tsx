import Image from "next/image";
import type { Guide } from "@/data/types";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MiniCard } from "@/components/ExperienceCard";
import { Prose } from "@/components/Prose";
import { SectionHeading } from "@/components/SectionHeading";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export function GuidePage({ guide }: { guide: Guide }) {
  const path = `/guides/${guide.slug}`;

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-obsidian">
          <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[86rem] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
            <Breadcrumbs
              trail={[
                { name: "Home", href: "/" },
                { name: "Guides", href: "/guides" },
                { name: guide.h1 },
              ]}
            />
            <div className="mt-12 max-w-3xl sm:mt-14">
              <p className="eyebrow text-champagne">Guide</p>
              <h1 className="mt-5 text-[2.2rem] leading-[1.05] text-ivory sm:text-[3.2rem] lg:text-[3.7rem]">
                {guide.h1}
              </h1>
              <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ivory/75 sm:text-lg">
                {guide.excerpt}
              </p>
              <p className="mt-8 text-[12px] uppercase tracking-[0.16em] text-mute">
                <time dateTime={guide.date}>{formatDate(guide.date)}</time>
              </p>
            </div>
          </div>
        </header>

        <div className="bg-obsidian px-5 sm:px-8 lg:px-10">
          <div className="relative mx-auto aspect-[21/9] max-w-[86rem] overflow-hidden rounded-sharp">
            <Image
              src={guide.heroImg.src}
              alt={guide.heroImg.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 86rem"
              className="object-cover"
            />
          </div>
        </div>

        <div className="cv-auto bg-obsidian px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-[46rem]">
            <Prose blocks={guide.body} />
          </div>
        </div>

        {guide.faqs && guide.faqs.length > 0 && (
          <section className="cv-auto bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
            <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <SectionHeading eyebrow="Quick answers" heading="Related questions" />
              <FaqAccordion faqs={guide.faqs} />
            </div>
          </section>
        )}
      </article>

      {guide.related && guide.related.length > 0 && (
        <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[86rem]">
            <SectionHeading eyebrow="Keep reading" heading="Related" />
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {guide.related.map((card) => (
                <MiniCard
                  key={card.href}
                  href={card.href}
                  title={card.title}
                  desc={card.desc}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />

      <JsonLd
        data={articleJsonLd({
          headline: guide.h1,
          description: guide.meta.description,
          datePublished: guide.date,
          path,
          image: guide.heroImg.src,
        })}
      />
      {guide.faqs && guide.faqs.length > 0 && <JsonLd data={faqJsonLd(guide.faqs)} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.h1, path },
        ])}
      />
    </>
  );
}
