'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  type: 'backhand' | 'forehand' | 'putt' | 'unknown';
  className?: string;
}

export function Badge({ type, className }: BadgeProps) {
  const badgeConfig = {
    backhand: {
      gradient: 'bg-gradient-to-r from-[#11998e] to-[#38ef7d]',
      label: 'BACKHAND',
    },
    forehand: {
      gradient: 'bg-gradient-to-r from-[#667eea] to-[#764ba2]',
      label: 'FOREHAND',
    },
    putt: {
      gradient: 'bg-gradient-to-r from-[#c471f5] to-[#fa71cd]',
      label: 'PUTT',
    },
    unknown: {
      gradient: 'bg-gradient-to-r from-[#6b6b80] to-[#4a4a60]',
      label: 'UNKNOWN',
    },
  };

  const config = badgeConfig[type];

  return (
    <div
      className={cn(
        'inline-block px-4 py-2 rounded-full text-white font-bold text-xs tracking-wider shadow-lg',
        config.gradient,
        className
      )}
    >
      {config.label}
    </div>
  );
}
