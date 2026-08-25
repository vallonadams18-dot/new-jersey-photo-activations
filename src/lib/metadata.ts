import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * Builds complete page metadata: canonical, Open Graph (with a 1200x630
 * image) and Twitter card. Every commercially important page routes through
 * this so no page can silently lose its canonical or social image by
 * overriding `openGraph` piecemeal.
 */
export function pageMeta({
  title,
  description,
  path,
  image = "/img/og.jpg",
  imageAlt = "New Jersey Photo Activations — luxury photo booth and interactive event experiences",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const absImage = image.startsWith("http") ? image : `${SITE.url}${image}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [{ url: absImage, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absImage],
    },
  };
}
