import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import "./globals.css";

// Display only — Cormorant is too delicate below about 28px, so nothing
// smaller than a section heading is ever set in it.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

// Body and UI. Three weights, no more: each additional weight is another
// render-blocking font file against the performance budget.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  // No `template` here on purpose. Every page routes through pageMeta() with a
  // title already written to length; appending a brand suffix on top pushed
  // them past the point where a SERP truncates them.
  title:
    "Photo Booth Rental New Jersey | Luxury Event Experiences | New Jersey Photo Activations",
  description:
    "Luxury photo booth rental and interactive event experiences across New Jersey. Corporate activations, trade shows, weddings and celebrations — branded end to end, attendant included.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE.url}/img/og.jpg`,
        width: 1200,
        height: 630,
        alt: "New Jersey Photo Activations — luxury photo booth and interactive event experiences",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  // Emitted only once the token is set — see SITE.gscVerification.
  verification: { google: SITE.gscVerification || undefined },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        {/* A static export replaces every JS chunk on deploy. A phone holding a
            cached page then loads scripts that 404 and sits frozen until a
            manual refresh. Reload once, guarded, so nobody sees the dead state. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var K="njpa-chunk-reload";window.addEventListener("error",function(e){var t=e.target;if(t&&t.tagName==="SCRIPT"&&t.src&&t.src.indexOf("/_next/")>-1){var l=+(sessionStorage.getItem(K)||0);if(Date.now()-l>15000){sessionStorage.setItem(K,String(Date.now()));location.reload();}}},true);})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-obsidian antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-[70] focus:rounded-sharp focus:bg-champagne focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-obsidian"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {/* Loaded after hydration by @next/third-parties, so it never blocks
            the LCP image. Also what lets QuoteForm fire generate_lead. */}
        <GoogleAnalytics gaId={SITE.gaMeasurementId} />
      </body>
    </html>
  );
}
