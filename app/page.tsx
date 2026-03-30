import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Features } from '@/components/sections/Features';
import { AnalysisPreview } from '@/components/sections/AnalysisPreview';
import { SocialProof } from '@/components/sections/SocialProof';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { MetaPixelEvents } from '@/components/MetaPixelEvents';

export default function Home() {
  return (
    <>
      <MetaPixelEvents />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <AnalysisPreview />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
