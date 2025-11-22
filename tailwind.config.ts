import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#1a1a24',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b0',
        'text-tertiary': '#6b6b80',
      },
      backgroundImage: {
        'gradient-success': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        'gradient-action': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-history': 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
        'gradient-unknown': 'linear-gradient(135deg, #6b6b80 0%, #4a4a60 100%)',
      },
      boxShadow: {
        'success-glow': '0 10px 40px rgba(17, 153, 142, 0.3)',
        'action-glow': '0 10px 40px rgba(102, 126, 234, 0.3)',
        'history-glow': '0 10px 40px rgba(196, 113, 245, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
