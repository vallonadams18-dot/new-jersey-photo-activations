import { experiencesA } from "./experiences-a";
import { experiencesB } from "./experiences-b";
import { locationCities } from "./locations-cities";
import { locationCounties } from "./locations-counties";
import { services } from "./services";
import { guides } from "./guides";

export const experiences = [...experiencesA, ...experiencesB];
export const locations = [...locationCities, ...locationCounties];
export { services, guides, locationCities, locationCounties };

export const getExperience = (slug: string) =>
  experiences.find((e) => e.slug === slug);
export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

/** Resolve a list of experience slugs to full records, dropping any typos. */
export const resolveExperiences = (slugs: readonly string[]) =>
  slugs.map(getExperience).filter((e): e is NonNullable<typeof e> => Boolean(e));

export { galleryEvents, eventHighlight } from "./gallery";
export * from "./home";
export type * from "./types";
