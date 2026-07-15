'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#38ef7d]/15 to-[#11998e]/15 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Film a throw. Fix your form.{' '}
            <GradientText gradient="success">Today.</GradientText>
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Start a free trial and get your first AI form breakdown in 60 seconds. Live now on iOS and Android.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AppStoreButtons className="justify-center" />
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-text-tertiary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[#11998e]">✓</span>
            <span>Free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#667eea]">✓</span>
            <span>No hardware needed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#c471f5]">✓</span>
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
