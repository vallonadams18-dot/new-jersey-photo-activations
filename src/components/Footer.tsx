import Link from "next/link";
import {
  NAV_CORPORATE,
  NAV_EXPERIENCES,
  NAV_LOCATIONS,
  NAV_PRIVATE,
  SITE,
} from "@/lib/site";
import { Wordmark } from "./Wordmark";

function Column({
  title,
  items,
}: {
  title: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="eyebrow text-champagne">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              prefetch={false}
              className="text-[13px] text-mute transition-colors hover:text-ivory"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="gradient-dark border-t border-champagne/12">
      <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-6">
            <Wordmark />
            <p className="max-w-xs text-[13px] leading-relaxed text-mute">
              Luxury photo booths and interactive event experiences for
              corporate activations, trade shows, weddings and celebrations
              across New Jersey.
            </p>
            <div className="flex flex-col gap-1.5 text-[13px]">
              <a
                href={SITE.phoneHref}
                className="text-ivory transition-colors hover:text-champagne"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-mute transition-colors hover:text-champagne"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <Column title="Corporate" items={NAV_CORPORATE} />
          <Column title="Private" items={NAV_PRIVATE} />
          <Column title="Experiences" items={NAV_EXPERIENCES.slice(0, 9)} />
          <Column title="Locations" items={NAV_LOCATIONS.slice(0, 9)} />
        </div>

        {/* Every experience and location stays crawlable from the footer even
            though the columns above show only the first nine of each. */}
        <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-ivory/8 pt-8">
          {[...NAV_EXPERIENCES.slice(9), ...NAV_LOCATIONS.slice(9)].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="text-[12px] text-mute/70 transition-colors hover:text-champagne"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-ivory/8 pt-8">
          <div className="flex flex-col gap-4 text-[12px] text-mute/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/contact" prefetch={false} className="transition-colors hover:text-champagne">
                Contact
              </Link>
              <Link href="/guides" prefetch={false} className="transition-colors hover:text-champagne">
                Guides
              </Link>
              <Link href="/privacy" prefetch={false} className="transition-colors hover:text-champagne">
                Privacy
              </Link>
              <Link href="/terms" prefetch={false} className="transition-colors hover:text-champagne">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
