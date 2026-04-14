'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import { useEffect, useRef, useState } from 'react';

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

// Animated counter that counts up from 0 to target value
function AnimatedCounter({ to, decimals = 0, duration = 2 }: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, to, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
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

        {/* Social Proof Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Downloads */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <svg className="w-5 h-5 text-[#38ef7d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-white leading-none">
                <AnimatedCounter to={6} />
                k+
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Downloads</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-white leading-none">
                <AnimatedCounter to={4.9} decimals={1} />
              </div>
              <div className="text-xs text-text-secondary mt-0.5">App Rating</div>
            </div>
          </div>
        </motion.div>

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
