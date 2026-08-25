import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperiencePage } from "@/components/templates/ExperiencePage";
import { experiences, getExperience } from "@/data";
import { pageMeta } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};
  return pageMeta({
    title: experience.meta.title,
    description: experience.meta.description,
    path: `/experiences/${slug}`,
    image: experience.heroImg.src,
    imageAlt: experience.heroImg.alt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();
  return <ExperiencePage experience={experience} />;
}
