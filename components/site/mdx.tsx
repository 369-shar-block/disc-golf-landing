import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "./StoreButtons";

// Components available inside blog MDX.

const FEATURE: Record<string, { href: string; label: string; line: string }> = {
  "pose-estimation": {
    href: "/features/pose-estimation",
    label: "Pose Estimation",
    line: "Film your throw and get it graded against a coach's ideal form, with your skeleton next to theirs.",
  },
  "3d-throw": {
    href: "/features/3d-throw",
    label: "3D Throw",
    line: "Rebuild your throw in 3D, slow the release to quarter speed and compare two throws side by side.",
  },
  "ai-analysis": {
    href: "/features/ai-analysis",
    label: "AI Analysis",
    line: "Upload a throw and get the main issue, why it happens, the fix and a drill.",
  },
  caddie: {
    href: "/features/caddie",
    label: "DGFA Caddie",
    line: "Snap a hole and get a disc and a shot picked from the discs in your own bag.",
  },
};

// The in-article anchor for the app. Use where it genuinely helps the reader, at most twice.
export function AppCallout({ feature = "pose-estimation", title, children }: { feature?: keyof typeof FEATURE; title?: string; children?: React.ReactNode }) {
  const f = FEATURE[feature] ?? FEATURE["pose-estimation"];
  return (
    <aside className="not-prose my-10 overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.07] to-violet-500/[0.05] p-6 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-label text-cyan-400">Check it on your own throw · {f.label}</p>
      <p className="mt-3 text-[19px] font-semibold leading-snug text-white">{title ?? "See this in your own form"}</p>
      <div className="mt-2 text-[15px] leading-relaxed text-fog-200">{children ?? f.line}</div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <StoreButtons where={`blog-callout-${feature}`} />
        <Link href={f.href} className="text-[14px] text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 hover:decoration-cyan-400">
          How {f.label} works
        </Link>
      </div>
    </aside>
  );
}

// A short "the answer" box at the top of an article (answer-first, for readers and AI).
export function Answer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-2xl border border-line bg-white/[0.03] p-6">
      <p className="font-mono text-[11px] uppercase tracking-label text-cyan-400">Short answer</p>
      <div className="mt-2 text-[17px] leading-relaxed text-white [&>p]:my-0">{children}</div>
    </div>
  );
}

export function Figure({ src, alt, caption, width = 1600, height = 900 }: { src: string; alt: string; caption?: string; width?: number; height?: number }) {
  return (
    <figure className="my-10">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full rounded-2xl border border-line" sizes="(min-width: 768px) 720px, 100vw" />
      {caption && <figcaption className="mt-3 text-center text-[13px] text-fog-600">{caption}</figcaption>}
    </figure>
  );
}

export const mdxComponents = { AppCallout, Answer, Figure };
