# Waitlist Setup Instructions

## Quick Setup (2 minutes)

Your waitlist is now using Vercel KV (free key-value storage) instead of the filesystem. You need to enable it in your Vercel dashboard:

### Steps:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on your `disc-golf-landing` project

2. **Create KV Database**
   - Click on the "Storage" tab
   - Click "Create Database"
   - Select "KV" (Key-Value Store)
   - Name it: `disc-golf-waitlist` (or any name)
   - Click "Create"

3. **Connect to Project**
   - After creating, click "Connect to Project"
   - Select your `disc-golf-landing` project
   - Click "Connect"
   - This automatically adds the environment variables

4. **Redeploy**
   - Go to "Deployments" tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"
   - ✅ Done! Your waitlist will now work

### That's it!

The waitlist will now save emails to Vercel KV instead of trying to create files. All emails will be persistent and you can view them in the Vercel KV dashboard.

## Viewing Waitlist Emails

**Option 1: Vercel KV Dashboard**
- Go to Storage → Your KV database
- Look for key: `disc-golf-waitlist`
- Click to view all emails

**Option 2: API Endpoint**
- Visit: https://disc-golf-landing.vercel.app/api/waitlist
- Shows count of waitlist signups

## Cost

- **Free tier:** 30,000 commands/month
- **More than enough** for your waitlist
- No credit card required

## Why Vercel KV?

- ✅ Free and simple
- ✅ Persistent (emails won't be lost)
- ✅ Works with Vercel's serverless functions
- ✅ No additional setup besides the 2-minute dashboard flow above
