import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { GhostButton } from "@/components/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you | New Jersey Photo Activations",
  description: "Your enquiry has been received.",
  // Kept out of the index: a thank-you page ranking is only ever an accident.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <CheckCircle2 className="size-10 text-champagne" aria-hidden="true" />
        <h1 className="mt-8 text-[2.4rem] leading-[1.05] text-ivory sm:text-[3.2rem]">
          Thank you — that reached us
        </h1>
        <p className="mt-7 text-[15px] leading-relaxed text-mute sm:text-base">
          A real person is reading it, and you will hear back with pricing built
          for your event rather than a template. If it is urgent, call us on{" "}
          <a
            href={SITE.phoneHref}
            className="text-ivory underline decoration-champagne/40 underline-offset-4 transition-colors hover:text-champagne"
          >
            {SITE.phone}
          </a>
          .
        </p>
        <div className="mt-11 flex flex-col gap-4 sm:flex-row">
          <GhostButton href="/experiences">Explore Experiences</GhostButton>
          <GhostButton href="/gallery">See the Gallery</GhostButton>
        </div>
      </div>
    </section>
  );
}
