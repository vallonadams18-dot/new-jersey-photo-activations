import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/templates/LocationPage";
import { getLocation, locations } from "@/data";
import { pageMeta } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return pageMeta({
    title: location.meta.title,
    description: location.meta.description,
    path: `/locations/${slug}`,
    image: location.heroImg.src,
    imageAlt: location.heroImg.alt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  return <LocationPage location={location} />;
}
