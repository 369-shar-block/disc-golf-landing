import Image from "next/image";
import Link from "next/link";
import { APP } from "@/lib/seo";
import { REVIEWS } from "@/lib/reviews";
import { StoreButtons } from "./StoreButtons";

// ---------------------------------------------------------------- headings

export function SectionHead({
  index,
  label,
  title,
  intro,
  align = "left",
  as = "h2",
}: {
  index?: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const H = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="label flex items-center gap-3" style={align === "center" ? { justifyContent: "center" } : undefined}>
        {index && <span className="text-cyan-400">{index}</span>}
        {index && <span className="h-px w-8 bg-line" />}
        <span>{label}</span>
      </p>
      <H className={`display mt-5 ${as === "h1" ? "text-[44px] sm:text-[64px] lg:text-[76px]" : "text-[38px] sm:text-[52px]"}`}>{title}</H>
      {intro && <p className="mt-5 text-[17px] leading-relaxed text-fog-200 sm:text-[18px]">{intro}</p>}
    </div>
  );
}

// ---------------------------------------------------------------- media

const SHOT_ALT: Record<string, string> = {
  analysis: "Pose Estimation: your throw tracked as a skeleton next to the coach's ideal form, with the main fault and how to fix it",
  "3d-throw": "3D Throw: a disc golf throw rebuilt as a 3D body with view presets, hand trail and slow-motion controls",
  "fault-causes": "AI Analysis: the main issues in a throw explained, with root causes rather than symptoms",
  compare: "Compare two throws side by side, synced at the moment of release",
  ar: "AR: a 3D throw placed life-size on the ground through the iPhone camera",
  "caddie-bag": "DGFA Caddie: your disc bag with flight numbers and personalized disc picks",
};

export function Shot({ name, className = "", priority = false }: { name: keyof typeof SHOT_ALT | string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-line bg-ink-800 shadow-card ${className}`}>
      <Image
        src={`/screens/${name}.webp`}
        alt={SHOT_ALT[name] ?? "Disc Golf Form Analyzer app screen"}
        width={1242}
        height={2207}
        sizes="(min-width: 1024px) 360px, 70vw"
        className="h-auto w-full"
        priority={priority}
      />
    </div>
  );
}

// ---------------------------------------------------------------- trust row

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#ffc94d] ${className}`} aria-hidden>
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </span>
  );
}

export function TrustRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-fog-400 ${className}`}>
      <span className="inline-flex items-center gap-2">
        <Stars />
        <span>
          <span className="font-semibold text-white">{APP.ratingValue}</span> on the App Store ({APP.ratingCount} ratings)
        </span>
      </span>
      <span>{APP.trialDays}-day free trial, then ${APP.priceYearly}/year</span>
    </div>
  );
}

// ---------------------------------------------------------------- reviews

export function Reviews() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {REVIEWS.map((r) => (
        <figure key={r.name} className="panel flex flex-col p-6">
          <Stars className="text-[13px]" />
          <p className="mt-3 text-[15px] font-semibold text-white">{r.title}</p>
          <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-fog-200">&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-label text-fog-600">
            {r.name} · App Store review
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------- pricing

export function Pricing() {
  const items = [
    "Pose Estimation, backhand and forehand",
    `Graded against a coach on ${APP.faults} faults`,
    "AI Analysis with the fix and a drill",
    "3D Throw, compare, and AR on iPhone",
    "DGFA Coach chat and DGFA Caddie",
    "Drill library",
  ];
  return (
    <div className="panel relative overflow-hidden p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <p className="label text-cyan-400">One plan, everything included</p>
      <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
        <p className="display text-[64px] sm:text-[80px]">${APP.priceYearly}</p>
        <p className="pb-3 text-[16px] text-fog-200">per year</p>
      </div>
      <p className="mt-1 text-[15px] text-fog-400">
        {APP.trialDays}-day free trial. Cancel anytime in your App Store or Google Play settings.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[15px] text-fog-200">
            <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {it}
          </li>
        ))}
      </ul>
      <StoreButtons where="pricing" className="mt-9" />
    </div>
  );
}

// ---------------------------------------------------------------- closing CTA

export function FinalCta({ title = "Film one throw. See what changes.", where = "final-cta" }: { title?: string; where?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="lab-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="wrap relative py-24 text-center sm:py-32">
        <p className="label">Free for {APP.trialDays} days</p>
        <h2 className="display mx-auto mt-5 max-w-4xl text-[44px] sm:text-[72px]">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] text-fog-200">
          Join {APP.accounts} disc golfers using Disc Golf Form Analyzer on iPhone and Android.
        </p>
        <div className="mt-10 flex justify-center">
          <StoreButtons where={where} size="lg" className="justify-center" />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- misc

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-cyan-400 hover:text-cyan-300">
      {children}
      <Arrow />
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span className="text-fog-600">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.path} className="hover:text-white">
                {it.name}
              </Link>
            ) : (
              <span className="text-fog-200">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
