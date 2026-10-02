"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { APP, NAV } from "@/lib/seo";
import { Brand } from "./Brand";

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink-900/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <Brand />
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active = path === n.href || path.startsWith(n.href + "/");
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`rounded-lg px-3 py-2 text-[14px] transition-colors ${
                    active ? "text-white" : "text-fog-400 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={APP.iosUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.("track", "Lead", { content_name: "App Store", content_category: "iOS", placement: "nav" })}
            className="hidden rounded-lg bg-white px-3.5 py-2 text-[13px] font-semibold text-ink-900 transition-colors hover:bg-fog-50 sm:inline-block"
          >
            Try it free
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="wrap pb-5 lg:hidden">
          <ul className="flex flex-col border-t border-line pt-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block border-b border-line py-3.5 text-[15px] text-fog-200">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
