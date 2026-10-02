import type { Config } from "tailwindcss";

// Design system: "sports-tech lab" (Oct 2026 redesign).
// Dark, precise, data-forward. One brand accent (cyan, the app's own #00e5ff family) with
// violet for anything 3D and a hot orange reserved for the hand trail / release moment.
// Display type is condensed and uppercase (matches the App Store screenshots); data labels
// are monospace. The legacy tokens at the bottom only serve the old legal pages.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070b",
          900: "#080b11",
          850: "#0b0f17",
          800: "#0f141d",
          700: "#161d29",
        },
        line: "rgba(255,255,255,0.08)",
        fog: {
          50: "#eef3f8",
          200: "#c5cfdb",
          400: "#8e9bad",
          600: "#5d6a7c",
        },
        cyan: { 300: "#7cf3ff", 400: "#22e3ff", 500: "#00c8e6" },
        violet: { 400: "#a78bfa", 500: "#8b5cf6" },
        heat: { 400: "#ff9a4d", 500: "#ff7a2f" },
        // legacy (legal pages only)
        background: "#0a0a0f",
        surface: "#1a1a24",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0b0",
        "text-tertiary": "#6b6b80",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(100deg, #22e3ff 0%, #6d8bff 55%, #a78bfa 100%)",
        "gradient-success": "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        "gradient-action": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-history": "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,227,255,0.25), 0 20px 60px -20px rgba(34,227,255,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -30px rgba(0,0,0,0.8)",
        "success-glow": "0 10px 40px rgba(17, 153, 142, 0.3)",
        "action-glow": "0 10px 40px rgba(102, 126, 234, 0.3)",
      },
      maxWidth: { site: "76rem" },
      letterSpacing: { label: "0.18em" },
    },
  },
  plugins: [],
};

export default config;
