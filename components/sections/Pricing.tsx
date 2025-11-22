'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';

export function Pricing() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-surface/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GradientText gradient="action">Honest Pricing</GradientText>, No Surprises
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Transparent costs. You're in control.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard hover={false} className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* App Download */}
              <div className="flex justify-between items-center pb-4 border-b border-glass-border">
                <div>
                  <h3 className="font-bold text-lg text-text-primary">App Download</h3>
                  <p className="text-sm text-text-secondary">iOS & Android</p>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent">
                  FREE
                </div>
              </div>

              {/* API Key */}
              <div className="flex justify-between items-center pb-4 border-b border-glass-border">
                <div>
                  <h3 className="font-bold text-lg text-text-primary">Gemini API Key</h3>
                  <p className="text-sm text-text-secondary">You provide (free tier available)</p>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                  $0
                </div>
              </div>

              {/* Per Analysis */}
              <div className="flex justify-between items-center pb-4">
                <div>
                  <h3 className="font-bold text-lg text-text-primary">Per Analysis</h3>
                  <p className="text-sm text-text-secondary">Actual cost you pay Google</p>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#c471f5] to-[#fa71cd] bg-clip-text text-transparent">
                  ~$0.01
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-surface/50 rounded-xl p-4 text-center">
                <p className="text-sm text-text-secondary mb-2">Compare to traditional coaching:</p>
                <p className="text-lg font-bold text-text-primary">
                  One private lesson ($100) ={' '}
                  <span className="bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent">
                    10,000+ AI analyses
                  </span>
                </p>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button variant="success" size="lg">
                  Start with Free Tier
                </Button>
                <p className="text-xs text-text-tertiary mt-2">
                  No credit card required. Pay only for what you use.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
