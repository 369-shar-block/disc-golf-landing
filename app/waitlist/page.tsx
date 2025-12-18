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
        setMessage('We\'ll send you a reminder on December 30th when the app goes live!');
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
          <GradientText gradient="action">Launching</GradientText> on iOS
        </motion.h1>

        {/* Premium Launch Date Display */}
        <motion.div
          className="glass p-8 sm:p-12 rounded-3xl mb-8 border-2 border-[#667eea]/50 shadow-action-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-text-tertiary text-sm uppercase tracking-wider mb-2 font-semibold">
            App Store Launch Date
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#c471f5] bg-clip-text text-transparent">
              Tuesday
            </span>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            December 30th, 2025
          </div>
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Mark your calendar!</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl text-text-secondary mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get notified the moment the app goes live on the App Store. Be among the first to transform your disc golf game with AI-powered coaching!
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
                {status === 'loading' ? 'Joining...' : 'Notify Me on Launch Day'}
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
