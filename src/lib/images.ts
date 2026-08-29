import dimensions from "@/data/image-dimensions.json";

/**
 * Photograph shape, read from the real files at build time by
 * scripts/build-image-manifest.mjs.
 *
 * Every image on this site is rendered with `next/image` + `fill` inside a
 * parent of fixed aspect ratio, so `object-cover` decides what survives. A
 * 1067x1600 portrait in a 3/2 box loses well over half the frame, top and
 * bottom — which is to say, the person's head and legs. These helpers let a
 * component pick a box that suits the photograph, and choose a sensible crop
 * when the layout genuinely cannot change shape.
 */
export type Orientation = "portrait" | "landscape" | "square";

// Typed loosely because a JSON import widens tuples to number[].
const SIZES = dimensions as Record<string, number[]>;

/**
 * Anything within 5% of square counts as square: cropping it either way costs
 * about the same, so it does not need special handling.
 */
export function orientationOf(src: string): Orientation {
  const size = SIZES[src];
  // Unknown file: assume the shape the designs were built around rather than
  // rearranging a layout on a guess.
  if (!size || size.length < 2) return "landscape";
  const ratio = size[0] / size[1];
  if (ratio > 1.05) return "landscape";
  if (ratio < 0.95) return "portrait";
  return "square";
}

/**
 * The aspect-ratio class for a container that is free to take the shape of its
 * photograph. Pass the ratio the design wants for each shape.
 */
export function aspectFor(
  src: string,
  boxes: { portrait: string; landscape: string; square: string },
): string {
  return boxes[orientationOf(src)];
}

/**
 * Where to anchor the crop, for the boxes that are NOT free to change shape —
 * a card in a uniform grid, or a wide banner.
 *
 * A tall photograph in a wide box is the only case that needs help. Centring
 * it removes an equal slice from the top and the bottom, which takes the face
 * with it; anchoring to the top keeps the head and upper body and sacrifices
 * the legs, which is nearly always the better half to lose.
 */
export function focusFor(src: string, box: Orientation): string {
  return orientationOf(src) === "portrait" && box === "landscape"
    ? "object-top"
    : "object-center";
}

/**
 * Reorders a set of photographs so a landscape one takes a feature slot that
 * is fixed in landscape. Order is otherwise preserved, and a set with no
 * landscape image is returned untouched — there is nothing better to promote.
 */
export function landscapeFirst<T extends { src: string }>(images: T[]): T[] {
  const i = images.findIndex((img) => orientationOf(img.src) !== "portrait");
  if (i <= 0) return images;
  return [images[i], ...images.slice(0, i), ...images.slice(i + 1)];
}
