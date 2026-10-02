import type { Metadata } from "next";
import { FeaturePage, Band, Points } from "@/components/site/FeaturePage";
import { FAULTS } from "@/lib/faults";
import { APP } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Disc Golf Pose Estimation: Your Form vs a Coach's Ideal",
  description:
    "Pose estimation for disc golf. Film a backhand or forehand and get it graded against a coach's ideal form on 20 faults, with your skeleton next to theirs. iPhone and Android.",
  alternates: { canonical: "/features/pose-estimation" },
  openGraph: { title: "Disc golf pose estimation, graded against a coach", url: "/features/pose-estimation" },
};

const FAQS = [
  {
    question: "What is pose estimation in disc golf?",
    answer:
      "Pose estimation is computer vision that finds your joints (shoulders, elbows, hips, knees and so on) in every frame of a video. In Disc Golf Form Analyzer it tracks your throw and compares your positions to a coach's ideal backhand or forehand.",
  },
  {
    question: "Which faults does it check?",
    answer: `${APP.faults} coach-defined faults, 10 for backhand and 10 for forehand, such as rounding, early rotation, a weak front-side brace, chicken wing and pushing the disc. Each one comes with the coach's explanation, cue and drill in the app.`,
  },
  {
    question: "Why are some faults marked as not checked?",
    answer:
      "Some faults can only be seen from certain angles. Rounding, for example, shows up from behind or in front, not from the side. The app only grades what your camera angle can actually show, and tells you which faults need a different angle.",
  },
  {
    question: "Is the skeleton overlay accurate?",
    answer:
      "It is reliable for full-body, well-lit, steady footage with one person in frame. Fast hand motion can blur at standard frame rates, which is why the grading focuses on body positions and sequencing rather than exact hand speed.",
  },
];

export default function Page() {
  const byThrow = (t: "Backhand" | "Forehand") => FAULTS.filter((f) => f.throw === t);
  return (
    <FeaturePage
      slug="pose-estimation"
      label="Pose estimation"
      shot="analysis"
      title={<>Your form, <span className="text-gradient">graded against a coach.</span></>}
      intro={`Film a backhand or forehand. Pose estimation tracks your body through the whole throw and grades it against a coach's ideal form on ${APP.faults} faults, with your skeleton next to theirs.`}
      faqs={FAQS}
      ctaTitle="See your skeleton next to the coach's."
    >
      <Band index="01" label="How it works" title={<>Tracked, <span className="text-gradient">then graded.</span></>}>
        <p>
          The app finds your joints in every frame and follows them through the reach-back, the pull, the release and the follow-through. It
          then checks your positions and timing against a real coach&apos;s ideal throw, not a generic body model.
        </p>
        <Points
          items={[
            { t: "Your skeleton vs the ideal", d: "See your throw drawn as a skeleton next to the coach's, so the difference is visible, not just described." },
            { t: "Work on these / looks good", d: "Faults are sorted into what to fix now, what already looks right, and what this angle could not show." },
            { t: "Angle-aware", d: "Side-on, behind or in front: only the faults your camera can actually see are graded." },
            { t: "The coach's fix", d: "Every fault comes with the coach's explanation, a cue and a drill, plus a short demo clip." },
          ]}
        />
      </Band>

      <section className="border-t border-line">
        <div className="wrap py-24">
          <p className="label">
            <span className="text-cyan-400">02</span> · The {APP.faults} faults it checks
          </p>
          <h2 className="display mt-5 max-w-3xl text-[38px] sm:text-[52px]">
            Ten for backhand. <span className="text-gradient">Ten for forehand.</span>
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {(["Backhand", "Forehand"] as const).map((t) => (
              <div key={t} className="panel overflow-hidden">
                <p className="border-b border-line px-6 py-4 font-mono text-[11px] uppercase tracking-label text-cyan-400">{t}</p>
                <ul>
                  {byThrow(t).map((f) => (
                    <li key={t + f.name} className="flex items-center justify-between gap-4 border-b border-line px-6 py-3.5 last:border-0">
                      <span className="text-[15px] text-white">{f.name}</span>
                      <span className="flex flex-none gap-1.5">
                        {f.angles.map((a) => (
                          <span key={a} className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-fog-400">
                            {a}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-fog-600">Tags show the camera angles each fault can be graded from.</p>
        </div>
      </section>

      <Band index="03" label="Filming tips" title={<>Get a <span className="text-gradient">clean read.</span></>}>
        <ul className="space-y-3">
          <li>Keep your whole body in frame from the run-up to the follow-through.</li>
          <li>Hold the phone still: a tripod, a bag or a friend. Do not pan or zoom.</li>
          <li>Side-on shows the most faults. Film from behind to check rounding and the power pocket.</li>
          <li>Good light, one person in the shot, and a plain background help the tracking.</li>
        </ul>
      </Band>
    </FeaturePage>
  );
}
