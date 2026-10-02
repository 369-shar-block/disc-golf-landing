import Image from "next/image";
import Link from "next/link";

// App icon + wordmark. The icon is the real App Store artwork (public/app-icon.webp).
export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Disc Golf Form Analyzer home">
      <Image src="/app-icon.webp" alt="" width={30} height={30} className="rounded-[8px] ring-1 ring-white/10" priority />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-bold uppercase tracking-[0.02em] text-white">DGFA</span>
        <span className="mt-[3px] font-mono text-[9px] uppercase tracking-[0.2em] text-fog-400">Form Analyzer</span>
      </span>
    </Link>
  );
}
