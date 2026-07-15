'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { APP } from '@/lib/seo';

const stats = [
  { value: `${APP.ratingValue.toFixed(1)}★`, label: 'App Store rating' },
  { value: '7,900+', label: 'Throws analyzed' },
  { value: '2,000+', label: 'Golfers improving' },
  { value: '~60s', label: 'Per analysis' },
];

// Real reviews only. Paste verbatim App Store / Play Store reviews here
// (name optional, keep it truthful). The testimonial block renders only when
// this array has entries, so the page never shows empty or fabricated quotes.
const testimonials: { text: string; name: string }[] = [
  // { text: 'Fixed my rounding in a week. Gained real distance.', name: 'App Store review' },
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real golfers. <GradientText gradient="success">Real reps.</GradientText>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Live on the App Store and Google Play, analyzing thousands of throws for disc golfers who are done guessing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {testimonials.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {testimonials.map((t, i) => (
              <GlassCard key={i} hover={false} className="h-full">
                <div className="text-[#fbbf24] mb-2">★★★★★</div>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
                <p className="text-text-tertiary text-xs font-medium">{t.name}</p>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
