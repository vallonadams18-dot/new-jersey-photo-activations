import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/templates/GuidePage";
import { getGuide, guides } from "@/data";
import { pageMeta } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.meta.title,
    description: guide.meta.description,
    path: `/guides/${slug}`,
    image: guide.heroImg.src,
    imageAlt: guide.heroImg.alt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
