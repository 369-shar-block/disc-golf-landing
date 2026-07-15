'use client';

import { motion } from 'framer-motion';
import { Icon, IconName } from '../ui/Icon';

const problems: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'card',
    title: 'Coaching costs $100+ an hour',
    description: 'Private lessons are expensive, hard to book, and gone the moment the session ends.',
  },
  {
    icon: 'video',
    title: 'YouTube tips stay generic',
    description: "One-size-fits-all advice never tells you what is actually wrong with your throw.",
  },
  {
    icon: 'chat',
    title: 'Everyone gives different advice',
    description: 'Your card mates all have an opinion. None of them can see your form frame by frame.',
  },
];

export function Problem() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-[#38ef7d] uppercase mb-3">
            The problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Practicing more isn&apos;t fixing your form.
          </h2>
          <p className="text-lg text-text-secondary">
            Most disc golfers plateau for the same three reasons.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14] hover:bg-white/[0.03]"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] text-[#38ef7d] mb-5">
                <Icon name={problem.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
