// Single source of truth for facts, links, FAQs and JSON-LD. Every page, the FAQ UI and the
// structured data read from here, so the app resolves as ONE consistent entity for Google and
// AI assistants ("entity consistency"). Change a number here and it changes everywhere.
//
// Every number must be real. Sources (2026-10-02):
//  - rating / count: itunes.apple.com/lookup?id=6755727208 (4.31 avg, 52 ratings)
//  - accounts / throws analyzed: production Supabase (15,017 accounts, 17,002 analyses)
//  - faults: data/faultLibrary.js in the app repo (10 backhand + 10 forehand, coach-authored)

export const SITE_URL = "https://www.dgformanalyzer.com";
export const COMPANY = "Axiom Trinity Labs, LLC"; // must match App Store Connect / Play Console
export const SUPPORT_EMAIL = "support@axiomtrinitylabs.com";

// Blog byline. Keep the bio to verifiable facts; never invent playing or coaching credentials.
export const AUTHOR = {
  name: "Tushar Saini",
  role: "Founder, Disc Golf Form Analyzer",
  bio: "Tushar Saini is the founder of Disc Golf Form Analyzer and Axiom Trinity Labs, LLC. He builds the app's form analysis, pose estimation and 3D Throw features, and writes these guides with the app's coaching material.",
} as const;

export const APP = {
  name: "Disc Golf Form Analyzer",
  shortName: "DGFA",
  iosUrl: "https://apps.apple.com/us/app/disc-golf-form-analyzer/id6755727208",
  androidUrl: "https://play.google.com/store/apps/details?id=com.axiomtrinitylabs.discgolfform",
  ratingValue: 4.3,
  ratingCount: 52,
  priceYearly: 39.99,
  trialDays: 3,
  currency: "USD",
  accounts: "15,000+",
  throwsAnalyzed: "17,000+",
  faults: 20,
} as const;

export const NAV = [
  { href: "/features/pose-estimation", label: "Pose Estimation" },
  { href: "/features/3d-throw", label: "3D Throw" },
  { href: "/features/ai-analysis", label: "AI Analysis" },
  { href: "/features/caddie", label: "Caddie" },
  { href: "/blog", label: "Guides" },
] as const;

export type Faq = { question: string; answer: string };

// Answer-first and factual: these also feed FAQPage JSON-LD, which AI assistants read.
export const FAQS: Faq[] = [
  {
    question: "How does Disc Golf Form Analyzer work?",
    answer:
      "Film one throw with your phone and upload it. The app tracks your body frame by frame, grades your form against a real coach's ideal backhand or forehand, and tells you the main fault, why it costs you distance, and the drill that fixes it. You can also rebuild the throw as a 3D body and view it from any angle.",
  },
  {
    question: "Do I need any equipment besides my phone?",
    answer:
      "No. There is no sensor disc, no wearable and no tripod requirement. Any phone camera works. A steady phone and your whole body in frame give the best results.",
  },
  {
    question: "Does it work for backhand and forehand?",
    answer:
      "Yes. Pose Estimation grades both backhand and forehand against a coach's ideal form, using 20 coach-defined faults (10 per throw). AI Analysis also covers putts.",
  },
  {
    question: "What is 3D Throw?",
    answer:
      "3D Throw turns a video of your throw into a 3D body you can spin, zoom, slow down to quarter speed and compare side by side with another throw. On iPhone you can also place it life-size in augmented reality.",
  },
  {
    question: "Which camera angle should I film from?",
    answer:
      "Side-on is the most informative, but behind and in front also work. The app only grades the faults that the filmed angle can actually show, so you never get feedback the camera could not see.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It is $39.99 per year after a 3-day free trial. That is less than a single private lesson. You can cancel anytime from your App Store or Google Play subscription settings.",
  },
  {
    question: "Is it on iPhone and Android?",
    answer:
      "Yes. Disc Golf Form Analyzer is live on the App Store and Google Play. Augmented reality in 3D Throw is iPhone-only for now.",
  },
  {
    question: "How is this different from TechDisc or a launch monitor?",
    answer:
      "A sensor disc measures what the disc does (speed, spin, angles). Disc Golf Form Analyzer looks at what your body does, which is where the fix usually is: reach-back, hips, weight shift, timing. It also needs no hardware.",
  },
];

// ---------------------------------------------------------------- JSON-LD

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const APP_ID = `${SITE_URL}/#app`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: COMPANY,
  legalName: COMPANY,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: SUPPORT_EMAIL,
  brand: { "@type": "Brand", name: APP.name },
  sameAs: [APP.iosUrl, APP.androidUrl],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: APP.name,
  alternateName: APP.shortName,
  url: SITE_URL,
  publisher: { "@id": ORGANIZATION_ID },
};

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": APP_ID,
  name: APP.name,
  alternateName: APP.shortName,
  operatingSystem: "iOS, Android",
  applicationCategory: "SportsApplication",
  description:
    "Disc golf form analysis on your phone. Film a throw to get it graded against a coach's ideal backhand or forehand, see the main fault and the drill that fixes it, and rebuild the throw in 3D.",
  featureList: [
    "Pose estimation graded against a coach's ideal form (backhand and forehand, 20 faults)",
    "AI analysis of what is working, the main issue, the fix and a drill",
    "3D Throw: view a throw as a 3D body from any angle, slow motion, side-by-side compare, AR on iPhone",
    "DGFA Coach chat",
    "DGFA Caddie: disc bag manager and hole-by-hole disc recommendations",
  ],
  url: SITE_URL,
  installUrl: APP.iosUrl,
  downloadUrl: [APP.iosUrl, APP.androidUrl],
  publisher: { "@id": ORGANIZATION_ID },
  author: { "@id": ORGANIZATION_ID },
  offers: {
    "@type": "Offer",
    price: APP.priceYearly.toFixed(2),
    priceCurrency: APP.currency,
    description: `Annual subscription after a ${APP.trialDays}-day free trial. Cancel anytime.`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: APP.ratingValue.toString(),
    ratingCount: APP.ratingCount.toString(),
    bestRating: "5",
    worstRating: "1",
  },
};

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
