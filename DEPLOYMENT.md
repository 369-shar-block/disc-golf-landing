# 🚀 Deployment Guide - Vercel (FREE)

## Quick Deploy (5 Minutes!)

### Method 1: GitHub + Vercel Dashboard (Easiest)

**Step 1: Push to GitHub**
```bash
cd C:\Users\369sh\OneDrive\Desktop\Apps\disc-golf-landing

# Initialize git
git init
git add .
git commit -m "Initial commit - Legendary landing page"

# Create new repo on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/disc-golf-landing.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Sign up with your GitHub account (free)
3. Click "Add New..." → "Project"
4. Select your `disc-golf-landing` repository
5. Click "Deploy" (no configuration needed!)
6. **Done!** Live in 2 minutes at `https://your-project.vercel.app`

---

### Method 2: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd C:\Users\369sh\OneDrive\Desktop\Apps\disc-golf-landing

# Login to Vercel
vercel login

# Deploy!
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? disc-golf-landing
# - Directory? ./
# - Override settings? N

# 🎉 Done! Your site is live!
```

**Production Deployment:**
```bash
vercel --prod
```

---

## 🌐 Custom Domain Setup (Optional)

### 1. Buy a Domain
- **Recommended**: [Namecheap](https://www.namecheap.com) (~$10-15/year)
- **Alternatives**: GoDaddy, Google Domains, Cloudflare

### 2. Add Domain to Vercel
1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., `discgolfformanalyzer.com`)
5. Follow DNS setup instructions

### 3. Configure DNS
Add these records to your domain registrar:

**Option A: Apex Domain (discgolfformanalyzer.com)**
```
Type: A
Name: @
Value: 76.76.19.61
```

**Option B: Subdomain (www.discgolfformanalyzer.com)**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4. Wait for SSL
- SSL certificate auto-generated (5-10 minutes)
- Your site will be live at your custom domain!

---

## 📊 Vercel Free Tier Limits

Perfect for landing pages:

| Feature | Free Tier |
|---------|-----------|
| **Bandwidth** | 100 GB/month |
| **Deployments** | Unlimited |
| **Sites** | Unlimited |
| **Custom Domains** | Unlimited |
| **SSL** | Free (auto) |
| **Build Time** | 6000 minutes/month |
| **Team Members** | 1 |

**Estimated Traffic:** 100GB = ~50,000 page views/month
**More than enough for a landing page!**

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every `git push` to `main` branch → Automatic deployment
- Preview deployments for pull requests
- Rollback to previous versions anytime

```bash
# Make changes to your landing page
git add .
git commit -m "Update hero headline"
git push

# Vercel automatically deploys! ✨
```

---

## 🎯 After Deployment Checklist

### Immediate (Day 1)
- [ ] Verify site loads on mobile + desktop
- [ ] Test all buttons and links
- [ ] Check page speed (should be A+ on PageSpeed Insights)
- [ ] Share link with friends for feedback

### Week 1
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Replace App Store placeholder links when apps are live
- [ ] Add real testimonials from early users

### Month 1
- [ ] Monitor Vercel analytics dashboard
- [ ] A/B test different headlines
- [ ] Add real app screenshots to hero section
- [ ] Create demo video of app in action

---

## 🔧 Environment Variables (If Needed Later)

If you add API calls or analytics:

**In Vercel Dashboard:**
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables (e.g., `NEXT_PUBLIC_GA_ID`)

**In Local Development:**
```bash
# Create .env.local file
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📈 Performance Monitoring

**Vercel Analytics (Built-in)**
- Real Visitor Data (RVD)
- Core Web Vitals
- Page load times
- Available in project dashboard

**Google Analytics (Optional)**
See README.md for setup instructions.

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# If successful locally, likely a Vercel setting issue
# Check: Node version, environment variables
```

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS records match Vercel's requirements
- Verify domain ownership in Vercel dashboard

### Slow Load Times
- Optimize images (use Next.js `<Image>` component)
- Check Vercel Analytics for bottlenecks
- Run Google PageSpeed Insights

---

## 💡 Pro Tips

1. **Preview Deployments**: Every PR gets its own URL - share with stakeholders
2. **Instant Rollback**: Revert to any previous deployment in one click
3. **Edge Network**: Your site is cached globally - fast everywhere
4. **Zero Config**: No build settings needed for Next.js
5. **Automatic HTTPS**: SSL certificates handled for you

---

## 📞 Support

**Vercel Documentation:**
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

**Need Help?**
- Vercel Discord: [vercel.com/discord](https://vercel.com/discord)
- Next.js Discord: [nextjs.org/discord](https://nextjs.org/discord)

---

## 🎉 You're Live!

**Your landing page is now:**
✅ Deployed globally on Vercel's edge network
✅ Automatically SSL-secured
✅ Getting preview deployments for every git push
✅ Monitored with real-time analytics
✅ Costing you $0/month

**Share your link and watch the downloads roll in!** 🚀🥏

---

**Deployed:** Ready to go!
**Cost:** $0/month (forever on free tier)
**Performance:** A+ Core Web Vitals
**Status:** LEGENDARY! 🏆
