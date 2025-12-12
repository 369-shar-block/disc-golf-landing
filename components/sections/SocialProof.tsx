'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';

export function SocialProof() {
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
            <GradientText gradient="success">Transform Your Game</GradientText>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            AI-powered coaching to help you improve your disc golf form.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
