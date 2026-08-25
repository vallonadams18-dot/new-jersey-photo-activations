import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/data/types";

/**
 * Large editorial card. Six of these beat eighteen small ones — the brief was
 * explicit that experiences should feel like premium products rather than a
 * product grid, so the image gets real height and the copy stays short.
 */
export function ExperienceCard({
  experience,
  priority = false,
}: {
  experience: Experience;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/experiences/${experience.slug}`}
      prefetch={false}
      className="group flex flex-col overflow-hidden rounded-sharp border border-ivory/8 bg-charcoal transition-colors duration-500 hover:border-champagne/45"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={experience.heroImg.src}
          alt={experience.heroImg.alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-display text-2xl text-ivory transition-colors duration-300 group-hover:text-champagne">
          {experience.name}
        </h3>
        <p className="flex-1 text-[14px] leading-relaxed text-mute">
          {experience.tagline}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-champagne">
          <span className="underline-gold">Explore</span>
          <ArrowUpRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

/** Compact link card used for related experiences and location cross-links. */
export function MiniCard({
  href,
  title,
  desc,
  tone = "dark",
}: {
  href: string;
  title: string;
  desc: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <Link
      href={href}
      prefetch={false}
      className={`group flex flex-col gap-2 rounded-sharp border p-6 transition-colors duration-400 ${
        dark
          ? "border-ivory/10 bg-charcoal hover:border-champagne/45"
          : "border-charcoal/10 bg-white hover:border-champagne-deep/45"
      }`}
    >
      <h3
        className={`heading-sm text-[17px] ${dark ? "text-ivory group-hover:text-champagne" : "text-charcoal group-hover:text-champagne-deep"} transition-colors duration-300`}
      >
        {title}
      </h3>
      <p className={`text-[13px] leading-relaxed ${dark ? "text-mute" : "text-charcoal/65"}`}>
        {desc}
      </p>
    </Link>
  );
}
