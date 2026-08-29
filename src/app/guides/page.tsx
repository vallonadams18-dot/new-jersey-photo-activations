import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Hero";
import { guides } from "@/data";
import { focusFor } from "@/lib/images";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Event Planning Guides | New Jersey Photo Activations",
  description:
    "Practical guides for planning a photo experience in New Jersey — venue insurance requirements, pricing, space, trade show floors, wedding timing and activation measurement.",
  path: "/guides",
});

const sorted = [...guides].sort((a, b) => b.date.localeCompare(a.date));

export default function GuidesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Guides"
        h1="Straight answers, before you book"
        sub="Six things New Jersey planners ask us most, written properly rather than padded out. No gated downloads."
        trail={[{ name: "Home", href: "/" }, { name: "Guides" }]}
      />

      <section className="cv-auto bg-charcoal px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((guide, i) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              prefetch={false}
              className="group flex flex-col overflow-hidden rounded-sharp border border-ivory/8 bg-obsidian transition-colors duration-500 hover:border-champagne/45"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={guide.heroImg.src}
                  alt={guide.heroImg.alt}
                  fill
                  priority={i < 3}
                  loading={i < 3 ? undefined : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${focusFor(guide.heroImg.src, "landscape")} transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h2 className="font-display text-2xl leading-tight text-ivory transition-colors group-hover:text-champagne">
                  {guide.h1}
                </h2>
                <p className="flex-1 text-[14px] leading-relaxed text-mute">
                  {guide.excerpt}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-champagne">
                  <span className="underline-gold">Read</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />

      <JsonLd
        data={collectionPageJsonLd({
          name: "Event planning guides",
          description:
            "Practical guides for planning a photo experience in New Jersey.",
          path: "/guides",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
    </>
  );
}
