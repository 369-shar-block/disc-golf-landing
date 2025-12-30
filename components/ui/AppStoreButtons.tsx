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

  // App Store link
  const iosLink = 'https://apps.apple.com/us/app/disc-golf-form-analyzer/id6755727208';

  return (
    <div className={containerClasses}>
      {/* iOS App Store Button */}
      <motion.a
        href={iosLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-br from-black to-[#1a1a24] border-2 border-[#667eea]/50 rounded-xl hover:border-[#667eea] transition-all shadow-action-glow/50 hover:shadow-action-glow overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <svg className="w-8 h-8 relative z-10" viewBox="0 0 24 24" fill="white">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="text-left relative z-10">
          <div className="text-xs text-text-secondary font-medium">Download on the</div>
          <div className="text-lg font-bold text-white">
            App Store
          </div>
        </div>
      </motion.a>

      {/* Now Available Badge */}
      <motion.div
        className="flex items-center justify-center gap-2 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-success rounded-full text-white font-semibold text-xs shadow-success-glow">
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
          Now Available on iPhone
        </span>
      </motion.div>
    </div>
  );
}
