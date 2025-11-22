'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';

const steps = [
  {
    number: '1',
    icon: '🎬',
    title: 'Record Your Throw',
    description: 'Use any angle, the AI adapts. Just film with your phone.',
    gradient: 'success' as const,
  },
  {
    number: '2',
    icon: '🤖',
    title: 'AI Analyzes Every Frame',
    description: 'Gemini 3 Pro spots 30+ biomechanical markers in seconds.',
    gradient: 'action' as const,
  },
  {
    number: '3',
    icon: '🎯',
    title: 'Get Your Custom Drill',
    description: 'Specific fixes, not generic platitudes. Know exactly what to practice.',
    gradient: 'history' as const,
  },
];

export function Solution() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-surface/30">
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
            <GradientText gradient="action">Film. Upload. Improve.</GradientText> Repeat.
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Getting pro-level feedback has never been this simple.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-glass-border to-transparent -translate-y-1/2 z-0" />
              )}

              <GlassCard className="text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-bold text-xl shadow-action-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">
                  <GradientText gradient={step.gradient}>{step.title}</GradientText>
                </h3>

                {/* Description */}
                <p className="text-text-secondary">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Time Indicator */}
        <motion.p
          className="text-center mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="text-text-secondary">Total time: </span>
          <span className="font-bold bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent">
            Less than 60 seconds
          </span>
        </motion.p>
      </div>
    </section>
  );
}
