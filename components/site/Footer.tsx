import Link from "next/link";
import { APP, COMPANY, NAV, SUPPORT_EMAIL } from "@/lib/seo";
import { Brand } from "./Brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <Brand />
          <p className="mt-4 text-[14px] leading-relaxed text-fog-400">
            Disc golf form analysis on your phone. Graded against a real coach, rebuilt in 3D, fixed with a drill.
          </p>
        </div>
        <div>
          <p className="label mb-4">Product</p>
          <ul className="space-y-2.5 text-[14px]">
            {NAV.filter((n) => n.href.startsWith("/features")).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-fog-200 hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/compare" className="text-fog-200 hover:text-white">
                Compare training apps
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="label mb-4">Learn</p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <Link href="/blog" className="text-fog-200 hover:text-white">
                Guides
              </Link>
            </li>
            <li>
              <a href={APP.iosUrl} target="_blank" rel="noopener noreferrer" className="text-fog-200 hover:text-white">
                App Store
              </a>
            </li>
            <li>
              <a href={APP.androidUrl} target="_blank" rel="noopener noreferrer" className="text-fog-200 hover:text-white">
                Google Play
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="label mb-4">Company</p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-fog-200 hover:text-white">
                Support
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-fog-200 hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-fog-200 hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/delete-account" className="text-fog-200 hover:text-white">
                Delete account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-[12px] text-fog-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-label">Made for disc golfers</p>
        </div>
      </div>
    </footer>
  );
}
