# Customization Guide

Quick reference for personalizing your portfolio dashboard.

## 🎯 Quick Edits

### 1. Profile Photo

Update your profile photo in `/public/photos/`:

1. Replace `/public/photos/austin_johnson_profile.jpg` with your own photo
2. Or update the path in `/components/hero-section.tsx`:

```tsx
<Image
  src='/photos/your-photo.jpg'
  alt='Your Name'
  width={160}
  height={160}
  className='w-full h-full object-cover'
  priority
/>
```

**Tip:** Use a square photo (1:1 aspect ratio) for best results in the circular frame.

### 2. Social Links

Update in `/components/widgets/contact-widget.tsx`:

```tsx
<a href="mailto:your-email@example.com">
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
```

### 3. Personal Information

**About Widget** (`/components/widgets/about-widget.tsx`):

- Edit the paragraph text to reflect your background

**Skills Widget** (`/components/widgets/skills-widget.tsx`):

- Modify `technicalSkills` and `professionalSkills` arrays

**Experience Widget** (`/components/widgets/experience-widget.tsx`):

- Update the `experiences` array with your work history

**Projects Widget** (`/components/widgets/projects-widget.tsx`):

- Customize the `projects` array with your portfolio items
- Add real links instead of "#"

### 4. Theme Colors

Modify color variables in `/app/globals.css`:

```css
/* Light theme */
:root {
  --primary: oklch(0.205 0 0);
  /* ... other colors */
}

/* Dark theme */
.dark {
  --primary: oklch(0.922 0 0);
  /* ... other colors */
}
```

### 5. Background Video (Automatic Discovery)

The site **automatically scans** `/public/wallpapers/` and randomly selects a video on each page load.

**Add more videos:**

Just drop video files into `/public/wallpapers/` - no code changes needed!

**Supported formats:** `.mp4`, `.webm`, `.ogg`, `.mov`

**Adjust playback speed** in `/components/background-video.tsx`:

```tsx
const playbackRate = 0.5 // 0.5 = 50% speed, 1.0 = normal
```

This applies to ALL videos automatically.

**Use a specific video** (disable random):

Comment out the API fetch and set directly:

```tsx
const [selectedVideo] = useState<string>("/wallpapers/aj_beach.mp4")
```

**Disable video completely:**

Remove `<BackgroundVideo />` from `/app/page.tsx`.

## 🎨 Layout Adjustments

### Widget Grid Layout

Modify grid in `/app/page.tsx`:

```tsx
// Current layout
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
  {/* widgets */}
</div>

// Adjust spans with lg:col-span-X classes
```

### Widget Order

Rearrange widget components in `/app/page.tsx` to change display order.

## 🔧 Adding New Widgets

1. Create new widget in `/components/widgets/your-widget.tsx`:

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { YourIcon } from "lucide-react"

export function YourWidget() {
  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <YourIcon className='h-5 w-5' />
          Widget Title
        </CardTitle>
      </CardHeader>
      <CardContent>{/* Your content */}</CardContent>
    </Card>
  )
}
```

2. Import and add to `/app/page.tsx`:

```tsx
import { YourWidget } from "@/components/widgets/your-widget"

// In the grid:
;<div>
  <YourWidget />
</div>
```

## 📱 Responsive Breakpoints

- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large screens)

## 💡 Tips

1. Use the glass-widget class for consistent styling
2. Keep dark mode in mind when choosing colors
3. Test on mobile, tablet, and desktop sizes
4. Icons from lucide-react: [https://lucide.dev](https://lucide.dev)

## 🎭 Icon Options

Browse and search icons at [Lucide Icons](https://lucide.dev) - just import and use:

```tsx
import { IconName } from "lucide-react"
```

---

Need help? Check the main README.md for more details!
