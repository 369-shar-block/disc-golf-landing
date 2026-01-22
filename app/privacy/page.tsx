'use client';

import { GradientText } from '@/components/ui/GradientText';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <GradientText gradient="action">Privacy Policy</GradientText>
        </h1>
        <p className="text-text-secondary mb-8">
          Last Updated: November 25, 2025
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
            <p>
              Welcome to Disc Golf Form Analyzer ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
            <p className="mt-4">
              By using Disc Golf Form Analyzer, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">1. Personal Information</h3>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Email Address:</strong> Used for account creation, authentication, and communication</li>
              <li><strong className="text-text-primary">Full Name:</strong> Used to personalize your experience</li>
              <li><strong className="text-text-primary">Password:</strong> Securely hashed and stored for account security</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">2. Video Content</h3>
            <p>When you use our form analysis feature:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Video Files:</strong> Temporarily processed for AI analysis, then discarded</li>
              <li><strong className="text-text-primary">Analysis Results:</strong> Text-based feedback stored in your account history</li>
              <li><strong className="text-text-primary">Metadata:</strong> Upload date, throw type, and analysis timestamp</li>
            </ul>
            <p className="mt-4 italic">
              Note: We do NOT permanently store your video files. Videos are processed in real-time and immediately deleted after analysis.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">3. Usage Data</h3>
            <p>We automatically collect certain information when you use our app:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Device information (type, operating system, version)</li>
              <li>App usage statistics (feature usage, session duration)</li>
              <li>Error logs and crash reports (for app improvement)</li>
              <li>Analysis history (count, dates, throw types)</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4. Payment Information</h3>
            <p>When you subscribe to Premium:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Apple App Store / Google Play:</strong> All payment processing is handled by Apple/Google. We do NOT store credit card information.</li>
              <li><strong className="text-text-primary">Subscription Status:</strong> We receive subscription status updates (active, expired, cancelled) from the app stores.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Provide Services:</strong> Process videos, generate AI analysis, and display results</li>
              <li><strong className="text-text-primary">Account Management:</strong> Authenticate users, manage subscriptions, and store analysis history</li>
              <li><strong className="text-text-primary">Improve Our App:</strong> Analyze usage patterns, fix bugs, and develop new features</li>
              <li><strong className="text-text-primary">Communication:</strong> Send important updates, subscription notifications, and support responses</li>
              <li><strong className="text-text-primary">Security:</strong> Detect and prevent fraud, unauthorized access, and abuse</li>
              <li><strong className="text-text-primary">Legal Compliance:</strong> Comply with applicable laws and regulations</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Services We Use</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">1. Supabase (Database & Authentication)</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Purpose:</strong> Secure user authentication and data storage</li>
              <li><strong className="text-text-primary">Data Shared:</strong> Email, name, analysis history</li>
              <li><strong className="text-text-primary">Privacy Policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">supabase.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">2. Custom Disc Golf AI (Video Analysis)</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Purpose:</strong> AI-powered form analysis using our proprietary disc golf model</li>
              <li><strong className="text-text-primary">Data Shared:</strong> Video content (temporarily processed for analysis, not permanently stored)</li>
              <li><strong className="text-text-primary">Model:</strong> Custom-trained on disc golf mechanics including release angles, reach-back depth, brace timing, weight transfer, and follow-through patterns</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">3. RevenueCat (Subscription Management)</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Purpose:</strong> Manage in-app purchases and subscriptions</li>
              <li><strong className="text-text-primary">Data Shared:</strong> User ID, subscription status, purchase receipts</li>
              <li><strong className="text-text-primary">Privacy Policy:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">revenuecat.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4. Apple App Store / Google Play</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Purpose:</strong> App distribution and payment processing</li>
              <li><strong className="text-text-primary">Data Shared:</strong> Purchase information, subscription status</li>
              <li><strong className="text-text-primary">Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Apple</a> / <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Google</a></li>
            </ul>
          </section>

          {/* Data Storage & Security */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Data Storage & Security</h2>
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Encryption:</strong> All data transmitted between your device and our servers uses HTTPS/TLS encryption</li>
              <li><strong className="text-text-primary">Password Security:</strong> Passwords are hashed using bcrypt and never stored in plain text</li>
              <li><strong className="text-text-primary">Database Security:</strong> Row-Level Security (RLS) ensures users can only access their own data</li>
              <li><strong className="text-text-primary">Video Processing:</strong> Videos are processed in memory and never written to persistent storage</li>
              <li><strong className="text-text-primary">Access Controls:</strong> Strict authentication and authorization on all API endpoints</li>
            </ul>
            <p className="mt-4 italic">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Data Retention</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Account Data:</strong> Retained as long as your account is active</li>
              <li><strong className="text-text-primary">Analysis History:</strong> Stored indefinitely for Premium users; limited to most recent for Free users</li>
              <li><strong className="text-text-primary">Video Files:</strong> Deleted immediately after processing (typically within 60 seconds)</li>
              <li><strong className="text-text-primary">Deleted Accounts:</strong> All personal data permanently deleted within 30 days of account deletion</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Your Privacy Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-text-primary">Correction:</strong> Update or correct inaccurate information (available in Profile settings)</li>
              <li><strong className="text-text-primary">Deletion:</strong> Request permanent deletion of your account and all associated data</li>
              <li><strong className="text-text-primary">Export:</strong> Download your analysis history in a portable format</li>
              <li><strong className="text-text-primary">Opt-Out:</strong> Unsubscribe from marketing communications (we don't send marketing emails currently)</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@discgolfformanalyzer.com" className="text-[#667eea] hover:underline">privacy@discgolfformanalyzer.com</a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our systems.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">International Users</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside of your country. By using our service, you consent to the transfer of information to countries outside your country of residence, which may have different data protection rules.
            </p>
            <p className="mt-4">
              Our servers are primarily located in the United States. We comply with applicable data protection laws, including GDPR for European users and CCPA for California residents.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">California Privacy Rights (CCPA)</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to say no to the sale of personal information (we do NOT sell your data)</li>
              <li>Right to access your personal information</li>
              <li>Right to delete your personal information</li>
              <li>Right to equal service and price (no discrimination for exercising rights)</li>
            </ul>
          </section>

          {/* GDPR Rights */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">European Privacy Rights (GDPR)</h2>
            <p>If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making (we use AI for analysis only, not decisions)</li>
            </ul>
            <p className="mt-4">
              Legal basis for processing: Consent (when you create an account), Contract (to provide our services), and Legitimate Interest (to improve our app).
            </p>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Cookies & Tracking Technologies</h2>
            <p><strong className="text-text-primary">Website:</strong> Our landing page uses minimal tracking:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>No third-party cookies</li>
              <li>No advertising trackers</li>
              <li>Vercel analytics (privacy-friendly, no personal data)</li>
            </ul>
            <p className="mt-4"><strong className="text-text-primary">Mobile App:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Session management for authentication (required for app functionality)</li>
              <li>Local storage for app preferences</li>
              <li>No third-party advertising or tracking SDKs</li>
            </ul>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last Updated" date at the top</li>
              <li>Sending an in-app notification for material changes</li>
            </ul>
            <p className="mt-4">
              You are advised to review this Privacy Policy periodically. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 bg-surface/50 border border-glass-border rounded-xl p-6">
              <p><strong className="text-text-primary">Email:</strong> <a href="mailto:privacy@discgolfformanalyzer.com" className="text-[#667eea] hover:underline">privacy@discgolfformanalyzer.com</a></p>
              <p className="mt-2"><strong className="text-text-primary">Support:</strong> <a href="mailto:369shar@gmail.com" className="text-[#667eea] hover:underline">369shar@gmail.com</a></p>
              <p className="mt-2"><strong className="text-text-primary">Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </section>

          {/* Summary */}
          <section className="border-t border-glass-border pt-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Privacy Policy Summary</h2>
            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/30 rounded-xl p-6">
              <p className="font-semibold text-text-primary mb-3">In Plain English:</p>
              <ul className="space-y-2">
                <li>✅ We collect only what's necessary to provide our service</li>
                <li>✅ Your videos are NOT stored permanently (deleted after analysis)</li>
                <li>✅ We do NOT sell your data to anyone</li>
                <li>✅ We do NOT use tracking for advertising</li>
                <li>✅ You can delete your account and all data anytime</li>
                <li>✅ We use industry-standard security practices</li>
                <li>✅ Third-party services (Supabase, RevenueCat) have their own privacy policies</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-glass-border bg-surface/30 py-8 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sm text-text-tertiary">
          <p>© {new Date().getFullYear()} Disc Golf Form Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
