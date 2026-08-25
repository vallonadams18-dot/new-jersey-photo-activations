"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site";

const EVENT_TYPES = [
  "Corporate event",
  "Brand activation",
  "Trade show / exhibition",
  "Conference",
  "Wedding",
  "Sweet Sixteen",
  "Bar / Bat Mitzvah",
  "Quinceañera",
  "Milestone birthday",
  "Shower or engagement party",
  "Graduation",
  "Other",
];

const EXPERIENCES = [
  "Not sure yet — recommend one",
  "Branded Booth",
  "AI Photo Booth",
  "Glambot",
  "Mirror X",
  "Magic Mirror",
  "360 Photo Booth",
  "Roaming Booth",
  "Studio Booth / headshots",
  "Glam Booth",
  "Vogue Booth",
  "Green Screen",
  "Mosaic Wall",
  "Flower Wall",
  "Other / more than one",
];

const COUNTIES = [
  "Not sure yet",
  "Bergen",
  "Essex",
  "Hudson",
  "Union",
  "Morris",
  "Middlesex",
  "Monmouth",
  "Ocean",
  "Mercer (Princeton)",
  "Atlantic",
  "Somerset",
  "Passaic",
  "Camden",
  "Burlington",
  "Elsewhere in New Jersey",
  "Outside New Jersey",
];

interface FieldErrors {
  [key: string]: string | undefined;
}

const inputClass =
  "w-full rounded-sharp border border-ivory/15 bg-charcoal px-4 py-3 text-[15px] text-ivory placeholder:text-mute/50 transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/40";
const labelClass =
  "block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mute";
const errorClass = "mt-1.5 text-[13px] text-[#e08a6d]";

/** Attribution captured on first paint so it survives in-site navigation. */
function readAttribution() {
  try {
    const stored = sessionStorage.getItem("njpa-attribution");
    if (stored) return JSON.parse(stored) as Record<string, string>;
  } catch {
    /* storage unavailable */
  }
  return {};
}

export function captureAttribution() {
  try {
    if (sessionStorage.getItem("njpa-attribution")) return;
    const params = new URLSearchParams(window.location.search);
    const attribution: Record<string, string> = {
      landingPage: window.location.pathname,
      referrer: document.referrer || "",
    };
    for (const key of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "gbraid",
      "wbraid",
      "fbclid",
    ]) {
      const value = params.get(key);
      if (value) attribution[key] = value;
    }
    sessionStorage.setItem("njpa-attribution", JSON.stringify(attribution));
  } catch {
    /* storage unavailable */
  }
}

export function QuoteForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    captureAttribution();
  }, []);

  function validate(data: FormData): FieldErrors {
    const errs: FieldErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const eventDate = String(data.get("eventDate") ?? "").trim();
    const zip = String(data.get("venueZip") ?? "").trim();

    if (!name) errs.name = "Please tell us your name.";
    if (!email) errs.email = "We need an email to send your quote to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "That email does not look right.";
    if (phone && !/^[\d\s()+.-]{7,20}$/.test(phone))
      errs.phone = "That phone number does not look right.";
    if (!eventDate) errs.eventDate = "Please pick your event date.";
    if (!zip)
      errs.venueZip = "The venue ZIP lets us include travel in your quote.";
    else if (!/^\d{5}(-\d{4})?$/.test(zip))
      errs.venueZip = "Please enter a 5-digit ZIP code.";
    return errs;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots that fill the hidden field get a silent no-op.
    if (String(data.get("company_website") ?? "") !== "") {
      router.push("/thank-you");
      return;
    }

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstKey = Object.keys(errs)[0];
      (form.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      return;
    }

    data.delete("company_website");
    const lead = {
      ...Object.fromEntries(data.entries()),
      ...readAttribution(),
      source: "newjerseyphotoactivations.com quote form",
      submittedAt: new Date().toISOString(),
      _subject: "New Jersey Photo Activations — quote request",
      _template: "table",
      _captcha: "false",
    };

    // Delivery target, in order of preference:
    // 1. NEXT_PUBLIC_LEAD_ENDPOINT — a Cloudflare Worker that validates
    //    server-side, checks Turnstile, rate-limits and logs.
    // 2. NEXT_PUBLIC_LEAD_WEBHOOK_URL — a CRM inbound webhook.
    // 3. FormSubmit relay to the business inbox (interim default).
    // Public endpoints by design — secrets live in the Worker, never here.
    const endpoint =
      process.env.NEXT_PUBLIC_LEAD_ENDPOINT ||
      process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ||
      `https://formsubmit.co/ajax/${SITE.email}`;

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      // Only a readable 2xx counts as delivered. No opaque "assume success".
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      try {
        (
          window as unknown as { gtag?: (...args: unknown[]) => void }
        ).gtag?.("event", "generate_lead", { method: "quote_form" });
      } catch {
        /* analytics not installed */
      }
      router.push("/thank-you");
    } catch {
      setStatus("error");
      statusRef.current?.focus();
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6 text-left">
      {/* Honeypot — hidden from real users, tempting for bots */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">
          Leave this field empty
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`${inputClass} mt-2.5`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company or organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={`${inputClass} mt-2.5`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`${inputClass} mt-2.5`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${inputClass} mt-2.5`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event date *
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className={`${inputClass} mt-2.5`}
            aria-invalid={!!errors.eventDate}
            aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
          />
          {errors.eventDate && (
            <p id="eventDate-error" className={errorClass}>
              {errors.eventDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="eventType" className={labelClass}>
            Event type
          </label>
          <select id="eventType" name="eventType" className={`${inputClass} mt-2.5`}>
            {EVENT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="county" className={labelClass}>
            Where in New Jersey
          </label>
          <select id="county" name="county" className={`${inputClass} mt-2.5`}>
            {COUNTIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="venueZip" className={labelClass}>
            Venue ZIP code *
          </label>
          <input
            id="venueZip"
            name="venueZip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            className={`${inputClass} mt-2.5`}
            aria-invalid={!!errors.venueZip}
            aria-describedby={errors.venueZip ? "venueZip-error" : undefined}
          />
          {errors.venueZip && (
            <p id="venueZip-error" className={errorClass}>
              {errors.venueZip}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="experience" className={labelClass}>
            Experience you have in mind
          </label>
          <select id="experience" name="experience" className={`${inputClass} mt-2.5`}>
            {EXPERIENCES.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guestCount" className={labelClass}>
            Rough guest count
          </label>
          <input
            id="guestCount"
            name="guestCount"
            type="number"
            min={1}
            className={`${inputClass} mt-2.5`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} mt-2.5`}
          placeholder="Venue name, timings, branding requirements, whether the venue needs a certificate of insurance — whatever helps."
        />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p
            ref={statusRef}
            role="alert"
            tabIndex={-1}
            className="rounded-sharp border border-[#e08a6d]/40 bg-[#e08a6d]/10 px-4 py-3 text-[14px] text-[#e8a68d]"
          >
            Something went wrong and your message was not delivered. Please try
            again, or email us directly at{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium underline">
              {SITE.email}
            </a>
            .
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group/btn inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-sharp gradient-gold px-8 font-sans text-sm font-medium uppercase tracking-[0.14em] text-obsidian shadow-[0_10px_30px_-14px_rgba(200,169,107,0.85)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            Sending
            <Loader2 className="size-[1.05em] animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Get My Free Quote
            <ArrowRight
              className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="text-center text-[13px] text-mute">
        No obligation and no pushy follow-up. A real person reads every enquiry.{" "}
        <Link
          href="/privacy"
          className="underline decoration-champagne/40 underline-offset-4 transition-colors hover:text-champagne"
        >
          Privacy policy
        </Link>
      </p>
    </form>
  );
}
