'use client';

import { GradientText } from '@/components/ui/GradientText';
import Link from 'next/link';

export default function TermsOfService() {
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
          <GradientText gradient="action">Terms of Use (EULA)</GradientText>
        </h1>
        <p className="text-text-secondary mb-8">
          Last Updated: November 25, 2025
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Agreement to Terms</h2>
            <p>
              Welcome to Disc Golf Form Analyzer ("App," "Service," "we," "us," or "our"). By accessing or using our mobile application and website, you agree to be bound by these Terms of Use ("Terms").
            </p>
            <p className="mt-4">
              <strong className="text-text-primary">If you do not agree to these Terms, do not use our Service.</strong>
            </p>
            <p className="mt-4">
              These Terms constitute a legally binding agreement between you and Disc Golf Form Analyzer. We reserve the right to update these Terms at any time, and your continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. Eligibility</h2>
            <p>You must meet the following requirements to use our Service:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Be at least <strong className="text-text-primary">13 years old</strong></li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
            </ul>
            <p className="mt-4">
              If you are under 18, you represent that you have permission from a parent or legal guardian to use the Service.
            </p>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. Account Registration & Security</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">3.1 Account Creation</h3>
            <p>To use certain features, you must create an account by providing:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Valid email address</li>
              <li>Full name</li>
              <li>Secure password</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">3.2 Account Responsibility</h3>
            <p>You are responsible for:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Ensuring your account information is accurate and up-to-date</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any reason at our sole discretion.
            </p>
          </section>

          {/* Subscription & Payment */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Subscription & Payment Terms</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4.1 Free Tier</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">1 free analysis</strong> per account</li>
              <li>No credit card required</li>
              <li>Limited access to features</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4.2 Premium Subscription</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Price:</strong> $9.99 per month (USD)</li>
              <li><strong className="text-text-primary">Billing:</strong> Automatically charged monthly to your Apple/Google account</li>
              <li><strong className="text-text-primary">Benefits:</strong> Unlimited video analyses, analysis history, custom drills</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4.3 Auto-Renewal</h3>
            <p>
              Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. Your account will be charged for renewal within 24 hours prior to the end of the current period.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4.4 Cancellation</h3>
            <p>
              You can cancel your subscription at any time through:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">iOS:</strong> Settings → [Your Name] → Subscriptions → Disc Golf Form Analyzer → Cancel</li>
              <li><strong className="text-text-primary">Android:</strong> Google Play Store → Subscriptions → Disc Golf Form Analyzer → Cancel</li>
            </ul>
            <p className="mt-4">
              Cancellation takes effect at the end of the current billing period. No partial refunds for unused time.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">4.5 Refund Policy</h3>
            <p>
              All payments are processed through the Apple App Store or Google Play Store. Refund requests must be made directly to Apple or Google according to their respective policies:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Apple Refund Policy</a></li>
              <li><a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="text-[#667eea] hover:underline">Google Play Refund Policy</a></li>
            </ul>
            <p className="mt-4">
              We do not have the ability to issue refunds directly. Please contact the app store where you made your purchase.
            </p>
          </section>

          {/* Service Usage */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Acceptable Use Policy</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">5.1 Permitted Use</h3>
            <p>You may use the Service to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Upload videos of your disc golf throws for analysis</li>
              <li>Receive AI-generated form feedback</li>
              <li>Store and review your analysis history</li>
              <li>Access suggested drills and training tips</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">5.2 Prohibited Activities</h3>
            <p>You agree NOT to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Upload inappropriate, offensive, or illegal content</li>
              <li>Use the Service for any commercial purpose without our permission</li>
              <li>Attempt to reverse engineer, decompile, or hack the App</li>
              <li>Create multiple accounts to abuse the free tier</li>
              <li>Share your account credentials with others</li>
              <li>Scrape, copy, or redistribute our content</li>
              <li>Use automated systems (bots) to access the Service</li>
              <li>Upload videos that violate copyright or privacy rights of others</li>
              <li>Interfere with the security or operation of the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">5.3 Content Removal</h3>
            <p>
              We reserve the right to remove any content that violates these Terms or is deemed inappropriate at our sole discretion.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">6.1 Our Ownership</h3>
            <p>
              The Service, including the App, website, software, design, AI models, analysis algorithms, and content (excluding user-uploaded videos), is owned by Disc Golf Form Analyzer and protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">6.2 Your Content</h3>
            <p>
              You retain ownership of videos you upload. By uploading content, you grant us a limited, non-exclusive license to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Process your videos through our AI analysis system</li>
              <li>Store analysis results in your account</li>
              <li>Display content back to you within the App</li>
            </ul>
            <p className="mt-4 italic">
              We do NOT use your videos for marketing, training AI models, or any purpose other than providing analysis to you.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">6.3 Trademarks</h3>
            <p>
              "Disc Golf Form Analyzer," our logo, and related marks are trademarks. You may not use our trademarks without written permission.
            </p>
          </section>

          {/* AI & Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">7. AI Analysis & Accuracy</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">7.1 AI-Powered Service</h3>
            <p>
              Our Service uses artificial intelligence (Google Gemini AI) to analyze disc golf form. The analysis is:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Educational in nature</li>
              <li>Not a substitute for professional coaching</li>
              <li>Subject to AI limitations and potential errors</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">7.2 No Guarantees</h3>
            <p>
              We do NOT guarantee:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>100% accuracy of analysis</li>
              <li>Specific improvements in your disc golf performance</li>
              <li>Error-free operation of the Service</li>
              <li>Uninterrupted availability of the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">7.3 Medical Disclaimer</h3>
            <p className="font-semibold text-text-primary">
              Our Service is not medical advice. Consult a healthcare professional before starting any new physical activity or if you experience pain or injury.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Privacy & Data Protection</h2>
            <p>
              Your use of the Service is also governed by our <Link href="/privacy" className="text-[#667eea] hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your information.
            </p>
            <p className="mt-4">
              Key points:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Videos are NOT permanently stored (deleted after analysis)</li>
              <li>We do NOT sell your personal data</li>
              <li>Analysis results are stored securely in your account</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">9. Disclaimers & Limitations</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">9.1 "AS IS" Service</h3>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">9.2 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DISC GOLF FORM ANALYZER SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or goodwill</li>
              <li>Service interruptions or errors</li>
              <li>Injuries resulting from following analysis or drill suggestions</li>
              <li>Third-party actions (e.g., app store policies)</li>
            </ul>
            <p className="mt-4">
              In no event shall our total liability exceed the amount you paid us in the 12 months preceding the claim (maximum $119.88).
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">9.3 Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless Disc Golf Form Analyzer from any claims, damages, or expenses arising from:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your misuse of the Service</li>
            </ul>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">10. Third-Party Services</h2>
            <p>
              Our Service integrates with third-party services:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong className="text-text-primary">Google Gemini AI</strong> - Video analysis</li>
              <li><strong className="text-text-primary">Supabase</strong> - Database and authentication</li>
              <li><strong className="text-text-primary">RevenueCat</strong> - Subscription management</li>
              <li><strong className="text-text-primary">Apple App Store / Google Play</strong> - Payment processing</li>
            </ul>
            <p className="mt-4">
              These third parties have their own terms of service and privacy policies. We are not responsible for their practices or availability.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">11. Termination</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">11.1 By You</h3>
            <p>
              You may terminate your account at any time by:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Canceling your subscription (if applicable)</li>
              <li>Deleting your account in Profile settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">11.2 By Us</h3>
            <p>
              We may terminate or suspend your access immediately if:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>You violate these Terms</li>
              <li>We detect fraudulent activity</li>
              <li>Required by law or government request</li>
              <li>We discontinue the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">11.3 Effect of Termination</h3>
            <p>
              Upon termination:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Your right to use the Service immediately ceases</li>
              <li>Active subscriptions will be canceled (no refund for unused time)</li>
              <li>Account data will be deleted within 30 days</li>
              <li>Sections of these Terms that should survive (e.g., liability, indemnification) will continue to apply</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">12. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">12.1 Informal Resolution</h3>
            <p>
              Before filing a claim, please contact us at <a href="mailto:support@discgolfformanalyzer.com" className="text-[#667eea] hover:underline">support@discgolfformanalyzer.com</a> to attempt informal resolution.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">12.2 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the United States and the State of [Your State], without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">12.3 Arbitration</h3>
            <p>
              Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court (except for small claims court).
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">12.4 Class Action Waiver</h3>
            <p className="font-semibold text-text-primary">
              You agree to resolve disputes individually and waive the right to participate in class actions, class arbitrations, or representative actions.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make changes:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>The "Last Updated" date will be revised</li>
              <li>Material changes will be notified via email or in-app notification</li>
              <li>Continued use after changes constitutes acceptance</li>
            </ul>
            <p className="mt-4">
              If you do not agree to the updated Terms, you must stop using the Service and may cancel your account.
            </p>
          </section>

          {/* General Provisions */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">14. General Provisions</h2>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">14.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Disc Golf Form Analyzer.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">14.2 Severability</h3>
            <p>
              If any provision is found to be unenforceable, the remaining provisions will remain in full effect.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">14.3 No Waiver</h3>
            <p>
              Our failure to enforce any right or provision does not constitute a waiver of that right.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">14.4 Assignment</h3>
            <p>
              You may not transfer or assign your rights under these Terms. We may assign our rights to any affiliate or successor.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">14.5 Force Majeure</h3>
            <p>
              We shall not be liable for any failure to perform due to circumstances beyond our reasonable control (e.g., natural disasters, government actions, service provider outages).
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">15. Contact Information</h2>
            <p>
              For questions about these Terms, contact us:
            </p>
            <div className="mt-4 bg-surface/50 border border-glass-border rounded-xl p-6">
              <p><strong className="text-text-primary">Email:</strong> <a href="mailto:legal@discgolfformanalyzer.com" className="text-[#667eea] hover:underline">legal@discgolfformanalyzer.com</a></p>
              <p className="mt-2"><strong className="text-text-primary">Support:</strong> <a href="mailto:369shar@gmail.com" className="text-[#667eea] hover:underline">369shar@gmail.com</a></p>
            </div>
          </section>

          {/* Summary */}
          <section className="border-t border-glass-border pt-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Terms of Use Summary</h2>
            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/30 rounded-xl p-6">
              <p className="font-semibold text-text-primary mb-3">In Plain English:</p>
              <ul className="space-y-2">
                <li>✅ Use the Service respectfully and legally</li>
                <li>✅ Premium subscription: $9.99/month, cancel anytime</li>
                <li>✅ You own your videos; we only analyze them (then delete)</li>
                <li>✅ AI analysis is educational, not guaranteed to be 100% accurate</li>
                <li>✅ We can terminate accounts that violate these Terms</li>
                <li>✅ Refunds handled by Apple/Google, not us</li>
                <li>✅ Disputes resolved through arbitration, not court</li>
                <li>✅ We're not liable for injuries from following our suggestions</li>
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
