'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';

const features = [
  {
    icon: '🔍',
    title: 'Auto-Detects Throw Type',
    description: 'Backhand, forehand, putt—no manual selection needed.',
    gradient: 'success' as const,
  },
  {
    icon: '✅',
    title: "What's Working",
    description: 'Start with positives. Build confidence before corrections.',
    gradient: 'success' as const,
  },
  {
    icon: '⚙️',
    title: 'Biomechanical KPIs',
    description: 'Footwork, reach back, power pocket—detailed analysis.',
    gradient: 'action' as const,
  },
  {
    icon: '⏱️',
    title: 'Timestamped Issues',
    description: 'Jump to exact frame of errors. No guesswork.',
    gradient: 'history' as const,
  },
  {
    icon: '📝',
    title: 'Step-by-Step Fixes',
    description: "Not 'do better'—actual biomechanical corrections.",
    gradient: 'action' as const,
  },
  {
    icon: '🛠️',
    title: 'Focused Drills',
    description: 'One targeted drill to fix your biggest issue.',
    gradient: 'history' as const,
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 relative">
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
            More Than Just <GradientText gradient="action">Video Analysis</GradientText>
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
