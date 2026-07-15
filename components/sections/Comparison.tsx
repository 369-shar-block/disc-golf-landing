'use client';

import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { Icon } from '../ui/Icon';

type Cell = { v: 'yes' | 'no' | 'partial'; note?: string };

const columns = ['Other AI form apps', '$299 launch monitors', 'Private coach'] as const;

const rows: { label: string; dgfa: Cell; others: [Cell, Cell, Cell] }[] = [
  {
    label: 'Live on iOS & Android today',
    dgfa: { v: 'yes', note: 'Download now' },
    others: [{ v: 'partial', note: 'Often waitlist / web only' }, { v: 'yes', note: 'Needs hardware' }, { v: 'yes', note: 'Needs booking' }],
  },
  {
    label: 'Instant feedback (~60 seconds)',
    dgfa: { v: 'yes' },
    others: [{ v: 'partial' }, { v: 'yes', note: 'Metrics only' }, { v: 'no', note: 'Hours to days' }],
  },
  {
    label: 'Tells you the fix + a drill',
    dgfa: { v: 'yes' },
    others: [{ v: 'partial', note: 'Compare-to-pro only' }, { v: 'no', note: 'Raw numbers' }, { v: 'yes' }],
  },
  {
    label: 'Custom-trained for disc golf',
    dgfa: { v: 'yes' },
    others: [{ v: 'partial' }, { v: 'yes' }, { v: 'yes' }],
  },
  {
    label: 'No hardware or sensor disc',
    dgfa: { v: 'yes', note: 'Phone only' },
    others: [{ v: 'yes' }, { v: 'no', note: '$299 disc' }, { v: 'yes' }],
  },
  {
    label: 'Skeleton overlay + ideal-form compare',
    dgfa: { v: 'yes' },
    others: [{ v: 'partial' }, { v: 'no' }, { v: 'no' }],
  },
  {
    label: 'AI Caddie: bag + hole advice',
    dgfa: { v: 'yes' },
    others: [{ v: 'no' }, { v: 'no' }, { v: 'no' }],
  },
];

function Mark({ cell, strong = false }: { cell: Cell; strong?: boolean }) {
  const icon =
    cell.v === 'yes' ? (
      <Icon name="check" className={`w-5 h-5 ${strong ? 'text-[#38ef7d]' : 'text-[#38ef7d]/80'}`} />
    ) : cell.v === 'no' ? (
      <Icon name="x" className="w-4 h-4 text-white/25" />
    ) : (
      <Icon name="minus" className="w-4 h-4 text-[#ffb020]" />
    );
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      {icon}
      {cell.note && <span className="text-[10px] leading-tight text-text-tertiary">{cell.note}</span>}
    </div>
  );
}

export function Comparison() {
  return (
    <section id="compare" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why golfers pick <GradientText gradient="success">Disc Golf Form Analyzer</GradientText>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Instant, disc-golf-specific coaching that tells you what to fix, on the phone in your pocket right now, not a waitlist.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto -mx-6 px-6 pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="min-w-[640px]">
            {/* Header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-2 items-end mb-2">
              <div />
              <div className="relative rounded-t-2xl bg-gradient-to-b from-[#38ef7d]/15 to-transparent border-x border-t border-[#38ef7d]/30 px-3 pt-4 pb-3 text-center">
                <div className="text-sm font-bold text-white leading-tight">DGFA</div>
                <div className="text-[11px] text-[#38ef7d] font-medium">Disc Golf Form Analyzer</div>
              </div>
              {columns.map((c) => (
                <div key={c} className="px-2 pb-3 text-center text-xs font-semibold text-text-tertiary">
                  {c}
                </div>
              ))}
            </div>

            {/* Rows */}
            <div className="rounded-2xl overflow-hidden border border-white/5">
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-2 items-center ${
                    i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                  }`}
                >
                  <div className="px-4 py-4 text-sm text-text-secondary">{row.label}</div>
                  <div className="px-2 py-4 h-full bg-gradient-to-b from-[#38ef7d]/[0.06] to-[#38ef7d]/[0.03] border-x border-[#38ef7d]/20">
                    <Mark cell={row.dgfa} strong />
                  </div>
                  {row.others.map((cell, j) => (
                    <div key={j} className="px-2 py-4">
                      <Mark cell={cell} />
                    </div>
                  ))}
                </div>
              ))}
              {/* Price footer row */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-2 items-center border-t border-white/5 bg-white/[0.02]">
                <div className="px-4 py-4 text-sm font-semibold text-text-primary">Cost</div>
                <div className="px-2 py-4 h-full bg-gradient-to-b from-[#38ef7d]/[0.06] to-[#38ef7d]/[0.03] border-x border-[#38ef7d]/20 text-center">
                  <div className="text-sm font-bold text-white">$39.99/yr</div>
                  <div className="text-[10px] text-[#38ef7d]">Free trial</div>
                </div>
                <div className="px-2 py-4 text-center text-xs text-text-tertiary">Varies</div>
                <div className="px-2 py-4 text-center text-xs text-text-tertiary">$299+ hardware</div>
                <div className="px-2 py-4 text-center text-xs text-text-tertiary">$80–150 / hour</div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-text-tertiary mt-4">
          Comparison reflects common alternatives in the disc golf coaching space. ✓ full · ~ partial · ✕ not offered.
        </p>
      </div>
    </section>
  );
}
