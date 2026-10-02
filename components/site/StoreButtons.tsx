"use client";

import { APP } from "@/lib/seo";
import { cn } from "@/lib/utils";

function trackLead(store: "App Store" | "Google Play", where: string) {
  const w = window as unknown as { fbq?: (...a: unknown[]) => void };
  w.fbq?.("track", "Lead", { content_name: store, content_category: store === "App Store" ? "iOS" : "Android", placement: where });
}

const Apple = () => (
  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden>
    <path d="M16.37 12.9c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.27-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 6.1c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.27Z" />
  </svg>
);

const Play = () => (
  <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" aria-hidden>
    <path d="M4.2 2.6 13.6 12l-9.4 9.4c-.3-.2-.5-.6-.5-1.1V3.7c0-.5.2-.9.5-1.1Z" fill="#22e3ff" />
    <path d="m16.7 8.9-3.1 3.1 3.1 3.1 3.6-2.1c.9-.5.9-1.5 0-2l-3.6-2.1Z" fill="#a78bfa" />
    <path d="M13.6 12 4.2 2.6c.3-.2.8-.2 1.3.1l11.2 6.2-3.1 3.1Z" fill="#7cf3ff" />
    <path d="m13.6 12 3.1 3.1-11.2 6.2c-.5.3-1 .3-1.3.1l9.4-9.4Z" fill="#6d8bff" />
  </svg>
);

export function StoreButtons({ where, className, size = "md" }: { where: string; className?: string; size?: "md" | "lg" }) {
  const base =
    "group inline-flex items-center gap-3 rounded-xl border transition-colors duration-200 " +
    (size === "lg" ? "px-5 py-3.5" : "px-4 py-3");
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={APP.iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLead("App Store", where)}
        className={cn(base, "border-white bg-white text-ink-900 hover:bg-fog-50")}
        aria-label="Download on the App Store"
      >
        <Apple />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">Download on the</span>
          <span className="mt-0.5 text-[17px] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={APP.androidUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLead("Google Play", where)}
        className={cn(base, "border-line bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.07]")}
        aria-label="Get it on Google Play"
      >
        <Play />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wide text-fog-400">Get it on</span>
          <span className="mt-0.5 text-[17px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
