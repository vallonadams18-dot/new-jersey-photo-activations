"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NAV_CORPORATE,
  NAV_EXPERIENCES,
  NAV_LOCATIONS,
  NAV_PRIVATE,
  QUOTE_HREF,
  SITE,
} from "@/lib/site";

const GROUPS = [
  { label: "Corporate", items: NAV_CORPORATE },
  { label: "Weddings & Events", items: NAV_PRIVATE },
  { label: "Experiences", items: NAV_EXPERIENCES },
  { label: "Locations", items: NAV_LOCATIONS },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // The panel closes from the link's own click handler rather than by watching
  // the pathname in an effect — setting state synchronously inside an effect
  // triggers a cascading render, and the click is the real event anyway.
  const close = () => setOpen(false);

  // Lock the page behind the panel while it is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex size-11 items-center justify-center rounded-sharp border border-champagne/25 text-ivory transition-colors hover:border-champagne hover:text-champagne"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-obsidian">
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-champagne/12 px-5 sm:px-8">
            <span className="eyebrow text-champagne">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-sharp border border-champagne/25 text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-8 sm:px-8">
            <div className="flex flex-col gap-9">
              {GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col gap-3">
                  <p className="eyebrow text-champagne">{group.label}</p>
                  <div className="flex flex-col">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        onClick={close}
                        className="border-b border-ivory/8 py-3 font-display text-xl text-ivory transition-colors hover:text-champagne"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3">
                <p className="eyebrow text-champagne">More</p>
                <div className="flex flex-col">
                  {[
                    { href: "/gallery", label: "Gallery" },
                    { href: "/guides", label: "Guides" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      onClick={close}
                      className="border-b border-ivory/8 py-3 font-display text-xl text-ivory transition-colors hover:text-champagne"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-champagne/12 p-5 sm:p-8">
            <Link
              href={QUOTE_HREF}
              onClick={close}
              className="flex min-h-13 w-full items-center justify-center rounded-sharp gradient-gold font-sans text-sm font-medium uppercase tracking-[0.14em] text-obsidian"
            >
              Get a Free Quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="mt-3 flex min-h-11 w-full items-center justify-center text-sm text-mute transition-colors hover:text-champagne"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
