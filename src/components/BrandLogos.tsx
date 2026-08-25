import Image from "next/image";
import { brandLogos } from "@/data/home";

/**
 * Client logos as a single continuously moving line.
 *
 * Two sizing rules matter here, and getting them wrong is what makes a logo
 * row look broken:
 *
 * 1. These logos range from 0.7:1 (Figma) to 19.9:1 (Flow Traders). Capping
 *    width tightly crushes the wide wordmarks to a few pixels tall — they read
 *    as blank gaps. So height is the primary constraint and the width cap is
 *    deliberately generous; in a marquee, horizontal space is free.
 * 2. Every logo is a transparent PNG in its own brand colours, so they are
 *    flattened to a single ink (white on dark, grey on light). A row of mixed
 *    colourways reads as a ransom note.
 */
export function BrandLogos({
  label = "Trusted by",
  tone = "dark",
}: {
  label?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";

  return (
    <section
      className={`cv-auto ${dark ? "bg-obsidian" : "bg-ivory"} py-16 sm:py-20`}
    >
      <p
        className={`eyebrow px-5 text-center sm:px-8 ${dark ? "text-champagne" : "text-champagne-deep"}`}
      >
        {label}
      </p>

      {/* The mask fades both ends so logos enter and leave rather than being
          sliced off at a hard edge. */}
      <div
        className="marquee-mask relative mt-10 overflow-hidden"
        role="group"
        aria-label={`${label}: ${brandLogos.map((l) => l.alt).join(", ")}`}
      >
        <ul className="marquee-track flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {/* Two identical copies back to back: travelling exactly one copy's
              width lands on a frame identical to the start, so the loop has no
              visible seam. The second copy is hidden from assistive tech. */}
          {[0, 1].map((copy) =>
            brandLogos.map((logo) => (
              <li
                key={`${copy}-${logo.src}`}
                className="flex shrink-0 items-center justify-center"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {/* Eager, not lazy. Lazy loading keys off scroll position,
                    and these are translated into view inside an
                    overflow-hidden track that never scrolls — so lazy images
                    can sit unloaded forever and collapse to zero width, which
                    shows up as gaps in the line. They are a few KB each. */}
                <Image
                  src={logo.src}
                  alt={copy === 0 ? logo.alt : ""}
                  width={200}
                  height={40}
                  loading="eager"
                  /* Fixed height rather than max-height so the row keeps its
                     rhythm even for the split second before an image paints. */
                  className={`h-8 w-auto max-w-[15rem] object-contain ${
                    dark
                      ? "opacity-60 brightness-0 invert"
                      : "opacity-50 grayscale"
                  }`}
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
