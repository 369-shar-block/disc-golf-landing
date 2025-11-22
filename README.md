# Disc Golf Form Analyzer - Landing Page

The **BEST** landing page in disc golf history! 🥏🚀

## 🎯 Features

- **Hero Section** with floating disc animations (like the mobile app!)
- **Problem/Solution** flow to resonate with users
- **Live Analysis Preview** showing actual AI output
- **Social Proof** with testimonials and stats
- **Transparent Pricing** breakdown
- **FAQ** section addressing objections
- **Premium Design** with dark gradients, glass morphism, and smooth animations

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vercel** for deployment (free!)

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Project Structure

```
disc-golf-landing/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Badge.tsx
│   │   └── ...
│   ├── sections/        # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Features.tsx
│   │   ├── AnalysisPreview.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── layout/          # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn)
└── public/              # Static assets (add screenshots/videos here)
```

## 🎨 Design System

Matches the mobile app's premium theme:

- **Success Gradient**: `#11998e → #38ef7d` (green)
- **Action Gradient**: `#667eea → #764ba2` (blue-purple)
- **History Gradient**: `#c471f5 → #fa71cd` (pink-purple)
- **Background**: `#0a0a0f` (deep space black)
- **Glass Morphism**: Frosted glass effect cards

## 📱 Mobile App Integration

When your mobile app is live:

1. Get App Store URLs (iOS & Android)
2. Update `AppStoreButtons.tsx` (lines 18-19):
   ```typescript
   const iosLink = 'https://apps.apple.com/...';
   const androidLink = 'https://play.google.com/...';
   ```

## 🌐 Deployment to Vercel (FREE!)

### Option 1: GitHub + Vercel (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   cd disc-golf-landing
   git init
   git add .
   git commit -m "Initial commit - LEGENDARY landing page"

   # Create new repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/disc-golf-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repo
   - Click "Deploy"
   - **Done!** Live in 2 minutes at `your-project.vercel.app`

### Option 2: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project directory)
cd disc-golf-landing
vercel

# Follow prompts, then you're live!
```

## 🔧 Customization

### Update Content

All content is in the components. Easy to update:

- **Headlines**: Edit section `.tsx` files in `components/sections/`
- **Testimonials**: Edit `SocialProof.tsx` (line 8)
- **FAQ**: Edit `FAQ.tsx` (line 8)
- **Pricing**: Edit `Pricing.tsx`

### Add Screenshots/Videos

1. Add files to `public/` directory
2. Import in sections: `<img src="/your-image.png" />`
3. Use Next.js `<Image>` component for optimization

## 🎯 SEO Optimized

- Metadata configured in `app/layout.tsx`
- OpenGraph tags for social sharing
- Semantic HTML structure
- Fast Core Web Vitals

## 📊 Analytics (Optional)

To add Google Analytics:

1. Create `lib/analytics.ts`:
   ```typescript
   export const GA_ID = 'G-XXXXXXXXXX';
   ```

2. Add script to `app/layout.tsx`:
   ```tsx
   <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
   ```

## 🚀 Performance

- Automatic code splitting
- Image optimization (use Next.js `<Image>`)
- CSS purging (Tailwind removes unused styles)
- Framer Motion GPU-accelerated animations

## 📝 TODO After Launch

- [ ] Replace App Store placeholder links with real URLs
- [ ] Add real user testimonials (replace hypothetical ones)
- [ ] Add actual app screenshots to `public/`
- [ ] Record demo video for hero section
- [ ] Set up custom domain (optional, $10-15/year)
- [ ] Add Google Analytics (optional)

## 🏆 What Makes This LEGENDARY

✅ Premium dark theme matching mobile app
✅ Floating disc animations (smooth!)
✅ Live AI analysis preview (show don't tell)
✅ Color-coded sections with gradients
✅ Glass morphism effects everywhere
✅ Responsive mobile + desktop
✅ SEO optimized
✅ Fast performance (Core Web Vitals passing)
✅ Free deployment on Vercel
✅ Easy to customize

---

**Built:** November 22, 2025
**Status:** LEGENDARY! 🏆
**Tech:** Next.js 15 + React 19 + Tailwind CSS + Framer Motion
**Deployment:** Vercel (FREE tier)

🥏 **Let's level up disc golf coaching!** 🚀
