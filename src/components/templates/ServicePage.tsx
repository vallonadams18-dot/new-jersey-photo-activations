import type { ServicePage as ServicePageData } from "@/data/types";
import { resolveExperiences } from "@/data";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { BrandLogos } from "@/components/BrandLogos";
import { CtaSection } from "@/components/CtaSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FaqAccordion } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Prose } from "@/components/Prose";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicePage({ service }: { service: ServicePageData }) {
  const experiences = resolveExperiences(service.experiences);
  const path = `/${service.slug}`;
  // Private-event pages run warm; corporate lines stay dark. Same components,
  // different temperature — that contrast is the point.
  const ivory = service.tone === "ivory";

  return (
    <>
      <Hero
        eyebrow={ivory ? "Private events" : "Corporate"}
        h1={service.h1}
        sub={service.heroSub}
        image={service.heroImg}
        trail={[{ name: "Home", href: "/" }, { name: service.name }]}
      />

      <section
        className={`border-b px-5 py-12 sm:px-8 lg:px-10 ${ivory ? "border-charcoal/10 bg-ivory" : "border-ivory/8 bg-charcoal"}`}
      >
        <dl className="mx-auto grid max-w-[86rem] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.checklist.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <dt
                className={`eyebrow ${ivory ? "text-champagne-deep" : "text-champagne"}`}
              >
                {item.title}
              </dt>
              <dd
                className={`text-[14px] leading-relaxed ${ivory ? "text-charcoal/70" : "text-ivory/78"}`}
              >
                {item.desc}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className={`cv-auto px-5 py-24 sm:px-8 sm:py-28 lg:px-10 ${ivory ? "bg-white" : "bg-obsidian"}`}
      >
        <div className="mx-auto max-w-[86rem]">
          <Prose blocks={service.prose} tone={ivory ? "light" : "dark"} />
        </div>
      </section>

      {!ivory && <BrandLogos label="Brands we have run experiences for" />}

      <section
        className={`cv-auto px-5 py-24 sm:px-8 sm:py-28 lg:px-10 ${ivory ? "bg-ivory" : "bg-charcoal"}`}
      >
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Recommended"
            heading={`Experiences built for ${service.name.toLowerCase()}`}
            tone={ivory ? "light" : "dark"}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {service.gallery.length > 0 && (
        <section
          className={`cv-auto px-5 py-24 sm:px-8 sm:py-28 lg:px-10 ${ivory ? "bg-white" : "bg-obsidian"}`}
        >
          <div className="mx-auto max-w-[86rem]">
            <SectionHeading
              eyebrow="From real events"
              heading="How it looks in the room"
              tone={ivory ? "light" : "dark"}
            />
            <PhotoGrid images={service.gallery} className="mt-14" />
          </div>
        </section>
      )}

      <section
        className={`cv-auto px-5 py-24 sm:px-8 sm:py-28 lg:px-10 ${ivory ? "bg-ivory" : "bg-charcoal"}`}
      >
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Before you book"
            heading="Questions we are asked most"
            tone={ivory ? "light" : "dark"}
          />
          <FaqAccordion faqs={service.faqs} tone={ivory ? "light" : "dark"} />
        </div>
      </section>

      <CtaSection />

      <JsonLd
        data={serviceJsonLd({
          name: `${service.name} photo experiences in New Jersey`,
          description: service.meta.description,
          path,
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: service.name, path },
        ])}
      />
    </>
  );
}
