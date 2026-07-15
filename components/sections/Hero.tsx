'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import { useEffect, useRef, useState } from 'react';

// Subtle floating disc in the background
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
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  );
}

function AnimatedCounter({ to, decimals = 0, duration = 1.6 }: {
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

// A polished phone mock showing what an actual analysis looks like — the real
// product, not an abstract disc. This is the differentiator vs. "compare to a pro".
function PhoneMock() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* glow */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#667eea]/25 to-[#38ef7d]/20 blur-[60px] rounded-full" />
      <div className="relative rounded-[2.2rem] border border-white/10 bg-[#0d0d14] p-3 shadow-2xl">
        <div className="rounded-[1.7rem] bg-gradient-to-b from-[#15151f] to-[#0a0a0f] p-4 overflow-hidden">
          {/* header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[11px] text-text-tertiary">Your throw</div>
              <div className="text-sm font-bold text-white">Backhand breakdown</div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-[#38ef7d]/15 text-[#38ef7d] border border-[#38ef7d]/30">
              RHBH
            </span>
          </div>

          {/* what's working */}
          <div className="rounded-xl border-l-2 border-[#38ef7d] bg-white/[0.03] p-3 mb-2.5">
            <div className="text-[11px] font-bold text-[#38ef7d] mb-1">✓ What&apos;s working</div>
            <div className="text-[11px] text-text-secondary leading-snug">Strong brace, front foot planted at 90°.</div>
          </div>

          {/* main issue */}
          <div className="rounded-xl border-l-2 border-[#ff9800] bg-white/[0.03] p-3 mb-2.5">
            <div className="text-[11px] font-bold text-[#ff9800] mb-1">! Main issue</div>
            <div className="text-[11px] text-text-secondary leading-snug">Rounding — disc pulled too close to your chest.</div>
          </div>

          {/* the fix */}
          <div className="rounded-xl border-l-2 border-[#667eea] bg-white/[0.03] p-3 mb-3">
            <div className="text-[11px] font-bold text-[#8b9dff] mb-1">→ The fix + drill</div>
            <div className="text-[11px] text-text-secondary leading-snug">Wall reach-back drill: keep the arm extended through the pull.</div>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] text-text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38ef7d] animate-pulse" />
            Analyzed in 58s
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121b] to-[#0a0a0f]" />
      <div className="absolute inset-0 pointer-events-none">
        <FloatingDisc delay={0} duration={26} startX={80} startY={620} />
        <FloatingDisc delay={0.8} duration={32} startX={windowWidth - 120} startY={700} />
        <FloatingDisc delay={1.6} duration={30} startX={windowWidth - 260} startY={600} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Availability badge — the wedge vs. waitlist competitors */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38ef7d]/10 border border-[#38ef7d]/25 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#38ef7d] animate-pulse" />
              <span className="text-sm font-semibold text-[#38ef7d]">Live now on iOS &amp; Android</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Fix your disc golf form. <GradientText gradient="success">Throw farther.</GradientText>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-text-primary font-semibold">AI disc golf form analysis in 60 seconds.</span>{' '}
              Upload a throw and get the exact fixes and drills to add distance and consistency. No hardware. No waitlist.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AppStoreButtons className="justify-center lg:justify-start" />
            </motion.div>

            {/* Trust row — real, verifiable numbers */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm text-text-secondary">
                  <span className="font-bold text-white"><AnimatedCounter to={4.2} decimals={1} /></span> App Store rating
                </span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="text-sm text-text-secondary">
                <span className="font-bold text-white"><AnimatedCounter to={7900} /></span>+ throws analyzed
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="text-sm text-text-secondary">
                <span className="font-bold text-white">Custom-trained</span> for disc golf
              </div>
            </motion.div>
          </div>

          {/* Right: product mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <PhoneMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
