import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Answer engines are a real referral channel for this category, so they are
// allowed explicitly rather than left to the wildcard.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/thank-you" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    host: SITE.url,
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
