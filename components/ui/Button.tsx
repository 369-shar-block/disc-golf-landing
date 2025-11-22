'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'success' | 'action' | 'history' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'action',
  size = 'md',
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseClasses = 'font-bold rounded-full transition-all duration-300 cursor-pointer inline-block text-center';

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variantClasses = {
    success: 'bg-gradient-to-r from-[#11998e] to-[#38ef7d] shadow-success-glow hover:scale-105 text-white',
    action: 'bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-action-glow hover:scale-105 text-white',
    history: 'bg-gradient-to-r from-[#c471f5] to-[#fa71cd] shadow-history-glow hover:scale-105 text-white',
    outline: 'border-2 border-glass-border hover:border-[#667eea] bg-transparent text-text-primary hover:bg-surface',
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
