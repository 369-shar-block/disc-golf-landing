// Single source of truth for site metadata, store links, ratings, FAQs, and
// JSON-LD schema. Imported by both the layout (schema/metadata) and the FAQ
// section so the app resolves as ONE consistent entity across the page +
// structured data (the playbook's "entity consistency" lever for AI/SEO).

export const SITE_URL = 'https://www.dgformanalyzer.com';

export const APP = {
  name: 'Disc Golf Form Analyzer',
  shortName: 'DGFA',
  tagline: 'AI Disc Golf Form Analysis',
  iosUrl: 'https://apps.apple.com/us/app/disc-golf-form-analyzer/id6755727208',
  androidUrl:
    'https://play.google.com/store/apps/details?id=com.axiomtrinitylabs.discgolfform',
  // Keep in sync with the App Store rating so JSON-LD never mismatches the store
  // (Google penalizes fabricated / mismatched aggregateRating).
  ratingValue: 4.2,
  ratingCount: 36,
  priceYearly: 39.99,
  currency: 'USD',
  markersDetected: 30,
} as const;

export type Faq = { question: string; answer: string };

// Answer-first, disc-golf-specific, and competitor-aware. Doubles as the source
// for FAQPage JSON-LD, so keep answers factual and self-contained.
export const FAQS: Faq[] = [
  {
    question: 'How does AI disc golf form analysis work?',
    answer:
      'Upload a phone video of your throw and the AI breaks your mechanics down frame by frame, then returns what is working, what is costing you distance, and the exact drill to fix it. You get the full breakdown in about 60 seconds.',
  },
  {
    question: 'Is the AI actually accurate for disc golf?',
    answer:
      'Yes. It is custom-trained on disc golf mechanics such as reach-back depth, rounding, brace timing, weight transfer, and follow-through. It is not a generic pose-detection tool repurposed from ball golf or fitness apps.',
  },
  {
    question: 'Do I need special equipment or a launch monitor?',
    answer:
      'No. Just your phone. There is no $300 sensor disc, no gimbal, and no wearables. Film a throw with any phone camera and upload it.',
  },
  {
    question: 'Does it analyze both backhand and forehand?',
    answer:
      'Yes. It analyzes backhand and forehand (and putting), and auto-detects the throw type so you do not have to pick. The detailed skeletal breakdown is tuned specifically for the backhand.',
  },
  {
    question: 'Can I compare my form to ideal, pro-level form?',
    answer:
      'Yes. Detailed analysis overlays your throw as a skeleton and lines it up against an ideal-form reference, so you can see exactly where your positions differ and what to change.',
  },
  {
    question: 'How fast do I get feedback?',
    answer:
      'About 60 seconds after you upload. No booking a coach, no waiting on a waitlist, no shipping hardware.',
  },
  {
    question: 'How much does it cost, and is there a free trial?',
    answer:
      'It is $39.99 per year with a free trial, a fraction of a single $100 private lesson. You can cancel anytime.',
  },
  {
    question: 'Is it available on iPhone and Android?',
    answer:
      'Yes. Disc Golf Form Analyzer is live today on both the App Store and Google Play. You can download it and analyze a throw in minutes.',
  },
];

// --- JSON-LD builders (rendered server-side in the layout <head>/<body>) -----

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Axiom Trinity Labs',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  brand: {
    '@type': 'Brand',
    name: APP.name,
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: APP.name,
  url: SITE_URL,
};

export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: APP.name,
  operatingSystem: 'iOS, Android',
  applicationCategory: 'SportsApplication',
  description:
    'AI disc golf form analysis. Upload a video of your throw and get an instant, pro-level breakdown with the exact fixes and drills to add distance and consistency.',
  url: SITE_URL,
  installUrl: APP.iosUrl,
  downloadUrl: APP.iosUrl,
  offers: {
    '@type': 'Offer',
    price: APP.priceYearly.toFixed(2),
    priceCurrency: APP.currency,
    description: 'Annual subscription with a free trial. Cancel anytime.',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: APP.ratingValue.toString(),
    ratingCount: APP.ratingCount.toString(),
    bestRating: '5',
    worstRating: '1',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
