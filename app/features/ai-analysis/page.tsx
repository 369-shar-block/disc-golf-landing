import type { Metadata } from "next";
import { FeaturePage, Band, Points } from "@/components/site/FeaturePage";

export const metadata: Metadata = {
  title: "AI Disc Golf Form Analysis: The Fix and the Drill",
  description:
    "Upload a disc golf throw and get an AI breakdown: what's working, the main issue, why it happens, the fix and a drill. Backhand, forehand and putting. Ask DGFA Coach follow-up questions.",
  alternates: { canonical: "/features/ai-analysis" },
  openGraph: { title: "AI disc golf form analysis", url: "/features/ai-analysis" },
};

const FAQS = [
  {
    question: "What does the AI analysis tell me?",
    answer:
      "What is working in your throw, the one main issue holding you back, why it happens (the root cause, not just the symptom), how to fix it, and a drill to practice the fix.",
  },
  {
    question: "Which throws does it cover?",
    answer: "Backhand, forehand and putting. For a fault-by-fault grade against a coach's ideal form, use Pose Estimation (backhand and forehand).",
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
      slug="ai-analysis"
      label="AI analysis"
      shot="fault-causes"
      title={<>Root causes, <span className="text-gradient">not symptoms.</span></>}
      intro="Upload a throw and get a written breakdown from a model trained for disc golf: what's working, the main issue and why it happens, the fix, and a drill to make it stick."
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
      <Band index="02" label="DGFA Coach" title={<>Then ask <span className="text-gradient">anything.</span></>}>
        <p>
          Not sure how to do the drill, or whether your next clip should be from the side or behind? DGFA Coach answers questions about your
          analysis in plain language, right in the app.
        </p>
      </Band>
    </FeaturePage>
  );
}
