'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';

const testimonials = [
  {
    name: 'Alex M.',
    role: 'Competitive Player',
    text: "Better than my coach's notes. The AI spotted issues in my reach back that we'd been working on for months.",
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Recreational Enthusiast',
    text: 'Finally understood what I was doing wrong. The step-by-step fixes made all the difference.',
    rating: 5,
  },
  {
    name: 'Mike D.',
    role: 'Beginner',
    text: 'Went from noodle arm to consistent 300ft drives in 6 weeks. Game changer.',
    rating: 5,
  },
];

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
            Join <GradientText gradient="success">10,000+ Disc Golfers</GradientText>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See what players are saying about their improvement journey.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-secondary mb-4 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div>
                  <p className="font-bold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-tertiary">{testimonial.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div className="text-sm text-text-secondary">Throws Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2">
              4.8★
            </div>
            <div className="text-sm text-text-secondary">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#c471f5] to-[#fa71cd] bg-clip-text text-transparent mb-2">
              89%
            </div>
            <div className="text-sm text-text-secondary">Report Improvement</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
