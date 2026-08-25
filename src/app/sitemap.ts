import type { MetadataRoute } from "next";
import { experiences, guides, locations, services } from "@/data";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Generated from the same data the pages are, so a new page physically cannot
 * be missing from the sitemap. /thank-you is excluded on purpose.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entry = (
    path: string,
    changeFrequency: "weekly" | "monthly" | "yearly",
    priority: number,
  ) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("", "weekly", 1),
    entry("/get-a-quote", "monthly", 0.9),
    entry("/experiences", "monthly", 0.9),
    entry("/locations", "monthly", 0.8),
    entry("/gallery", "monthly", 0.7),
    entry("/guides", "monthly", 0.6),
    entry("/about", "yearly", 0.6),
    entry("/contact", "yearly", 0.6),
    entry("/privacy", "yearly", 0.2),
    entry("/terms", "yearly", 0.2),
    ...services.map((s) => entry(`/${s.slug}`, "monthly" as const, 0.9)),
    ...experiences.map((e) =>
      entry(`/experiences/${e.slug}`, "monthly" as const, 0.8),
    ),
    ...locations.map((l) =>
      entry(`/locations/${l.slug}`, "monthly" as const, 0.8),
    ),
    ...guides.map((g) => entry(`/guides/${g.slug}`, "monthly" as const, 0.6)),
  ];
}
