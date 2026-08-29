import Image from "next/image";
import { focusFor } from "@/lib/images";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CtaButton, GhostButton } from "./Button";

/**
 * Interior page hero.
 *
 * The image is `priority` and is the LCP element on every page that uses this —
 * no video, no entrance animation on the headline. Animating a hero from
 * opacity 0 delays LCP until hydration, which is exactly the trade the
 * performance budget refuses.
 */
export function Hero({
  eyebrow,
  h1,
  sub,
  image,
  trail,
  secondaryHref = "/experiences",
  secondaryLabel = "Explore Experiences",
}: {
  eyebrow?: string;
  h1: string;
  sub: string;
  image: { src: string; alt: string };
  trail: Crumb[];
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        {/* A hero is always wider than it is tall, so a portrait photograph
            anchors to the top rather than the middle — the subject's face
            survives the crop instead of being cut out of the band entirely. */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${focusFor(image.src, "landscape")}`}
        />
        {/* Two stacked scrims: a vertical one to seat the type, and the dark
            luxury gradient to keep the whole frame in the palette. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/45"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[86rem] px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-10 lg:pb-32 lg:pt-16">
        <Breadcrumbs trail={trail} />
        <div className="mt-12 max-w-3xl sm:mt-16">
          {eyebrow && <p className="eyebrow text-champagne">{eyebrow}</p>}
          <h1 className="mt-5 text-[2.4rem] leading-[1.02] text-ivory sm:text-[3.6rem] lg:text-[4.4rem]">
            {h1}
          </h1>
          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ivory/75 sm:text-lg">
            {sub}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaButton>Get a Free Quote</CtaButton>
            <GhostButton href={secondaryHref}>{secondaryLabel}</GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Simple page header for pages with no hero photograph. */
export function PageHeader({
  eyebrow,
  h1,
  sub,
  trail,
}: {
  eyebrow?: string;
  h1: string;
  sub?: string;
  trail: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />
      <div className="relative mx-auto max-w-[86rem] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
        <Breadcrumbs trail={trail} />
        <div className="mt-12 max-w-3xl sm:mt-14">
          {eyebrow && <p className="eyebrow text-champagne">{eyebrow}</p>}
          <h1 className="mt-5 text-[2.4rem] leading-[1.02] text-ivory sm:text-[3.4rem] lg:text-[4rem]">
            {h1}
          </h1>
          {sub && (
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ivory/75 sm:text-lg">
              {sub}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
