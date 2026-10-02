import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { CompareTable } from "@/components/site/CompareTable";
import { Band, Points } from "@/components/site/FeaturePage";
import { Breadcrumbs, FinalCta, SectionHead } from "@/components/site/blocks";
import { FaqList } from "@/components/site/FaqList";

export const metadata: Metadata = {
  title: "Disc Golf Form Analyzer vs Lessons, Sensor Discs & Filming Yourself",
  description:
    "An honest comparison of ways to improve your disc golf form: a private lesson, a sensor disc like TechDisc, filming yourself, and Disc Golf Form Analyzer. What each one measures, costs and is best for.",
  alternates: { canonical: "/compare" },
  openGraph: { title: "How to improve your disc golf form: the options compared", url: "/compare" },
};

const FAQS = [
  {
    question: "Is an app as good as a disc golf coach?",
    answer:
      "Not for live, in-person correction: a coach can watch you, adjust you on the spot and plan your practice. An app is better for frequency and cost, since you can check every throw you film, any time. Many players use both.",
  },
  {
    question: "Should I get a TechDisc or a form analysis app?",
    answer:
      "They measure different things. A sensor disc measures the disc (speed, spin, launch and nose angles). A form analysis app looks at the body mechanics that produce those numbers. If you want to know why your numbers are what they are, start with form.",
  },
  {
    question: "Can I just film myself and compare to pros?",
    answer:
      "You can, and it helps. The hard part is knowing what to look for and which difference matters most. Disc Golf Form Analyzer does that comparison against a coach's ideal form and tells you the one fault to fix first.",
  },
];

export default function ComparePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(FAQS)]} />
      <section className="relative overflow-hidden">
        <div className="lab-grid pointer-events-none absolute inset-0" />
        <div className="wrap relative pb-16 pt-10 lg:pt-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8">
            <SectionHead
              as="h1"
              label="Compare"
              title={<>How to improve your form: <span className="text-gradient">the honest comparison.</span></>}
              intro="Lessons, sensor discs, filming yourself and form analysis apps all help a disc golfer improve. They measure different things and cost very different amounts. Here is what each one is best at."
            />
          </div>
          <CompareTable className="mt-12" />
        </div>
      </section>
      <Band index="01" label="When to use what" title={<>Pick the <span className="text-gradient">right tool.</span></>}>
        <Points
          items={[
            { t: "Private lesson", d: "Best for live correction, a practice plan and accountability. Worth it if you can afford regular sessions." },
            { t: "Sensor disc", d: "Best for measuring the flight: speed, spin and angles, and tracking those numbers over time." },
            { t: "Filming yourself", d: "Free and always useful, as long as you know which positions to check and in what order." },
            { t: "Disc Golf Form Analyzer", d: "Best for knowing what to fix on every throw you film: graded against a coach, the fix and a drill, plus 3D." },
          ]}
        />
      </Band>
      <section className="border-t border-line">
        <div className="wrap grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead label="FAQ" title="Questions" />
          <FaqList faqs={FAQS} />
        </div>
      </section>
      <FinalCta where="compare" />
    </>
  );
}
