import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href?: string;
}

/** Visible breadcrumbs. The matching BreadcrumbList schema is emitted by the page. */
export function Breadcrumbs({
  trail,
  tone = "dark",
}: {
  trail: Crumb[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] uppercase tracking-[0.16em] ${dark ? "text-mute" : "text-charcoal/55"}`}
      >
        {trail.map((crumb, i) => (
          <li key={crumb.name} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight
                className="size-3 shrink-0 opacity-50"
                aria-hidden="true"
              />
            )}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className={
                  dark
                    ? "transition-colors hover:text-champagne"
                    : "transition-colors hover:text-champagne-deep"
                }
              >
                {crumb.name}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? "text-ivory/80" : "text-charcoal"}>
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
