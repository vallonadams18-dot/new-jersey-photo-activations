import { Plus } from "lucide-react";
import type { Faq } from "@/data/types";
import { SectionHeading } from "./SectionHeading";

export function FaqAccordion({
  faqs,
  tone = "dark",
}: {
  faqs: Faq[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col">
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className={`group border-b ${dark ? "border-ivory/10" : "border-charcoal/12"}`}
        >
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left ${dark ? "text-ivory" : "text-charcoal"}`}
          >
            <span className="heading-sm text-[17px] sm:text-lg">{faq.q}</span>
            <Plus
              className={`mt-0.5 size-5 shrink-0 transition-transform duration-300 group-open:rotate-45 ${dark ? "text-champagne" : "text-champagne-deep"}`}
              aria-hidden="true"
            />
          </summary>
          <p
            className={`max-w-3xl pb-7 pr-10 text-[15px] leading-relaxed ${dark ? "text-mute" : "text-charcoal/70"}`}
          >
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({
  heading = "Questions, answered",
  eyebrow = "Before you book",
  faqs,
  tone = "dark",
}: {
  heading?: string;
  eyebrow?: string;
  faqs: Faq[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`cv-auto ${dark ? "bg-charcoal" : "bg-ivory"} px-5 py-24 sm:px-8 sm:py-28 lg:px-10`}
    >
      <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow={eyebrow} heading={heading} tone={tone} />
        <FaqAccordion faqs={faqs} tone={tone} />
      </div>
    </section>
  );
}
