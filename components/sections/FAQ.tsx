'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { useState } from 'react';
import { FAQS } from '@/lib/seo';

// Q&A is sourced from lib/seo.ts so the visible FAQ and the FAQPage JSON-LD
// schema (rendered in the layout) always stay identical.
const faqs = FAQS;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-[#38ef7d] uppercase mb-3">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Questions, answered.
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know before your first analysis.
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
              <GlassCard hover={false} className="cursor-pointer" onClick={() => {
                const isOpening = openIndex !== index;
                setOpenIndex(isOpening ? index : null);
                if (isOpening && typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('trackCustom', 'FAQClick', { question: faq.question });
                }
              }}>
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
