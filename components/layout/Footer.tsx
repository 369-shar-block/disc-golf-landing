'use client';

import { GradientText } from '../ui/GradientText';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border bg-surface/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <span className="text-lg">🥏</span>
              </div>
              <span className="font-bold text-lg">
                <GradientText gradient="action">DGFA</GradientText>
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              AI-powered disc golf form analysis. Level up your game with professional coaching insights.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/delete-account" className="text-text-secondary hover:text-text-primary transition-colors">
                  Delete Account
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@discgolfformanalyzer.com"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-glass-border text-center text-sm text-text-tertiary">
          <p>
            © {currentYear} Disc Golf Form Analyzer. All rights reserved.
          </p>
          <p className="mt-2">
            Powered by Custom-Trained Disc Golf AI
          </p>
        </div>
      </div>
    </footer>
  );
}
