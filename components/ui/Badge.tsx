'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  type: 'backhand' | 'forehand' | 'putt' | 'unknown';
  className?: string;
}

const labels: Record<BadgeProps['type'], string> = {
  backhand: 'BACKHAND',
  forehand: 'FOREHAND',
  putt: 'PUTT',
  unknown: 'UNKNOWN',
};

export function Badge({ type, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-block px-3 py-1.5 rounded-full border border-[#38ef7d]/30 bg-[#38ef7d]/10 text-[#38ef7d] font-semibold text-[11px] tracking-[0.15em]',
        className
      )}
    >
      {labels[type]}
    </div>
  );
}
