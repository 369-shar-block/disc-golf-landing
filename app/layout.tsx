import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disc Golf Form Analyzer - Your AI Coach",
  description: "Upload your throw. Get pro-level form analysis in 60 seconds. AI-powered disc golf coaching that spots 30+ biomechanical markers.",
  keywords: ["disc golf", "form analysis", "disc golf coach", "AI coaching", "disc golf training"],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Disc Golf Form Analyzer - Your AI Coach",
    description: "Upload your throw. Get pro-level form analysis in 60 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
