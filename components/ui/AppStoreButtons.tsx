'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AppStoreButtonsProps {
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export function AppStoreButtons({
  layout = 'horizontal',
  className,
}: AppStoreButtonsProps) {
  const containerClasses = cn(
    'flex gap-4',
    layout === 'vertical' ? 'flex-col' : 'flex-col sm:flex-row',
    className
  );

  // Placeholder link - replace with actual App Store URL later
  const iosLink = '#';

  return (
    <div className={containerClasses}>
      {/* iOS Button */}
      <motion.a
        href={iosLink}
        className="flex items-center justify-center gap-3 px-6 py-3 bg-black border border-glass-border rounded-xl hover:border-[#667eea] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="text-left">
          <div className="text-xs text-text-secondary">Coming Soon on the</div>
          <div className="text-lg font-semibold text-white">App Store</div>
        </div>
      </motion.a>

      {/* iOS Only Badge */}
      <div className="flex items-center justify-center text-sm text-text-tertiary">
        <span>Available on iPhone</span>
      </div>
    </div>
  );
}
