import { SITE, NAV_EXPERIENCES } from "./site";

type JsonLd = Record<string, unknown>;

/**
 * The business itself.
 *
 * Deliberately `Organization` and not `LocalBusiness`: there is no New Jersey
 * premises, and LocalBusiness without a real PostalAddress is either incomplete
 * markup or an invitation to invent an address. `areaServed` states the truth —
 * the whole state is covered, from somewhere else.
 *
 * Also deliberately absent: `aggregateRating`. This practice has not earned a
 * rating of its own yet, and marking up one earned elsewhere would be a lie
 * about this domain. Self-serving review markup risks a manual action anyway.
 */
export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    // Derived, never a second literal: a hardcoded copy here is exactly how
    // the schema ends up advertising a line the business no longer answers.
    telephone: SITE.phoneE164,
    logo: `${SITE.url}/img/logo.png`,
    image: `${SITE.url}/img/og.jpg`,
    description:
      "Luxury photo booth rental and interactive event experiences across New Jersey — corporate events, brand activations, trade shows, weddings and private celebrations. Branded booths, AI experiences, 360, Glambot, roaming and studio capture with professional attendants and opt-in data capture.",
    areaServed: {
      "@type": "State",
      name: "New Jersey",
      containedInPlace: { "@type": "Country", name: "United States" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photo booth and interactive event experiences",
      itemListElement: NAV_EXPERIENCES.map((e) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: e.label,
          url: `${SITE.url}${e.href}`,
        },
      })),
    },
    sameAs: [SITE.instagram],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** An experience or an event-type service, scoped to the state. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    serviceType: "Photo booth and interactive event experience rental",
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": opts.areaName ? "Place" : "State",
      name: opts.areaName ?? "New Jersey",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path?: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE.url}${item.path}` } : {}),
    })),
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  datePublished: string;
  path: string;
  image: string;
}): JsonLd {
  const image = opts.image.startsWith("http")
    ? opts.image
    : `${SITE.url}${opts.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    image,
    url: `${SITE.url}${opts.path}`,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${opts.path}` },
  };
}

export function collectionPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}${opts.path}#collectionpage`,
    url: `${SITE.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
  };
}
