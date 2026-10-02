import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY, SITE_URL, JsonLd, mobileAppSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MetaPixelEvents } from "@/components/MetaPixelEvents";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#080b11",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Disc Golf Form Analyzer: AI Form Analysis & 3D Throw Coach | DGFA",
    template: "%s | Disc Golf Form Analyzer",
  },
  description:
    "Film one throw on your phone. Get your disc golf form graded against a real coach, see the fault costing you distance and the drill that fixes it, and rebuild the throw in 3D. iOS and Android.",
  applicationName: "Disc Golf Form Analyzer",
  authors: [{ name: COMPANY }],
  creator: COMPANY,
  publisher: COMPANY,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", sizes: "1024x1024", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Disc Golf Form Analyzer",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: { "apple-itunes-app": "app-id=6755727208" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <JsonLd data={[organizationSchema, websiteSchema, mobileAppSchema]} />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://www.facebook.com/tr?id=1459941859097694&ev=PageView&noscript=1" />
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
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-900">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MetaPixelEvents />
      </body>
    </html>
  );
}
