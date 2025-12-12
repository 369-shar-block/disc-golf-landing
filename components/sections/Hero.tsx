'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import { useEffect, useState } from 'react';

// Floating Disc Animation Component (like mobile app)
function FloatingDisc({ delay, duration, startX, startY }: {
  delay: number;
  duration: number;
  startX: number;
  startY: number;
}) {
  return (
    <motion.div
      className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] opacity-10 blur-sm"
      initial={{ x: startX, y: startY, rotate: 0 }}
      animate={{
        y: [startY, startY - 400, startY],
        x: [startX, startX + 50, startX],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export function Hero() {
  const [windowWidth, setWindowWidth] = useState(1200); // Default for SSR

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a24] to-[#0a0a0f]" />

      {/* Floating Discs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingDisc delay={0} duration={25} startX={100} startY={600} />
        <FloatingDisc delay={0.5} duration={30} startX={windowWidth - 100} startY={700} />
        <FloatingDisc delay={1} duration={35} startX={300} startY={650} />
        <FloatingDisc delay={1.5} duration={28} startX={windowWidth - 300} startY={600} />
        <FloatingDisc delay={2} duration={32} startX={windowWidth - 150} startY={680} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Rotating Hero Disc */}
        <motion.div
          className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-action-glow"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Throw Farther. <GradientText gradient="success">More Consistently.</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master your disc golf form with AI-powered coaching.{' '}
          <span className="text-text-primary font-semibold">Get instant feedback on every throw.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AppStoreButtons className="justify-center" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-b from-[#667eea] to-[#764ba2] rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
