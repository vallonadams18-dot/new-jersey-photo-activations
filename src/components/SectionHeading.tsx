interface Props {
  eyebrow?: string;
  heading: string;
  sub?: string;
  /** Which ground this sits on — decides whether gold text is safe. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  sub,
  tone = "dark",
  align = "left",
  className = "",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        // Champagne reads 8.75:1 on obsidian and 2.25:1 on white, so the
        // light-ground variant drops to the gradient's darkest stop (5.01:1).
        <p className={dark ? "eyebrow text-champagne" : "eyebrow text-champagne-deep"}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.1rem] ${dark ? "text-ivory" : "text-charcoal"}`}
      >
        {heading}
      </h2>
      {sub && (
        <p
          className={`max-w-2xl text-[15px] leading-relaxed sm:text-base ${dark ? "text-mute" : "text-charcoal/70"} ${align === "center" ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
