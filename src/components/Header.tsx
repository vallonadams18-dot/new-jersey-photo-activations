import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  NAV_CORPORATE,
  NAV_EXPERIENCES,
  NAV_LOCATIONS,
  NAV_PRIVATE,
} from "@/lib/site";
import { CtaButton } from "./Button";
import { MobileNav } from "./MobileNav";
import { Wordmark } from "./Wordmark";

function Dropdown({
  label,
  items,
  columns = 1,
}: {
  label: string;
  items: readonly { href: string; label: string }[];
  columns?: 1 | 2;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ivory/70 transition-colors group-hover:text-champagne"
      >
        {label}
        <ChevronDown
          className="size-3.5 transition-transform duration-300 group-hover:rotate-180"
          aria-hidden="true"
        />
      </button>
      <div
        className={`invisible absolute left-0 top-full z-50 ${columns === 2 ? "w-[30rem]" : "w-64"} translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`}
      >
        <div
          className={`rounded-sharp border border-champagne/15 bg-charcoal p-2 shadow-2xl ${columns === 2 ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"}`}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-sharp px-3 py-2 text-[13px] text-ivory/75 transition-colors hover:bg-champagne/10 hover:text-champagne"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-champagne/12 bg-obsidian/92 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-[86rem] items-center gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          prefetch={false}
          className="shrink-0"
          aria-label="New Jersey Photo Activations — home"
        >
          <Wordmark />
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 xl:flex" aria-label="Main">
          <Dropdown label="Corporate" items={NAV_CORPORATE} />
          <Dropdown label="Experiences" items={NAV_EXPERIENCES} columns={2} />
          <Dropdown label="Weddings & Events" items={NAV_PRIVATE} />
          <Dropdown label="Locations" items={NAV_LOCATIONS} columns={2} />
          <Link
            href="/gallery"
            prefetch={false}
            className="px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ivory/70 transition-colors hover:text-champagne"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            prefetch={false}
            className="px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ivory/70 transition-colors hover:text-champagne"
          >
            About
          </Link>
        </nav>

        <div className="ml-auto hidden xl:ml-6 xl:block">
          <CtaButton size="md">Get a Quote</CtaButton>
        </div>

        <div className="ml-auto xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
