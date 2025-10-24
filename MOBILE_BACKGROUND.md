# Mobile Background Setup

## 📱 How It Works

Your portfolio now intelligently switches between video and static backgrounds based on device type:

- **Desktop (≥1024px)**: Random video from `/public/wallpapers/`
- **Mobile/Tablet (<1024px)**: Static image at `/public/bg-mobile.jpg`

This provides better performance on mobile devices by avoiding heavy video playback.

---

## 🎨 Add Your Mobile Background

### Step 1: Choose or Create an Image

**Recommended specifications:**

- **Size**: 1080x1920px (portrait) or 1920x1080px (landscape)
- **Format**: JPG (smaller file size) or PNG
- **File size**: < 500KB for best performance
- **Content**: Should match your desktop video aesthetic

**Tips:**

- Extract a frame from one of your wallpaper videos
- Use a blurred or simplified version of your video background
- Ensure good contrast with glassmorphism widgets

### Step 2: Add to Your Project

1. Save your image as `bg-mobile.jpg`
2. Place it in `/Users/austin/Desktop/Projects/portfolio-aj/public/`
3. Final path: `/Users/austin/Desktop/Projects/portfolio-aj/public/bg-mobile.jpg`

### Step 3: Test

**To test mobile view on desktop:**

1. Open http://localhost:3000
2. Open Chrome DevTools (Cmd+Option+I)
3. Click the device toolbar icon (Cmd+Shift+M)
4. Select a mobile device (iPhone, iPad, etc.)
5. Refresh the page
6. You should see your static background instead of video

---

## 🔧 Customization

### Change Mobile Breakpoint

Edit `/components/background-video.tsx` line 17:

```typescript
// Current: Mobile/tablet under 1024px
setIsMobile(window.innerWidth < 1024)

// To make it mobile-only (tablets get video):
setIsMobile(window.innerWidth < 768)

// To include larger tablets:
setIsMobile(window.innerWidth < 1280)
```

### Use Different Image Name

If you want to use a different filename:

1. Add your image to `/public/` (e.g., `mobile-bg.jpg`)
2. Edit `/components/background-video.tsx` line 71:
   ```typescript
   src = "/mobile-bg.jpg"
   ```

### Use PNG Instead of JPG

PNG works too! Just:

1. Save as `bg-mobile.png`
2. Update line 71: `src='/bg-mobile.png'`

---

## 📊 Performance Benefits

**Before (video on mobile):**

- 5-10MB video download
- High battery drain
- Slower page load
- Potential playback issues

**After (static image):**

- ~200-500KB image download
- Minimal battery impact
- Fast page load
- Consistent experience

**Result:** 10-20x smaller download, much better UX on mobile!

---

## 🎯 Current Status

**What's configured:**

- ✅ Desktop shows random video
- ✅ Mobile/tablet detection working
- ✅ Breakpoint set at 1024px (Tailwind `lg`)
- ✅ Next.js Image optimization enabled

**What you need to do:**

- ⏳ Add `/public/bg-mobile.jpg` image

**Fallback behavior:**

- If `bg-mobile.jpg` is missing, you'll see a blue/purple gradient
- No errors, just a default background

---

## 💡 Quick Tips

### Extract Frame from Video

**Using ffmpeg (if installed):**

```bash
ffmpeg -i public/wallpapers/aj_beach.mp4 -ss 00:00:05 -frames:v 1 public/bg-mobile.jpg
```

**Using QuickTime Player (Mac):**

1. Open video in QuickTime
2. Pause at desired frame
3. Edit → Copy
4. File → New from Clipboard
5. Export as JPG

**Using VLC:**

1. Open video
2. Pause at desired frame
3. Video → Take Snapshot
4. Find in Pictures folder
5. Rename and move to `/public/`

### Optimize Image Size

**Before adding to project:**

- Use https://tinyjpg.com to compress
- Or https://squoosh.app for advanced optimization
- Target: < 500KB file size

---

## 🧪 Testing Checklist

After adding `bg-mobile.jpg`:

- [ ] Desktop browser shows video
- [ ] Mobile browser shows static image
- [ ] Tablet shows static image
- [ ] Glassmorphism widgets are readable
- [ ] Image loads quickly
- [ ] No console errors

---

## 🔍 Troubleshooting

**Problem:** Image not showing on mobile

- Check file exists: `/public/bg-mobile.jpg`
- Check filename is exact (case-sensitive)
- Hard refresh browser (Cmd+Shift+R)
- Check browser console for errors

**Problem:** Image looks stretched

- Ensure image is high quality
- Try different aspect ratio (portrait vs landscape)
- The `object-cover` CSS will crop if needed

**Problem:** Want to go back to video on mobile

- Delete lines 66-80 in `background-video.tsx`
- Or change breakpoint to 0: `window.innerWidth < 0`

---

**Ready to optimize your mobile experience! 🚀**

Just add your `bg-mobile.jpg` and you're all set.
