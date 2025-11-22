import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disc Golf Form Analyzer - Your AI Coach",
  description: "Upload your throw. Get pro-level form analysis in 60 seconds. AI-powered disc golf coaching that spots 30+ biomechanical markers.",
  keywords: ["disc golf", "form analysis", "disc golf coach", "AI coaching", "disc golf training"],
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
      <body>{children}</body>
    </html>
  );
}
