# Austin Johnson - Portfolio Dashboard

A modern, Mac OS dashboard-style portfolio website built with Next.js, TypeScript, and shadcn/ui.

## 🚀 Features

- **Mac OS Dashboard Design**: Glassmorphism aesthetic with widget-based layout
- **Video Background**: Stunning background video with glassmorphism overlay
- **Dark/Light Theme**: Beautiful theme switcher with system preference detection
- **Responsive Layout**: Seamlessly adapts from mobile to desktop
- **Modern Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS
- **shadcn/ui Components**: Beautiful, accessible components
- **SEO Optimized**: Comprehensive metadata, Open Graph, Twitter Cards, and structured data
- **Portfolio Sections**:
  - Hero section with dual professional identities
  - About widget
  - Skills & expertise showcase
  - Experience timeline
  - Featured projects
  - Contact form with email integration (Resend)
  - Scheduling integration (Cal.com)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Email Service**: Resend

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio-aj
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=re_your_api_key_here
```

**Get your Resend API key:**

- Sign up at [resend.com](https://resend.com)
- Navigate to [API Keys](https://resend.com/api-keys)
- Create a new API key
- Copy and paste it into your `.env.local` file

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
portfolio-aj/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles with glassmorphism
├── components/
│   ├── hero-section.tsx    # Hero component with profile
│   ├── theme-provider.tsx  # Theme provider wrapper
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── ui/                 # shadcn/ui components
│   └── widgets/
│       ├── about-widget.tsx
│       ├── skills-widget.tsx
│       ├── experience-widget.tsx
│       ├── projects-widget.tsx
│       └── contact-widget.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization

### Update Content

1. **Hero Section**: Edit `/components/hero-section.tsx` to update name, titles, and profile
2. **About**: Modify `/components/widgets/about-widget.tsx` for your bio
3. **Skills**: Update skills arrays in `/components/widgets/skills-widget.tsx`
4. **Experience**: Edit experience data in `/components/widgets/experience-widget.tsx`
5. **Projects**: Customize projects in `/components/widgets/projects-widget.tsx`
6. **Contact**: Update social links in `/components/widgets/contact-widget.tsx`

### Styling

- Glassmorphism utilities are defined in `/app/globals.css`
- Theme colors are managed via CSS variables (light/dark modes)
- Responsive breakpoints follow Tailwind's default system

### Background Video

The site **automatically discovers and randomly selects** from video files in the `/public/wallpapers/` folder on each page load. No code changes needed!

**To add more videos:**

1. Simply drop your video file (`.mp4`, `.webm`, `.ogg`, or `.mov`) into `/public/wallpapers/`
2. That's it! The site will automatically include it in the random rotation

**Supported formats:** MP4, WebM, OGG, MOV

**To adjust settings:**

Edit `/components/background-video.tsx`:

- **Playback speed**: Change `playbackRate` value (0.5 = 50% speed, 1.0 = normal)

Note: Videos play at full brightness. Widget readability is maintained through glassmorphism effects.

### Contact Form

The contact form uses **Resend** for reliable email delivery:

**Features:**

- Form validation with visual feedback
- Loading states and error handling
- Success/error messages
- Reply-to set to sender's email
- Clean HTML and text email formats

**Setup:**

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. Add `RESEND_API_KEY` to your `.env.local` file

**Custom Domain (Optional):**

By default, emails come from `onboarding@resend.dev`. To use your own domain:

1. Add and verify your domain in Resend dashboard
2. Update the `from` field in `/app/api/send-email/route.ts`:
   ```typescript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

**Rate Limits:**

- Free tier: 100 emails/day, 3,000/month
- Paid tier: Starting at $20/month for 50,000 emails

### SEO Features

The site includes comprehensive SEO optimization:

**Metadata & Social Sharing:**

- Open Graph tags for Facebook, LinkedIn, Slack
- Twitter Card tags for rich previews on X/Twitter
- Customizable meta descriptions and keywords
- Social share image configuration

**Structured Data (JSON-LD):**

- Person schema with professional information
- Website schema for site identification
- Professional Service schema for tax/CFO services
- Optimized for Google Knowledge Graph

**Search Engine Optimization:**

- XML sitemap (auto-generated at `/sitemap.xml`)
- Robots.txt for crawler instructions
- Canonical URLs and meta tags
- Mobile-optimized and fast-loading

**Setup:**

1. Update domain in `app/layout.tsx` (line 17): `metadataBase: new URL("https://yourdomain.com")`
2. Add Google verification code when deploying
3. Test social cards: [Facebook Debugger](https://developers.facebook.com/tools/debug/), [Twitter Validator](https://cards-dev.twitter.com/validator)

See `SEO_GUIDE.md` for detailed configuration and optimization tips.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

**Important:** Don't forget to add your `RESEND_API_KEY` environment variable in your deployment platform:

- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **AWS Amplify**: Environment variables section

## 📄 License

MIT

## 👤 Author

**Austin Johnson**

- Software Engineer
- IRS Enrolled Agent
- Website: [austinjohnson.me](https://austinjohnson.me)

---

Built with ❤️ using Next.js and TypeScript
