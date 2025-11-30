'use client';

import { useState, useEffect, Suspense } from 'react';
import { supabase } from '@/lib/supabase';
import { useSearchParams } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [sessionValid, setSessionValid] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const handlePasswordRecovery = async () => {
      try {
        // Extract tokens from URL hash (format: #access_token=xxx&refresh_token=yyy&type=recovery)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const type = hashParams.get('type');

        console.log('URL hash params:', { accessToken: !!accessToken, refreshToken: !!refreshToken, type });

        // If we have tokens in the hash, set the session
        if (accessToken && refreshToken && type === 'recovery') {
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error('Error setting session:', error);
            setError('Invalid or expired reset link. Please request a new password reset.');
            setChecking(false);
            return;
          }

          console.log('Session set successfully:', !!data.session);
          setSessionValid(true);
          setChecking(false);

          // Clear the hash from URL for cleaner appearance
          window.history.replaceState(null, '', window.location.pathname);
        } else {
          // No tokens in URL - check if we already have a session
          const { data: { session } } = await supabase.auth.getSession();

          if (session) {
            console.log('Existing session found');
            setSessionValid(true);
            setChecking(false);
          } else {
            console.log('No tokens found in URL and no existing session');
            setError('Invalid or expired reset link. Please request a new password reset.');
            setChecking(false);
          }
        }
      } catch (err) {
        console.error('Error in handlePasswordRecovery:', err);
        setError('An error occurred. Please request a new password reset.');
        setChecking(false);
      }
    };

    handlePasswordRecovery();
  }, []);

  const resetPassword = async () => {
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
        // Sign out the user after password reset so they login with new password
        await supabase.auth.signOut();
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPassword();
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

        {/* Show loading while checking */}
        {checking ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-action border-t-transparent mb-4"></div>
            <p className="text-text-secondary">Validating reset link...</p>
          </div>
        ) : sessionValid ? (
          /* Form - Only show if session is valid */
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
              onClick={resetPassword}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </Button>
          </form>
        ) : (
          /* Show error if no valid session */
          <div className="text-center">
            <p className="text-text-secondary mb-6">
              {error}
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <GlassCard hover={false} className="max-w-md w-full p-8 text-center">
          <p className="text-text-secondary">Loading...</p>
        </GlassCard>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
