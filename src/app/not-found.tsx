import { GhostButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div className="pointer-events-none absolute inset-0 glow-gold" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <p className="eyebrow text-champagne">404</p>
        <h1 className="mt-6 text-[2.4rem] leading-[1.05] text-ivory sm:text-[3.2rem]">
          That page is not here
        </h1>
        <p className="mt-7 text-[15px] leading-relaxed text-mute sm:text-base">
          The link may be out of date, or the page may have moved. The
          experiences and service areas below are the usual places to start.
        </p>
        <div className="mt-11 flex flex-col gap-4 sm:flex-row">
          <GhostButton href="/experiences">Explore Experiences</GhostButton>
          <GhostButton href="/locations">Where We Work</GhostButton>
        </div>
      </div>
    </section>
  );
}
