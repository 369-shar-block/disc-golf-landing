'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-xl">🥏</span>
          </div>
          <span className="font-bold text-xl text-text-primary hidden sm:block">
            Disc Golf Form Analyzer
          </span>
        </a>

        {/* Store Icons */}
        <div className="flex items-center gap-3">
          {/* App Store */}
          <a
            href="https://apps.apple.com/us/app/disc-golf-form-analyzer/id6755727208"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-black to-[#1a1a24] border border-[#667eea]/50 flex items-center justify-center hover:border-[#667eea] hover:scale-110 transition-all"
            aria-label="Download on App Store"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
          </a>
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.axiomtrinitylabs.discgolfform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-black to-[#1a1a24] border border-[#667eea]/50 flex items-center justify-center hover:border-[#667eea] hover:scale-110 transition-all"
            aria-label="Get it on Google Play"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
