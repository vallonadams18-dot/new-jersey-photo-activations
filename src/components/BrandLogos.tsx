import Image from "next/image";
import { brandLogos } from "@/data/home";

/**
 * Real client logos, laid out as a static grid.
 *
 * Deliberately not a marquee: on a luxury site, continuously moving logos read
 * as anxiety. Standing still reads as confidence.
 */
export function BrandLogos({
  label = "Trusted by",
  tone = "dark",
  limit,
}: {
  label?: string;
  tone?: "dark" | "light";
  limit?: number;
}) {
  const dark = tone === "dark";
  const logos = limit ? brandLogos.slice(0, limit) : brandLogos;
  return (
    <section
      className={`cv-auto ${dark ? "bg-obsidian" : "bg-ivory"} px-5 py-16 sm:px-8 sm:py-20 lg:px-10`}
    >
      <div className="mx-auto max-w-[86rem]">
        <p
          className={`eyebrow text-center ${dark ? "text-champagne" : "text-champagne-deep"}`}
        >
          {label}
        </p>
        <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={48}
                loading="lazy"
                className={`h-8 w-auto max-w-[9rem] object-contain sm:h-9 ${
                  // Logos come in mixed colourways; normalising them keeps the
                  // row reading as one set rather than a ransom note.
                  dark
                    ? "opacity-55 brightness-0 invert transition-opacity duration-500 hover:opacity-90"
                    : "opacity-45 grayscale transition-opacity duration-500 hover:opacity-80"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
