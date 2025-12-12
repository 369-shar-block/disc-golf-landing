'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need a gimbal or fancy camera?',
    answer: 'No! Your phone camera works perfectly. The AI adapts to any angle and video quality.',
  },
  {
    question: "What if I don't know what throw type I'm doing?",
    answer: "The AI auto-detects whether you're throwing backhand, forehand, or putting. No manual selection needed.",
  },
  {
    question: 'How accurate is the AI?',
    answer: 'Powered by Google Gemini 3 Pro, trained on thousands of disc golf videos. It analyzes 30+ biomechanical markers with professional-level accuracy.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! Cancel anytime with one tap in the app. No commitments, no cancellation fees.',
  },
  {
    question: 'What about my privacy?',
    answer: "Your videos are only used for analysis and not stored on our servers. Everything stays on your device and Google's secure AI API.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GradientText gradient="history">Frequently Asked</GradientText> Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <GlassCard hover={false} className="cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-lg text-text-primary flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-text-secondary"
                  >
                    ↓
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-text-secondary mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
