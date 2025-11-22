'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useState } from 'react';

const exampleAnalyses = {
  backhand: {
    throwType: 'backhand' as const,
    working: [
      'Good athletic stance with knees bent',
      'Strong brace with front foot at 90 degrees',
    ],
    issues: [
      'Rounding - disc too close to body during pull',
      'Early rotation - hips opening before reach back complete',
      'Weak follow-through - stopping motion too early',
    ],
    fix: [
      'Practice reach back drills keeping arm extended',
      'Focus on loading back leg before rotating',
      'Let momentum carry through after release',
    ],
    drill: 'Stand and Reach Drill: Practice reach back against a wall to feel proper extension.',
  },
  forehand: {
    throwType: 'forehand' as const,
    working: [
      'Elbow stays tucked close to body',
      'Good wrist position at release',
    ],
    issues: [
      'Nose angle too high - losing distance',
      'Off-axis torque - disc wobbling',
      'Weight shift incomplete - staying back',
    ],
    fix: [
      'Adjust grip to get nose down',
      'Keep wrist firm through entire motion',
      'Drive weight forward into plant foot',
    ],
    drill: 'One-Step Drill: Focus on clean release from stationary position before adding run-up.',
  },
};

export function AnalysisPreview() {
  const [selectedType, setSelectedType] = useState<'backhand' | 'forehand'>('backhand');
  const analysis = exampleAnalyses[selectedType];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-surface/30 to-transparent">
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
            Real Analysis from <GradientText gradient="success">Real Throws</GradientText>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            See the quality of feedback you'll get. Not vague tips—specific, actionable coaching.
          </p>

          {/* Throw Type Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSelectedType('backhand')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedType === 'backhand'
                  ? 'bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-white'
                  : 'bg-surface text-text-secondary hover:text-text-primary'
              }`}
            >
              Backhand Example
            </button>
            <button
              onClick={() => setSelectedType('forehand')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedType === 'forehand'
                  ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white'
                  : 'bg-surface text-text-secondary hover:text-text-primary'
              }`}
            >
              Forehand Example
            </button>
          </div>
        </motion.div>

        {/* Analysis Display */}
        <motion.div
          key={selectedType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Throw Type Badge */}
          <div className="flex justify-center">
            <Badge type={analysis.throwType} />
          </div>

          {/* What's Working */}
          <GlassCard hover={false} className="border-l-4 border-[#38ef7d]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#11998e] to-[#38ef7d] flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-text-primary">What's Working</h3>
                <ul className="space-y-2">
                  {analysis.working.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38ef7d] mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Main Issues */}
          <GlassCard hover={false} className="border-l-4 border-[#ff9800]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9800] to-[#ff5722] flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-text-primary">Main Issues</h3>
                <ul className="space-y-2">
                  {analysis.issues.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#ff9800] font-bold flex-shrink-0">{i + 1}.</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* The Fix */}
          <GlassCard hover={false} className="border-l-4 border-[#667eea]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-text-primary">The Fix</h3>
                <ul className="space-y-2">
                  {analysis.fix.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-surface flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-text-secondary pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Suggested Drill */}
          <GlassCard hover={false} className="border-l-4 border-[#c471f5]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#c471f5] to-[#fa71cd] flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-text-primary">Suggested Drill</h3>
                <p className="text-text-secondary">{analysis.drill}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          className="text-center mt-12 text-lg text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          This is what <span className="font-bold text-text-primary">every analysis</span> looks like.{' '}
          <span className="bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent font-bold">
            Clear. Actionable. Personalized.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
