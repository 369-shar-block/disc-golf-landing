'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  const baseClasses = 'glass rounded-2xl p-6';

  if (!hover) {
    return <div className={cn(baseClasses, className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(baseClasses, className)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
