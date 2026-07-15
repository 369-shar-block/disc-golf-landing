'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { APP } from '@/lib/seo';

const stats = [
  { value: `${APP.ratingValue.toFixed(1)}★`, label: 'App Store rating' },
  { value: '7,900+', label: 'Throws analyzed' },
  { value: '2,000+', label: 'Golfers improving' },
  { value: '~60s', label: 'Per analysis' },
];

// Real, verbatim 5-star reviews pulled from the App Store public reviews feed
// (id 6755727208). Attributed to the reviewer's public handle. Trims are marked
// with an ellipsis and never change meaning. Renders only when non-empty.
const testimonials: { title: string; text: string; name: string }[] = [
  {
    title: 'Solid way to improve form',
    text: 'This makes form work super accessible and allows you to get instant feedback. Way more productive than trying to figure it out yourself and way cheaper than a coach.',
    name: 'PC2k18',
  },
  {
    title: 'Best Analyzer',
    text: 'I struggle with lots of issues on my form and the first analysis this app gave me was better than all the feedback I have gotten on social media.',
    name: 'ThomasCharles_12',
  },
  {
    title: 'Best App for Disc Golf',
    text: 'This app completely transformed my throw. The improvement was immediate and very noticeable… the yearly subscription is soo economical and better than any real life coaching sessions which cost hundreds.',
    name: 'Biba1478',
  },
  {
    title: 'Definitely worth it',
    text: 'This app made me realize there was a lot of issues with my form and helped me correct them. This not only made my game better but also added distance and control.',
    name: 'Evan M.',
  },
  {
    title: 'Very Helpful',
    text: 'It’s one thing to tell you how your form is wrong, but to actually tell you how to fix it and provide drills to learn is amazing! Definitely recommend.',
    name: 'Aaron Hage',
  },
  {
    title: 'Helped me a lot',
    text: 'I really like that this app gives you instant feedback after uploading a video, rather than me having to post it somewhere and hope for feedback days later that may not even be accurate.',
    name: 'Mac smack',
  },
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real golfers. <GradientText gradient="success">Real reps.</GradientText>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Live on the App Store and Google Play, analyzing thousands of throws for disc golfers who are done guessing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {testimonials.length > 0 && (
          <>
            <p className="text-center text-sm text-text-tertiary mt-14 mb-6">
              Straight from the App Store
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <GlassCard key={i} hover={false} className="h-full flex flex-col">
                  <div className="text-[#fbbf24] mb-2 text-sm tracking-wide">★★★★★</div>
                  <p className="font-bold text-text-primary text-sm mb-1.5">{t.title}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-text-tertiary text-xs font-medium">{t.name} · App Store</p>
                </GlassCard>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
