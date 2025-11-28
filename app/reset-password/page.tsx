'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useSearchParams } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [sessionValid, setSessionValid] = useState(false);

  useEffect(() => {
    // Check if we have a valid session from the reset link
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setSessionValid(true);
      } else {
        setError('Invalid or expired reset link. Please request a new password reset.');
      }
    };
    checkSession();
  }, []);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!newPassword || !confirmPassword) {
      setError('Please enter your new password');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // Update password using the session from the reset link
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        setError(updateError.message);
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Success State
  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <GlassCard hover={false} className="max-w-md w-full p-8 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-success flex items-center justify-center shadow-success-glow">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Password Reset!
          </h1>

          <p className="text-text-secondary mb-6">
            Your password has been successfully reset. You can now log into the mobile app with your new password.
          </p>

          <Button variant="success" size="lg" href="/">
            Back to Home
          </Button>
        </GlassCard>
      </div>
    );
  }

  // Reset Form
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <GlassCard hover={false} className="max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-action flex items-center justify-center shadow-action-glow">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Reset Password
          </h1>
          <p className="text-text-secondary">
            Enter your new password below
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Form - Only show if session is valid */}
        {sessionValid ? (
          <form onSubmit={handleResetPassword} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                NEW PASSWORD
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-4 py-3 rounded-lg bg-surface border-2 border-glass-border text-text-primary placeholder-text-tertiary focus:border-action focus:outline-none transition-colors"
                disabled={loading}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 rounded-lg bg-surface border-2 border-glass-border text-text-primary placeholder-text-tertiary focus:border-action focus:outline-none transition-colors"
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <Button
              variant="action"
              size="lg"
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </Button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-text-secondary mb-6">
              {error || 'Validating reset link...'}
            </p>
            <Button variant="action" size="md" href="/">
              Back to Home
            </Button>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
