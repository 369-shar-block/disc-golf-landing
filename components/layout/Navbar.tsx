'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
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

        {/* CTA Button */}
        <Button variant="action" size="sm" href="/waitlist">
          Join Waitlist
        </Button>
      </div>
    </motion.nav>
  );
}
