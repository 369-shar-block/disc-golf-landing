'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  gradient?: 'success' | 'action' | 'history';
  className?: string;
}

export function GradientText({
  children,
  gradient = 'action',
  className,
}: GradientTextProps) {
  const gradientClasses = {
    success: 'bg-gradient-to-r from-[#11998e] to-[#38ef7d]',
    action: 'bg-gradient-to-r from-[#667eea] to-[#764ba2]',
    history: 'bg-gradient-to-r from-[#c471f5] to-[#fa71cd]',
  };

  return (
    <span
      className={cn(
        'bg-clip-text text-transparent font-bold',
        gradientClasses[gradient],
        className
      )}
    >
      {children}
    </span>
  );
}
