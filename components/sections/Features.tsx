'use client';

import { motion } from 'framer-motion';
import { Icon, IconName } from '../ui/Icon';

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'bolt',
    title: 'Instant AI breakdown',
    description: 'Upload a throw, get a full form analysis in about 60 seconds. No coach to book, no hardware to ship.',
  },
  {
    icon: 'cpu',
    title: 'Custom-trained for disc golf',
    description: 'Not a generic pose app. Trained on disc golf mechanics: reach-back, rounding, brace timing, weight transfer, follow-through.',
  },
  {
    icon: 'layers',
    title: 'Skeleton + ideal-form compare',
    description: 'See your throw as a skeleton lined up against ideal form, so you know exactly which positions to change.',
  },
  {
    icon: 'target',
    title: 'The fix, plus a drill',
    description: "Not 'compare yourself to a pro' and guess. You get what is wrong, how to fix it, and a targeted drill.",
  },
  {
    icon: 'disc',
    title: 'Backhand, forehand & putt',
    description: 'Auto-detects your throw type, so the analysis always uses the right reference.',
  },
  {
    icon: 'bag',
    title: 'AI Caddie built in',
    description: 'Log your discs into a bag, then get shot and disc recommendations for any hole. Nobody else bundles this.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-[#38ef7d] uppercase mb-3">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Everything a coach does. In one app.
          </h2>
          <p className="text-lg text-text-secondary">
            Analysis, comparison, drills, and a caddie, all built specifically for disc golf.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14] hover:bg-white/[0.03]"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] text-[#38ef7d] mb-5">
                <Icon name={feature.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
