'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';

const features = [
  {
    icon: '⚡',
    title: 'Instant AI breakdown',
    description: 'Upload a throw, get a full form analysis in about 60 seconds. No coach to book, no hardware to ship.',
    gradient: 'success' as const,
  },
  {
    icon: '🧠',
    title: 'Custom-trained for disc golf',
    description: 'Not a generic pose app. Trained on disc golf mechanics: reach-back, rounding, brace timing, weight transfer, follow-through.',
    gradient: 'action' as const,
  },
  {
    icon: '📐',
    title: 'Skeleton overlay + ideal-form compare',
    description: 'See your throw as a skeleton lined up against ideal form, so you know exactly which positions to change.',
    gradient: 'action' as const,
  },
  {
    icon: '🎯',
    title: 'The fix, plus a drill',
    description: "Not 'compare yourself to a pro' and guess. You get what's wrong, how to fix it, and a targeted drill to practice.",
    gradient: 'history' as const,
  },
  {
    icon: '🥏',
    title: 'Backhand, forehand & putt',
    description: 'Auto-detects your throw type. No manual selection, no wrong reference frame.',
    gradient: 'success' as const,
  },
  {
    icon: '🎒',
    title: 'AI Caddie built in',
    description: 'Snap your discs into a bag, then get shot and disc recommendations for any hole. Nobody else bundles this.',
    gradient: 'history' as const,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything a coach does. <GradientText gradient="action">In one app.</GradientText>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            AI-powered features that give you the edge over your competition.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br ${
                  feature.gradient === 'success' ? 'from-[#11998e] to-[#38ef7d]' :
                  feature.gradient === 'action' ? 'from-[#667eea] to-[#764ba2]' :
                  'from-[#c471f5] to-[#fa71cd]'
                }`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-text-primary">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
