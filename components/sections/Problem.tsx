'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';

const problems = [
  {
    icon: '💸',
    title: "Can't afford $100/hour private lessons",
    description: 'Professional coaching is expensive and not accessible to everyone.',
  },
  {
    icon: '📺',
    title: 'YouTube tips are too generic',
    description: "One-size-fits-all advice doesn't fix YOUR specific form issues.",
  },
  {
    icon: '🤔',
    title: 'Friends give conflicting advice',
    description: 'Everyone has an opinion, but who is actually right?',
  },
];

export function Problem() {
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
            Stuck in a <GradientText gradient="history">Form Plateau</GradientText>?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            You're not alone. Most disc golfers face these challenges:
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-text-primary">
                  {problem.title}
                </h3>
                <p className="text-text-secondary">{problem.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
