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

Update in `/components/hero-section.tsx`:

```tsx
const socialLinks = [
  {
    name: "X (Twitter)",
    url: "https://x.com/YourHandle",
    icon: /* X icon SVG */
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <Github className="h-5 w-5" />,
  },
  // Add or remove social links as needed
]
```

**Email:** Update in `/components/widgets/contact-widget.tsx`:

```tsx
<a href='mailto:your-email@example.com'>
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
- Each project includes:
  - `name`: Project title
  - `description`: 2-3 sentence detailed description
  - `url`: Live project link
  - `image`: Project screenshot (recommended: 800x450px or 600x400px)
  - `tags`: Array of technology badges
- Add project images to `/public/images/` folder

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

### 5. Background Image

The site uses a static background image for optimal performance and fast loading.

**Change the background:**

Simply replace `/public/bg-mobile.jpg` with your desired image.

**Supported formats:** JPG, PNG, WebP

**Recommended sizes:**

- Landscape: 1920x1080px or higher
- Portrait: 1080x1920px or higher

**Optimization tips:**

- Use JPG at 85-90% quality for best balance
- WebP format offers better compression
- Next.js automatically optimizes images during build

**Change image in code** (`/app/page.tsx`):

```tsx
<Image
  src='/your-background.jpg' // Update filename here
  alt='Background'
  fill
  className='object-cover'
  priority
  quality={90}
/>
```

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
