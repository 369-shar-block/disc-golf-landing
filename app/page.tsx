import type { Metadata } from "next";
import { APP, FAQS, JsonLd, faqSchema } from "@/lib/seo";
import { ThrowViewer } from "@/components/site/ThrowViewer";
import { StoreButtons } from "@/components/site/StoreButtons";
import { FaqList } from "@/components/site/FaqList";
import { FinalCta, MoreLink, Pricing, Reviews, SectionHead, Shot, TrustRow } from "@/components/site/blocks";
import { CompareTable } from "@/components/site/CompareTable";
import { LatestGuides } from "@/components/site/LatestGuides";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Disc Golf Form Analyzer: find the fault costing you distance",
    description:
      "Film one throw. Get graded against a real coach, see the fix and the drill, and rebuild the throw in 3D. iPhone and Android.",
    url: "/",
  },
};

const STATS = [
  { k: APP.accounts, v: "disc golfers signed up" },
  { k: APP.throwsAnalyzed, v: "throws analyzed" },
  { k: String(APP.faults), v: "coach-graded faults" },
  { k: `${APP.ratingValue}★`, v: `${APP.ratingCount} App Store ratings` },
];

const STEPS = [
  {
    n: "01",
    t: "Film one throw",
    d: "Any phone, any field. Side-on is best; behind and in front work too. Keep your whole body in frame and the phone steady.",
  },
  {
    n: "02",
    t: "Get graded against a coach",
    d: "The app tracks your body frame by frame and checks it against a coach's ideal backhand or forehand. It only grades what your camera angle can actually show.",
  },
  {
    n: "03",
    t: "Fix it with a drill",
    d: "You get the fault that matters most, why it costs you distance, and the coach's drill to fix it. Then spin the throw in 3D to see it yourself.",
  },
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 flex-none text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-[15px] text-fog-200">
          <Check />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      {/* ------------------------------------------------------------ hero */}
      <section data-section="hero" className="relative overflow-hidden">
        <div className="lab-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="wrap relative grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
          <div>
            <p className="label">
              <span className="text-cyan-400">●</span> AI disc golf form analysis · iPhone + Android
            </p>
            <h1 className="display mt-6 text-[52px] sm:text-[76px] lg:text-[88px]">
              Find the fault <span className="text-gradient">costing you distance.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-fog-200 sm:text-[19px]">
              Film one throw on your phone. Disc Golf Form Analyzer grades your backhand or forehand against a real coach&apos;s
              ideal form, then hands you the fix and the drill. Spin the throw in 3D to see it for yourself.
            </p>
            <StoreButtons where="hero" className="mt-9" />
            <TrustRow className="mt-6" />
          </div>
          <div className="relative">
            <div className="panel relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-ink-800 to-ink-950 shadow-glow sm:aspect-[5/5] lg:aspect-[4/5]">
              <ThrowViewer className="absolute inset-0" />
            </div>
            <p className="mt-3 text-center font-mono text-[10.5px] uppercase tracking-label text-fog-600">
              A real backhand, rebuilt in 3D by the app
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ stats */}
      <section data-section="stats" className="border-y border-line bg-ink-950/60">
        <div className="wrap grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {STATS.map((s) => (
            <div key={s.v} className="px-2 py-8 lg:px-8">
              <p className="display text-[40px] sm:text-[48px]">{s.k}</p>
              <p className="label mt-1">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ how it works */}
      <section id="how-it-works" data-section="how-it-works" className="wrap scroll-mt-20 py-24 sm:py-32">
        <SectionHead index="01" label="How it works" title={<>Three steps. <span className="text-gradient">One throw.</span></>} />
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="panel relative p-7">
              <p className="font-mono text-[12px] tracking-label text-cyan-400">{s.n}</p>
              <h3 className="mt-6 text-[21px] font-semibold text-white">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fog-400">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------------------ pose estimation */}
      <section data-section="pose-estimation" className="border-t border-line">
        <div className="wrap grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <SectionHead
              index="02"
              label="Pose estimation"
              title={<>Graded against <span className="text-gradient">a real coach.</span></>}
              intro="Most apps compare you to a generic model. Disc Golf Form Analyzer checks your throw against a coach's ideal backhand and forehand, fault by fault, and shows your skeleton next to theirs."
            />
            <Bullets items={["Backhand and forehand", `${APP.faults} coach-defined faults`, "Your form next to the ideal", "Never grades what the camera can't see"]} />
            <MoreLink href="/features/pose-estimation">How pose estimation works</MoreLink>
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Shot name="analysis" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ 3D throw */}
      <section data-section="3d-throw" className="relative overflow-hidden border-t border-line">
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="wrap relative grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
          <div className="order-2 mx-auto flex w-full max-w-[460px] items-end gap-4 lg:order-1">
            <Shot name="3d-throw" className="w-1/2" />
            <Shot name="compare" className="w-1/2 translate-y-10" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHead
              index="03"
              label="3D Throw"
              title={<>Spin it. Slow it. <span className="text-gradient">Compare it.</span></>}
              intro="Any throw video becomes a 3D body you can view from the side, front, behind or straight above. Slow the release to quarter speed, put two throws side by side, or place it life-size on the ground in AR."
            />
            <Bullets items={["Any angle, including top-down", "Quarter-speed slow motion", "Two throws, synced at release", "Life-size AR on iPhone"]} />
            <MoreLink href="/features/3d-throw">Explore 3D Throw</MoreLink>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ AI analysis */}
      <section data-section="ai-analysis" className="border-t border-line">
        <div className="wrap grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <SectionHead
              index="04"
              label="AI analysis"
              title={<>Root causes, <span className="text-gradient">not symptoms.</span></>}
              intro="A written breakdown of what's working, the one issue holding you back, why it happens, the fix and a drill. It covers backhand, forehand and putts, and DGFA Coach answers your follow-up questions."
            />
            <Bullets items={["What's working, so you keep it", "The main issue, explained", "A drill for the fix", "Ask DGFA Coach anything"]} />
            <MoreLink href="/features/ai-analysis">See an AI analysis</MoreLink>
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Shot name="fault-causes" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ caddie */}
      <section data-section="caddie" className="border-t border-line">
        <div className="wrap grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
          <div className="order-2 mx-auto w-full max-w-[340px] lg:order-1">
            <Shot name="caddie-bag" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHead
              index="05"
              label="DGFA Caddie"
              title={<>Your bag, <span className="text-gradient">with a caddie.</span></>}
              intro="Snap a photo of a disc to add it with its flight numbers. Snap the hole and get a disc and a shot, picked only from the discs you actually carry."
            />
            <Bullets items={["Add discs from a photo", "Flight numbers at a glance", "Hole-by-hole disc picks", "Picks from your own bag"]} />
            <MoreLink href="/features/caddie">Meet DGFA Caddie</MoreLink>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ compare */}
      <section data-section="compare" className="border-t border-line bg-ink-950/50">
        <div className="wrap py-24 sm:py-32">
          <SectionHead
            index="06"
            label="Compare"
            title={<>The honest <span className="text-gradient">comparison.</span></>}
            intro="A lesson, a sensor disc and your own camera roll all help. Here is where each one fits."
          />
          <CompareTable className="mt-12" />
          <MoreLink href="/compare">Compare disc golf training apps</MoreLink>
        </div>
      </section>

      {/* ------------------------------------------------------------ reviews */}
      <section data-section="reviews" className="border-t border-line">
        <div className="wrap py-24 sm:py-32">
          <SectionHead
            index="07"
            label="Reviews"
            title={<>From the <span className="text-gradient">App Store.</span></>}
            intro={`Rated ${APP.ratingValue} out of 5 from ${APP.ratingCount} ratings. Verbatim reviews, unedited.`}
          />
          <div className="mt-12">
            <Reviews />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ pricing + faq */}
      <section data-section="pricing" className="border-t border-line">
        <div className="wrap grid gap-14 py-24 sm:py-32 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead index="08" label="Pricing" title={<>Less than <span className="text-gradient">one lesson.</span></>} />
            <div className="mt-10">
              <Pricing />
            </div>
          </div>
          <div id="faq">
            <SectionHead index="09" label="FAQ" title="Questions" />
            <div className="mt-10">
              <FaqList faqs={FAQS} />
            </div>
          </div>
        </div>
      </section>

      <LatestGuides />

      <FinalCta />
    </>
  );
}

export const dynamic = "force-static";
