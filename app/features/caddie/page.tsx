import type { Metadata } from "next";
import { FeaturePage, Band, Points } from "@/components/site/FeaturePage";

export const metadata: Metadata = {
  title: "DGFA Caddie: Disc Golf Bag Manager & Hole-by-Hole Disc Picks",
  description:
    "Add discs from a photo with their flight numbers, then snap a hole and get a disc and shot recommendation picked only from the discs in your bag. Part of Disc Golf Form Analyzer.",
  alternates: { canonical: "/features/caddie" },
  openGraph: { title: "DGFA Caddie: your disc golf bag with a caddie", url: "/features/caddie" },
};

const FAQS = [
  {
    question: "How do I add discs to my bag?",
    answer:
      "Take a photo of the disc. The app reads the brand, mold and flight numbers (speed, glide, turn and fade) and fills them in for you to review. You can also add discs by hand.",
  },
  {
    question: "How does the hole recommendation work?",
    answer:
      "Take a photo from the tee and add the distance, wind and the shot shape you want. The caddie reads the trees, ceiling, dogleg and elevation from the photo and recommends a primary disc and shot plus an alternative, only from discs in your bag.",
  },
  {
    question: "Does it save my recommendations?",
    answer: "Yes. Every recommendation is saved under Recent picks so you can revisit it on your next round.",
  },
];

export default function Page() {
  return (
    <FeaturePage
      slug="caddie"
      label="DGFA Caddie"
      shot="caddie-bag"
      title={<>Your bag, <span className="text-gradient">with a caddie.</span></>}
      intro="Keep your whole bag in one place with flight numbers at a glance, then snap any hole and get a disc and a shot picked only from the discs you actually carry."
      faqs={FAQS}
      ctaTitle="Put your bag to work."
    >
      <Band index="01" label="Bag manager" title={<>Every disc, <span className="text-gradient">one place.</span></>}>
        <Points
          items={[
            { t: "Add from a photo", d: "The app reads brand, mold and flight numbers from a picture of the disc." },
            { t: "Flight numbers at a glance", d: "Speed, glide, turn and fade for every disc, filtered by putters, mids, fairways and drivers." },
          ]}
        />
      </Band>
      <Band index="02" label="Hole advisor" title={<>Snap the hole. <span className="text-gradient">Get the shot.</span></>}>
        <p>
          Photograph the hole from the tee and the caddie reads the obstacles, ceiling, dogleg and elevation, then fills in the conditions for
          you to confirm. Add distance, wind and the shape you want, and get a primary disc and shot plus an alternative.
        </p>
        <p>Every pick comes from your own bag, so the advice is something you can actually throw.</p>
      </Band>
    </FeaturePage>
  );
}
