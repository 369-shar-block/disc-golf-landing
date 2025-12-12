# Waitlist Setup Instructions

## Quick Setup (1 minute)

Your waitlist now sends emails directly to **369shar@gmail.com** whenever someone signs up. Much simpler!

### Steps:

1. **Create Free Resend Account**
   - Go to: https://resend.com/signup
   - Sign up with your email (free, no credit card needed)

2. **Get API Key**
   - After signup, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Name it: `disc-golf-waitlist`
   - Copy the API key (starts with `re_...`)

3. **Add to Vercel**
   - Go to: https://vercel.com/dashboard
   - Click your `disc-golf-landing` project
   - Go to **Settings** → **Environment Variables**
   - Add new variable:
     - **Name**: `RESEND_API_KEY`
     - **Value**: (paste your API key from Resend)
     - Click "Save"

4. **Redeploy**
   - Go to **Deployments** tab
   - Click three dots on latest deployment
   - Click **"Redeploy"**
   - ✅ Done!

### That's it!

Now whenever someone joins the waitlist, you'll get an email at **369shar@gmail.com** with their info!

## What You'll Receive

Every signup sends you an email like this:

```
Subject: 🎉 New Waitlist Signup!

New Waitlist Signup
Someone just joined your disc golf app waitlist!

user@example.com

Signed up at: Thursday, December 12, 2024 at 3:45 PM
```

## Benefits

- ✅ **100% Free** (100 emails/day, 3,000/month)
- ✅ **Instant notifications** to your inbox
- ✅ **No dashboard to check** - emails come to you
- ✅ **Simple** - just one API key

## Resend Free Tier

- 100 emails per day
- 3,000 emails per month
- No credit card required
- Perfect for waitlist signups
