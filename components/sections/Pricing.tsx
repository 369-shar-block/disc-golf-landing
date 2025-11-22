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
            <GradientText gradient="action">Simple Pricing</GradientText>, Unlimited Analyses
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            One price. Unlimited form analyses. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard hover={false} className="max-w-2xl mx-auto text-center">
            <div className="space-y-8">
              {/* Price */}
              <div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    $9.99
                  </span>
                  <span className="text-2xl text-text-secondary">/month</span>
                </div>
                <p className="text-text-tertiary">Billed monthly • Cancel anytime</p>
              </div>

              {/* Features */}
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#11998e] to-[#38ef7d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Unlimited Analyses</p>
                    <p className="text-sm text-text-secondary">Analyze as many throws as you want</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#11998e] to-[#38ef7d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">AI-Powered Feedback</p>
                    <p className="text-sm text-text-secondary">Google Gemini 3 Pro analysis</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#11998e] to-[#38ef7d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Analysis History</p>
                    <p className="text-sm text-text-secondary">Track your progress over time</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#11998e] to-[#38ef7d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Custom Drills</p>
                    <p className="text-sm text-text-secondary">Personalized training recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#11998e] to-[#38ef7d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">All Throw Types</p>
                    <p className="text-sm text-text-secondary">Backhand, forehand, and putting</p>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-surface/50 rounded-xl p-6">
                <p className="text-sm text-text-secondary mb-3">Compare to traditional coaching:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Private Lesson (1 hour)</span>
                    <span className="text-text-secondary line-through">$100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary font-bold">Unlimited AI Coaching</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent">
                      $9.99
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button variant="success" size="lg" className="w-full sm:w-auto">
                  Start Your Free Trial
                </Button>
                <p className="text-xs text-text-tertiary mt-3">
                  7-day free trial • No credit card required
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
