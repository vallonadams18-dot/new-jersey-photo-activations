import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FaqAccordion } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { homeFaqs } from "@/data";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Get a Free Quote | Photo Booth Rental New Jersey",
  description:
    "Tell us your date, venue and guest count and get real photo booth pricing back. Takes about a minute, no obligation. Serving all of New Jersey.",
  path: "/get-a-quote",
});

const CHECKLIST = [
  "Trained attendant included, always",
  "Unlimited sessions and prints",
  "Travel quoted from your venue ZIP up front",
  "$3M insured — same-day certificates",
];

// The three questions most likely to be blocking someone mid-form.
const QUOTE_FAQ_QUESTIONS = [
  "How much space do you need?",
  "Are you insured, and can you provide a COI?",
  "How far in advance should we book?",
];
const quoteFaqs = homeFaqs.filter((f) => QUOTE_FAQ_QUESTIONS.includes(f.q));

export default function GetAQuotePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-obsidian">
        <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[86rem] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-champagne">Get a quote</p>
            <h1 className="mt-5 text-[2.3rem] leading-[1.04] text-ivory sm:text-[3rem]">
              Real pricing, for your actual room
            </h1>
            <p className="mt-7 text-[15px] leading-relaxed text-ivory/75 sm:text-base">
              Tell us the date, the venue and roughly how many guests. We come
              back with pricing built for your event — travel included, nothing
              hidden. If a cheaper experience would serve you better, we will
              say so.
            </p>

            <ul className="mt-10 flex flex-col gap-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-champagne"
                    aria-hidden="true"
                  />
                  <span className="text-[14px] text-ivory/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-ivory/10 pt-8">
              <p className="text-[14px] leading-relaxed text-mute">
                Prefer to talk it through?
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-2 inline-block font-display text-2xl text-ivory transition-colors hover:text-champagne"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 block text-[14px] text-mute transition-colors hover:text-champagne"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="rounded-sharp border border-champagne/20 bg-charcoal p-7 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="cv-auto bg-charcoal px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-champagne">While you are here</p>
          <div className="mt-8">
            <FaqAccordion faqs={quoteFaqs} />
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Get a Quote", path: "/get-a-quote" },
        ])}
      />
    </>
  );
}
