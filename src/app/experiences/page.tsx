import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Photo Booth Experiences New Jersey | All 18 Experiences",
  description:
    "Every photo booth and interactive event experience available across New Jersey — branded booths, AI, Glambot, 360, mirror, glam, roaming, studio, green screen and more.",
  path: "/experiences",
});

// Corporate-weighted experiences lead; the comparison table below carries the
// detail the homepage deliberately does not.
const ORDER = { corporate: 0, both: 1, private: 2 } as const;
const sorted = [...experiences].sort(
  (a, b) => ORDER[a.weight] - ORDER[b.weight],
);

export default function ExperiencesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="The inventory"
        h1="Eighteen ways to photograph a room"
        sub="From the classic curtained cabinet to a robotic cinema arm. Every one includes a trained attendant, a design pass on the output, and instant delivery to your guests."
        trail={[{ name: "Home", href: "/" }, { name: "Experiences" }]}
      />

      <section className="cv-auto bg-charcoal px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((experience, i) => (
              <ExperienceCard
                key={experience.slug}
                experience={experience}
                priority={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The comparison table lives here rather than on the homepage — useful,
          but not the first thing a luxury homepage should show. */}
      <section className="cv-auto bg-obsidian px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Quick comparison"
            heading="Which one is right for your room?"
            sub="The one-glance version. When in doubt, tell us the venue and the crowd and we will recommend one."
          />
          <div className="mt-14 overflow-x-auto rounded-sharp border border-ivory/10">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-champagne/20 bg-charcoal">
                  {["Experience", "Guests leave with", "Space needed", "Leans"].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-mute"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {sorted.map((e) => (
                  <tr key={e.slug} className="border-b border-ivory/8 last:border-0">
                    <th scope="row" className="px-6 py-5 font-normal">
                      <a
                        href={`/experiences/${e.slug}`}
                        className="heading-sm text-[15px] text-ivory transition-colors hover:text-champagne"
                      >
                        {e.name}
                      </a>
                    </th>
                    <td className="px-6 py-5 text-[14px] text-mute">{e.output}</td>
                    <td className="px-6 py-5 text-[14px] text-mute">{e.space}</td>
                    <td className="px-6 py-5 text-[14px] text-mute">
                      {e.weight === "corporate"
                        ? "Corporate"
                        : e.weight === "private"
                          ? "Private"
                          : "Both"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection secondaryHref="/locations" secondaryLabel="Where We Work" />

      <JsonLd
        data={collectionPageJsonLd({
          name: "Photo booth experiences across New Jersey",
          description:
            "Every photo booth and interactive event experience available across New Jersey.",
          path: "/experiences",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
        ])}
      />
    </>
  );
}
