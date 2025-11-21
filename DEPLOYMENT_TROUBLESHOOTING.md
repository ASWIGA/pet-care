# Deployment Troubleshooting Guide

## "Failed to Fetch" Error on Vercel

### Common Causes:

1. **Render Backend is Sleeping** (Free Tier)
   - Render free tier services sleep after 15 minutes of inactivity
   - First request after sleep takes 30-50 seconds to wake up
   - Solution: Upgrade to paid plan OR use a service like UptimeRobot to ping your backend every 5 minutes

2. **Missing Environment Variable on Vercel**
   - Vercel needs `VITE_API_URL` environment variable
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://pet-pet-care-cklx.onrender.com`

3. **CORS Issues**
   - Backend must allow requests from Vercel domain
   - Current config allows all origins, but verify in Render dashboard

4. **Backend Not Accessible**
   - Test: Visit `https://pet-pet-care-cklx.onrender.com` in browser
   - Should see: "Vedhas PetCare API 🚀"
   - If not accessible, check Render logs

### Quick Fixes:

#### 1. Set Vercel Environment Variable:
```
VITE_API_URL=https://pet-pet-care-cklx.onrender.com
```

#### 2. Keep Render Backend Awake:
- Use UptimeRobot (free): https://uptimerobot.com
- Set up a monitor to ping your backend every 5 minutes
- Or upgrade Render to paid plan ($7/month)

#### 3. Verify Backend CORS:
- In Render dashboard, check environment variables
- `CLIENT_ORIGIN` should be unset (allows all) OR set to your Vercel URL

#### 4. Check Browser Console:
- Open DevTools (F12) → Console tab
- Look for specific error messages
- Check Network tab for failed requests

### Testing Steps:

1. **Test Backend Directly:**
   ```bash
   curl https://pet-pet-care-cklx.onrender.com
   ```
   Should return: "Vedhas PetCare API 🚀"

2. **Test from Browser:**
   - Open: https://pet-pet-care-cklx.onrender.com/api/users/login
   - Should see error (expected - needs POST), but confirms backend is up

3. **Check Vercel Build Logs:**
   - Vercel Dashboard → Deployments → Click latest → View Build Logs
   - Ensure `VITE_API_URL` is being used during build

4. **Check Network Tab:**
   - Open your Vercel site
   - F12 → Network tab
   - Try to login/signup
   - Check if requests are going to Render backend
   - Look for CORS errors (red requests)

### Render Free Tier Limitations:

- Services sleep after 15 min inactivity
- First request after sleep: 30-50 second delay
- Consider upgrading or using keep-alive service


