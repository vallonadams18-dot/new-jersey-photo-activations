import Image from "next/image";
import type { Img } from "@/data/types";
import { focusFor, landscapeFirst } from "@/lib/images";

/**
 * Editorial image grid. Deliberately few, large images rather than a dense
 * contact sheet — photography is the most expensive thing on the page and it
 * is never tinted, filtered or overlaid with gold.
 */
export function PhotoGrid({
  images,
  className = "",
}: {
  images: Img[];
  className?: string;
}) {
  if (!images.length) return null;
  // The feature slot below is locked to landscape by its row/column span, so
  // give it a landscape photograph when the set contains one. Sets that are
  // entirely portrait — the studio booth, for instance — come back unchanged
  // and rely on the top-anchored crop instead.
  const ordered = landscapeFirst(images);
  return (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {ordered.map((img, i) => (
        <div
          key={img.src}
          className={`group relative overflow-hidden rounded-sharp bg-charcoal ${
            // The first image runs wide on larger screens so the grid reads as
            // a composition rather than a uniform sheet of thumbnails.
            i === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-[4/3]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            loading="lazy"
            sizes={
              i === 0
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            }
            className={`object-cover ${focusFor(
              img.src,
              i === 0 ? "landscape" : "portrait",
            )} transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
          />
        </div>
      ))}
    </div>
  );
}

/** A horizontally scrolling strip, for per-event galleries. */
export function PhotoStrip({ images }: { images: Img[] }) {
  if (!images.length) return null;
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
      <div className="flex gap-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[4/5] w-[68vw] shrink-0 overflow-hidden rounded-sharp bg-charcoal sm:w-[19rem]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 68vw, 19rem"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
