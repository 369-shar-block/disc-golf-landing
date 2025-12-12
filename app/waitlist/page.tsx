'use client';

import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Floating Disc Animation Component
function FloatingDisc({ delay, duration, startX, startY }: {
  delay: number;
  duration: number;
  startX: number;
  startY: number;
}) {
  return (
    <motion.div
      className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] opacity-10 blur-sm"
      initial={{ x: startX, y: startY, rotate: 0 }}
      animate={{
        y: [startY, startY - 400, startY],
        x: [startX, startX + 50, startX],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for joining! We\'ll notify you when the app launches.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a24] to-[#0a0a0f]" />

      {/* Floating Discs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingDisc delay={0} duration={25} startX={100} startY={600} />
        <FloatingDisc delay={0.5} duration={30} startX={windowWidth - 100} startY={700} />
        <FloatingDisc delay={1} duration={35} startX={300} startY={650} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Rotating Disc */}
        <motion.div
          className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-action-glow"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText gradient="action">Launching Soon</GradientText> on iOS
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-text-secondary mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our app is currently under review by Apple. Join the waitlist and be the first to know when it's available!
        </motion.p>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent">
                You're on the list!
              </h3>
              <p className="text-text-secondary">{message}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-6 py-4 bg-surface border border-glass-border rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>

              {status === 'error' && (
                <div className="mb-4 text-red-400 text-sm">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-action text-white font-bold rounded-xl shadow-action-glow hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Notify Me When Available'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="text-text-tertiary hover:text-text-secondary transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
