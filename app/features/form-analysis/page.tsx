import type { Metadata } from "next";
import Link from "next/link";
import { FeaturePage, Band, Points } from "@/components/site/FeaturePage";

export const metadata: Metadata = {
  title: "Disc Golf Form Analysis: The Main Fault, the Fix and the Drill",
  description:
    "Disc golf form analysis from one phone video: what's working, the main issue, why it happens, the fix and a drill. Backhand, forehand and putting, with DGFA Coach for follow-ups.",
  alternates: { canonical: "/features/form-analysis" },
  openGraph: { title: "Disc golf form analysis: the fix and the drill", url: "/features/form-analysis" },
};

const FAQS = [
  {
    question: "What does a form analysis tell me?",
    answer:
      "What is working in your throw, the one main issue holding you back, why it happens (the root cause, not just the symptom), how to fix it, and a drill to practice the fix.",
  },
  {
    question: "Which throws does it cover?",
    answer: "Backhand, forehand and putting. For a fault-by-fault grade against a coach's ideal form, use Pose Estimation (backhand and forehand).",
  },
  {
    question: "Do I have to mark positions or draw lines on my video?",
    answer: "No. You upload the clip and the vision software finds your body in every frame on its own. There is nothing to mark, trim to the frame or measure by hand.",
  },
  {
    question: "Can I ask questions about my analysis?",
    answer: "Yes. DGFA Coach answers follow-up questions about your throw in plain language, for example how to practice the drill or what to film next.",
  },
  {
    question: "How long does an analysis take?",
    answer: "Usually a minute or two after the upload, depending on the clip length and your connection.",
  },
];

export default function Page() {
  return (
    <FeaturePage
      slug="form-analysis"
      label="Form analysis"
      shot="fault-causes"
      title={<>Root causes, <span className="text-gradient">not symptoms.</span></>}
      intro="Upload a throw and get a written disc golf form analysis built for disc golf: what's working, the main issue and why it happens, the fix, and a drill to make it stick."
      faqs={FAQS}
      ctaTitle="Get the fix for your throw."
    >
      <Band index="01" label="What you get" title={<>A coach&apos;s <span className="text-gradient">breakdown.</span></>}>
        <Points
          items={[
            { t: "What's working", d: "The parts of your throw to keep, so you don't fix what isn't broken." },
            { t: "The main issue", d: "One priority, not a list of twenty. The thing that costs you the most distance or control." },
            { t: "Why it happens", d: "The root cause in your sequence, so the fix sticks instead of moving the problem." },
            { t: "The fix and a drill", d: "A clear cue and a drill you can take to the field today." },
          ]}
        />
      </Band>
      <Band index="02" label="See it in 3D" title={<>Then <span className="text-gradient">see it yourself.</span></>}>
        <p>
          Every fault is easier to fix once you can see it. Rebuild the same throw with{" "}
          <Link href="/features/3d-throw" className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4">
            3D form analysis
          </Link>{" "}
          and look at it from above, behind or the side at quarter speed.
        </p>
      </Band>
      <Band index="03" label="DGFA Coach" title={<>Then ask <span className="text-gradient">anything.</span></>}>
        <p>
          Not sure how to do the drill, or whether your next clip should be from the side or behind? DGFA Coach answers questions about your
          analysis in plain language, right in the app.
        </p>
      </Band>
    </FeaturePage>
  );
}
