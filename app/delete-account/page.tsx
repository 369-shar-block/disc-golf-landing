'use client';

import { GradientText } from '@/components/ui/GradientText';
import Link from 'next/link';

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header */}
      <header className="border-b border-glass-border bg-surface/30 sticky top-0 z-50 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
              <span className="text-lg">🥏</span>
            </div>
            <span className="font-bold text-lg">
              <GradientText gradient="action">← Back to Home</GradientText>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <GradientText gradient="action">Delete Your Account</GradientText>
        </h1>
        <p className="text-text-secondary mb-8">
          We're sorry to see you go. Here's how to delete your account and data.
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          {/* In-App Deletion */}
          <section className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Delete Account In-App</h2>
            <p className="mb-4">
              You can permanently delete your account directly from the app:
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-3">
              <li><strong className="text-text-primary">Open the app</strong> on your device</li>
              <li><strong className="text-text-primary">Go to Profile tab</strong> (bottom navigation)</li>
              <li><strong className="text-text-primary">Scroll down</strong> to the "Danger Zone" section</li>
              <li><strong className="text-text-primary">Tap "Delete Account"</strong></li>
              <li><strong className="text-text-primary">Confirm deletion</strong> when prompted</li>
            </ol>
            <p className="mt-4 text-sm">
              <strong className="text-text-primary">Note:</strong> This action is immediate and cannot be undone.
            </p>
          </section>

          {/* What Gets Deleted */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">What Gets Deleted</h2>
            <p className="mb-4">When you delete your account, we permanently remove:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Your profile information (name, email)</li>
              <li>All saved analysis history</li>
              <li>Your subscription preferences</li>
              <li>All associated user data</li>
            </ul>
          </section>

          {/* What Happens to Subscription */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Active Subscriptions</h2>
            <p className="mb-4">
              If you have an active subscription, please cancel it before deleting your account:
            </p>

            <div className="space-y-4">
              <div className="glass p-4 rounded-lg">
                <h3 className="font-bold text-text-primary mb-2">📱 iOS (Apple)</h3>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-sm">
                  <li>Open Settings on your iPhone</li>
                  <li>Tap your name at the top</li>
                  <li>Tap "Subscriptions"</li>
                  <li>Select "Disc Golf Form Analyzer"</li>
                  <li>Tap "Cancel Subscription"</li>
                </ol>
              </div>

              <div className="glass p-4 rounded-lg">
                <h3 className="font-bold text-text-primary mb-2">🤖 Android (Google Play)</h3>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-sm">
                  <li>Open Google Play Store</li>
                  <li>Tap your profile icon → Payments & subscriptions</li>
                  <li>Tap "Subscriptions"</li>
                  <li>Select "Disc Golf Form Analyzer"</li>
                  <li>Tap "Cancel subscription"</li>
                </ol>
              </div>
            </div>

            <p className="mt-4 text-sm">
              <strong className="text-text-primary">Important:</strong> Deleting your account does not automatically cancel your subscription. You must cancel it separately through the App Store or Google Play.
            </p>
          </section>

          {/* Free Tier Policy */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Free Tier Policy</h2>
            <p>
              Our app offers 1 free analysis per email address. If you delete your account and sign up again with the same email, you will <strong className="text-text-primary">not</strong> receive another free analysis. This prevents abuse of our free tier.
            </p>
          </section>

          {/* Need Help */}
          <section className="glass p-6 rounded-xl border-2 border-[#667eea]/30">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Need Help?</h2>
            <p className="mb-4">
              If you're having trouble deleting your account or have questions, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <strong className="text-text-primary">Email:</strong>{' '}
                <a href="mailto:369shar@gmail.com" className="text-[#667eea] hover:text-[#764ba2] transition-colors">
                  369shar@gmail.com
                </a>
              </p>
              <p className="text-sm">
                We typically respond within 24-48 hours.
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section className="text-sm">
            <p>
              For more information about how we handle your data, please see our{' '}
              <Link href="/privacy" className="text-[#667eea] hover:text-[#764ba2] transition-colors underline">
                Privacy Policy
              </Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
