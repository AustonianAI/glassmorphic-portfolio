# Resend Setup Guide

## 📧 Quick Setup (5 minutes)

### Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up with your email or GitHub account
3. Verify your email address

### Step 2: Get Your API Key

1. Navigate to [API Keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Name it something like "Portfolio Website"
4. Select permissions: **"Sending access"** (default)
5. Click **"Create"**
6. **Copy your API key** (it starts with `re_`)

⚠️ **Important:** Save this key immediately - you can't view it again!

### Step 3: Add to Your Project

1. In your project root, create a file named `.env.local`
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Replace `re_your_actual_api_key_here` with your copied key
4. Save the file

### Step 4: Test It

1. Restart your development server if it's running:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000)
3. Scroll to the contact form
4. Fill it out and hit "Send Message"
5. Check your `contact@austinjohnson.me` email inbox

---

## 🎯 Using Your Own Domain (Optional)

By default, emails come from `onboarding@resend.dev`. To use your own domain:

### Step 1: Add Domain in Resend

1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click **"Add Domain"**
3. Enter your domain (e.g., `austinjohnson.me`)
4. Follow DNS verification steps (add TXT, MX, SPF, DKIM records)
5. Wait for verification (usually 5-15 minutes)

### Step 2: Update Your Code

Edit `app/api/send-email/route.ts` and change line 29:

```typescript
from: 'Portfolio Contact <contact@austinjohnson.me>',
```

Replace with your preferred sending address.

---

## 📊 Pricing & Limits

### Free Tier

- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ Perfect for portfolio sites

### Paid Tier ($20/month)

- 50,000 emails per month
- Analytics and tracking
- Priority support

For a portfolio site, the **free tier is more than enough**! 🎉

---

## 🔍 Testing Tips

### Test Email Deliverability

1. Send a test email to yourself
2. Check spam folder if not in inbox
3. Add sender to contacts to improve future delivery

### Monitor in Resend Dashboard

1. Go to [Logs](https://resend.com/logs)
2. See all sent emails, delivery status, and errors
3. View email content and recipients

### Common Issues

**"Failed to send email"**

- Check if API key is correct in `.env.local`
- Restart dev server after adding `.env.local`
- Check Resend dashboard for error details

**"Invalid email format"**

- Form validates email client-side
- Check browser console for errors

**Emails going to spam**

- Use verified domain (not `onboarding@resend.dev`)
- Add SPF, DKIM, DMARC records
- Ask recipients to whitelist your domain

---

## 🚀 Ready to Deploy?

Don't forget to add `RESEND_API_KEY` as an environment variable in your hosting platform:

### Vercel

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your key
4. Redeploy

### Netlify

1. Go to **Site settings**
2. Click **Environment variables**
3. Add `RESEND_API_KEY`
4. Trigger new deploy

---

## 📚 Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend + Next.js Guide](https://resend.com/docs/send-with-nextjs)
- [Email Best Practices](https://resend.com/docs/knowledge-base/best-practices)

---

**Questions?** Check the [Resend Discord](https://resend.com/discord) or [support](https://resend.com/support)
