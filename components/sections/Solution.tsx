'use client';

import { motion } from 'framer-motion';
import { Icon, IconName } from '../ui/Icon';

const steps: { n: string; icon: IconName; title: string; description: string }[] = [
  {
    n: '01',
    icon: 'video',
    title: 'Record your throw',
    description: 'Film from any angle with your phone. No gimbal, no launch monitor, no special setup.',
  },
  {
    n: '02',
    icon: 'cpu',
    title: 'AI analyzes your form',
    description: 'A frame-by-frame breakdown of your mechanics, returned in about 60 seconds.',
  },
  {
    n: '03',
    icon: 'target',
    title: 'Get the fix and a drill',
    description: 'Exactly what to change and how to practice it. Specific corrections, not generic tips.',
  },
];

export function Solution() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-white/[0.015]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-[#38ef7d] uppercase mb-3">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            From throw to fix in three steps.
          </h2>
          <p className="text-lg text-text-secondary">
            Real coaching feedback, without the coach, the wait, or the hardware.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14] hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] text-[#38ef7d]">
                  <Icon name={step.icon} className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-white/25">{step.n}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Total time: <span className="font-semibold text-[#38ef7d]">under 60 seconds</span>
        </motion.p>
      </div>
    </section>
  );
}
