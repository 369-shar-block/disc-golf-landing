import type { Metadata } from "next";
import Link from "next/link";
import { FeaturePage, Band, Points } from "@/components/site/FeaturePage";
import { Shot } from "@/components/site/blocks";
import { ThrowViewer } from "@/components/site/ThrowViewer";

export const metadata: Metadata = {
  title: "3D Disc Golf Form Analysis from One Phone Video",
  description:
    "3D disc golf form analysis from one phone video. See your throw as a 3D body from any angle, slow it to quarter speed, compare two throws synced at release. iPhone and Android.",
  alternates: { canonical: "/features/3d-throw" },
  openGraph: { title: "3D disc golf form analysis: see your throw in 3D", url: "/features/3d-throw" },
};

const FAQS = [
  {
    question: "What is 3D disc golf form analysis?",
    answer:
      "It turns an ordinary video of your throw into a moving 3D body, so you can study your form from angles a phone camera never saw: straight above to check the pull path for rounding, from behind for the brace, from the side for posture and timing. Disc Golf Form Analyzer does this with vision software from one phone video, with no sensors or suits.",
  },
  {
    question: "Do I have to mark positions or key frames by hand?",
    answer:
      "No. You upload the clip and the vision software finds your body in every frame and builds the 3D throw on its own. The release is marked on the timeline for you.",
  },
  {
    question: "How does 3D Throw work?",
    answer:
      "You upload a normal phone video. The app estimates your full 3D body in every frame and rebuilds the throw as a 3D figure you can rotate, zoom and play back. No special camera or sensors are needed.",
  },
  {
    question: "What can I do with a 3D throw?",
    answer:
      "View it from the side, front, behind or straight above, slow it to 1/4 or 1/2 speed, scrub frame by frame to your release, follow the hand trail, compare two throws side by side synced at release, and on iPhone place it life-size in augmented reality.",
  },
  {
    question: "How many 3D throws can I build?",
    answer:
      "Each account can build up to two new 3D throws a day. Opening saved 3D throws and comparing them never counts toward that, and a build that fails is refunded automatically.",
  },
  {
    question: "Does AR work on Android?",
    answer: "Not yet. The 3D viewer and Compare work on iPhone and Android; life-size AR placement is iPhone-only for now.",
  },
  {
    question: "What video works best?",
    answer: "A 2 to 30 second clip with one person, the whole body in frame, a steady phone and good light. Trim it to just the throw.",
  },
];

export default function Page() {
  return (
    <FeaturePage
      slug="3d-throw"
      label="3D Throw"
      shot="3d-throw"
      title={<>3D disc golf <span className="text-gradient">form analysis.</span></>}
      intro="Film one throw on your phone and see it as a 3D body. Spin it to any angle, slow the release to quarter speed and compare two throws side by side. No sensors, no suits, no marking frames by hand. iPhone and Android, with life-size AR on iPhone."
      faqs={FAQS}
      ctaTitle="Turn your next throw into 3D."
    >
      <section className="border-t border-line">
        <div className="wrap grid items-center gap-12 py-24 lg:grid-cols-[1fr_1fr]">
          <div className="panel relative aspect-square overflow-hidden bg-gradient-to-b from-ink-800 to-ink-950">
            <ThrowViewer className="absolute inset-0" />
          </div>
          <div>
            <p className="label">
              <span className="text-cyan-400">01</span> · Try it here
            </p>
            <h2 className="display mt-5 text-[38px] sm:text-[52px]">
              Drag to <span className="text-gradient">spin it.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-fog-200">
              This is a real backhand rebuilt by the app from an ordinary phone video. In the app you get the same view of your own throw, with
              view presets, a scrubber, the release marker and speed controls.
            </p>
          </div>
        </div>
      </section>

      <Band index="02" label="What you can do" title={<>Built to <span className="text-gradient">study a throw.</span></>}>
        <Points
          items={[
            { t: "Any angle", d: "Side, front, behind and a top-down view, or drag to any angle in between." },
            { t: "Slow motion", d: "Play at 1/4 or 1/2 speed, or scrub frame by frame. The orange mark on the slider is your release." },
            { t: "Hand trail", d: "A glowing trail follows your throwing hand so you can see the path of the pull." },
            { t: "Zoom anywhere", d: "Pinch in to study your arm or feet, pinch out to see the whole run-up." },
          ]}
        />
      </Band>

      <section className="border-t border-line">
        <div className="wrap grid items-center gap-14 py-24 lg:grid-cols-2">
          <div className="mx-auto flex w-full max-w-[460px] gap-4">
            <Shot name="compare" className="w-1/2" />
            <Shot name="ar" className="w-1/2 translate-y-10" />
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-fog-200">
            <p className="label">
              <span className="text-cyan-400">03</span> · Compare and AR
            </p>
            <h2 className="display text-[38px] sm:text-[52px]">
              Two throws. <span className="text-gradient">One release.</span>
            </h2>
            <p>
              Put two 3D throws on screen together, each at its own speed. Turn on <strong className="text-white">Sync at release</strong> and
              both line up at the moment the disc leaves the hand, so you can see exactly what changed between a good throw and a bad one.
            </p>
            <p>
              On iPhone, tap AR to place the throw on the real ground, life-size, half-size or tabletop. Enter your height and the figure scales
              to you.
            </p>
          </div>
        </div>
      </section>

      <Band index="04" label="Why 3D" title={<>What flat video <span className="text-gradient">can&apos;t show.</span></>}>
        <Points
          items={[
            { t: "Pull path from above", d: "Rounding is a sideways curve. A side-on video hides it; the top-down view of a 3D throw shows it in one frame." },
            { t: "Hips vs shoulders", d: "Turn the figure to see whether your hips open before your shoulders, the separation that powers a backhand and forehand." },
            { t: "Reach-back depth", d: "How far the disc goes back, and whether it stays on the target line, is a depth question one camera can only guess at in 2D." },
            { t: "Any angle, one clip", d: "Film once from the side and still check the views from behind, in front and above." },
          ]}
        />
      </Band>

      <Band index="05" label="Guides" title={<>Learn to read <span className="text-gradient">a 3D throw.</span></>}>
        <ul className="space-y-3">
          {[
            { href: "/blog/disc-golf-3d-form-analysis", t: "3D disc golf form analysis: what it shows that 2D video can't" },
            { href: "/blog/how-to-read-your-disc-golf-throw-in-3d", t: "How to read your disc golf throw in 3D, view by view" },
            { href: "/blog/compare-disc-golf-throws-side-by-side", t: "How to compare two disc golf throws side by side" },
            { href: "/blog/disc-golf-form-analysis-guide", t: "The complete guide to disc golf form analysis" },
          ].map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 hover:decoration-cyan-400">
                {g.t}
              </Link>
            </li>
          ))}
        </ul>
      </Band>
    </FeaturePage>
  );
}
