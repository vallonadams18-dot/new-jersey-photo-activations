import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/templates/ServicePage";
import { getService } from "@/data";
import { pageMeta } from "@/lib/metadata";

const SLUG = "brand-activations";
const service = getService(SLUG);

export const metadata: Metadata = service
  ? pageMeta({
      title: service.meta.title,
      description: service.meta.description,
      path: `/${SLUG}`,
      image: service.heroImg.src,
      imageAlt: service.heroImg.alt,
    })
  : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
