import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact | New Jersey Photo Activations",
  description:
    "Get in touch about a photo experience anywhere in New Jersey — corporate activations, trade shows, weddings and celebrations. A real person reads every enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        h1="Tell us what you are planning"
        sub="A real person reads every enquiry, and you will hear back with a genuine recommendation rather than a template."
        trail={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="cv-auto bg-obsidian px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 size-4 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <p className="eyebrow text-mute">Phone</p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-1.5 block font-display text-2xl text-ivory transition-colors hover:text-champagne"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 size-4 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <p className="eyebrow text-mute">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1.5 block text-[15px] text-ivory transition-colors hover:text-champagne"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-4 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <p className="eyebrow text-mute">Service area</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ivory/80">
                    All of New Jersey. We travel to your venue — there is no
                    showroom to visit, and travel is quoted from your venue ZIP
                    before you book.
                  </p>
                  <Link
                    href="/locations"
                    prefetch={false}
                    className="mt-3 inline-block text-[13px] font-medium uppercase tracking-[0.14em] text-champagne"
                  >
                    <span className="underline-gold">See coverage</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-sharp border border-ivory/10 bg-charcoal p-7">
              <p className="eyebrow text-champagne">Working to a deadline?</p>
              <p className="mt-4 text-[14px] leading-relaxed text-mute">
                If your venue needs a certificate of insurance, or your site
                requires security badging or a dock slot, say so in the message.
                Certificates we issue the same day; badging and dock windows
                close days ahead and are the one thing that cannot be rushed.
              </p>
            </div>
          </div>

          <div className="rounded-sharp border border-champagne/20 bg-charcoal p-7 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
