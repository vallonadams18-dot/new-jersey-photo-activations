import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QUOTE_HREF } from "@/lib/site";

const sizes = {
  md: "min-h-11 px-6 text-[13px]",
  lg: "min-h-13 px-8 text-sm",
} as const;

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-sharp font-sans font-medium uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne";

/** The signature champagne gradient. Reserved for primary actions only. */
export function CtaButton({
  href = QUOTE_HREF,
  size = "lg",
  className = "",
  children,
}: {
  href?: string;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} gradient-gold text-obsidian shadow-[0_10px_30px_-14px_rgba(200,169,107,0.85)] hover:shadow-[0_16px_40px_-14px_rgba(200,169,107,0.95)] ${className}`}
    >
      {children}
      <ArrowRight
        className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

/**
 * Secondary action. A champagne hairline on dark, a deepened gold on light —
 * the rule the whole palette runs on: gold text never sits on ivory.
 */
export function GhostButton({
  href,
  size = "lg",
  tone = "dark",
  className = "",
  children,
}: {
  href: string;
  size?: keyof typeof sizes;
  tone?: "dark" | "light";
  className?: string;
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "dark"
      ? "border-champagne/35 text-ivory hover:border-champagne hover:bg-champagne/10"
      : "border-champagne-deep/35 text-charcoal hover:border-champagne-deep hover:bg-champagne-deep/6";
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} border ${toneClass} ${className}`}
    >
      {children}
      <ArrowRight
        className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
