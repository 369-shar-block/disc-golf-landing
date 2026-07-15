import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import {
  SITE_URL,
  organizationSchema,
  websiteSchema,
  mobileAppSchema,
  faqSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Disc Golf Form Analyzer & Coaching App | DGFA",
    template: "%s | Disc Golf Form Analyzer",
  },
  description:
    "Upload a video of your throw and get instant AI form analysis in 60 seconds. Fix your disc golf backhand & forehand, add distance. On iOS & Android. Try free.",
  keywords: [
    "disc golf",
    "disc golf form analyzer",
    "disc golf coach",
    "disc golf coaching app",
    "AI disc golf coach",
    "disc golf technique",
    "improve disc golf form",
    "backhand",
    "forehand",
    "disc golf training app",
  ],
  applicationName: "Disc Golf Form Analyzer",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AI Disc Golf Form Analyzer & Coaching App",
    description:
      "Upload your throw. Get a pro-level AI form breakdown in 60 seconds, with the exact fixes and drills. Live on iOS & Android.",
    url: SITE_URL,
    siteName: "Disc Golf Form Analyzer",
    type: "website",
    images: [{ url: "/icon.png", width: 1024, height: 1024, alt: "Disc Golf Form Analyzer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Disc Golf Form Analyzer & Coaching App",
    description:
      "Upload your throw. Get a pro-level AI form breakdown in 60 seconds. Live on iOS & Android.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const schemas = [organizationSchema, websiteSchema, mobileAppSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured data — server-rendered so Google + AI crawlers read it in raw HTML */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1459941859097694&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1459941859097694');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
