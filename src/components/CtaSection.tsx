import { CtaButton, GhostButton } from "./Button";

export function CtaSection({
  heading = "Let's create something memorable",
  sub = "Tell us your date, your venue and roughly how many guests. We come back with real pricing for the experience that actually fits the room — travel included, nothing hidden.",
  secondaryHref = "/experiences",
  secondaryLabel = "Explore Experiences",
}: {
  heading?: string;
  sub?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="cv-auto relative overflow-hidden bg-obsidian">
      {/* The second and final glow on any page. Depth, not a spotlight. */}
      <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />
      <div className="relative mx-auto max-w-[86rem] px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10">
        <h2 className="mx-auto max-w-4xl text-[2.2rem] leading-[1.05] text-ivory sm:text-[3.2rem] lg:text-[4rem]">
          {heading}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-mute sm:text-base">
          {sub}
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton>Get a Free Quote</CtaButton>
          <GhostButton href={secondaryHref}>{secondaryLabel}</GhostButton>
        </div>
      </div>
    </section>
  );
}
