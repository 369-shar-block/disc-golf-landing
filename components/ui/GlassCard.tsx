'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, hover = true, onClick }: GlassCardProps) {
  const baseClasses = 'glass rounded-2xl p-6';

  if (!hover) {
    return <div className={cn(baseClasses, className)} onClick={onClick}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(baseClasses, className)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
