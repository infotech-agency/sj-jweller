# Customization Guide - Soni Jewellery

Quick reference for customizing the luxury jewelry portfolio website.

## Quick Theme Changes

### Change Active Theme on Load

Edit `app/page.tsx`:

```typescript
useEffect(() => {
  initTheme();
  // Or set a specific theme:
  setTheme('emerald'); // 'rose-gold' | 'emerald' | 'black-gold'
}, []);
```

### Create New Theme

1. Edit `app/globals.css` and add a new selector:

```css
body.theme-sapphire {
  --theme-primary: 200 60% 40%;  /* HSL format */
  --theme-secondary: 200 70% 75%;
  --theme-accent: 200 65% 65%;
  --theme-background: 200 50% 97%;
  --theme-text: 200 40% 25%;
  --theme-muted: 200 25% 55%;
  --theme-card: 200 40% 95%;
  --theme-border: 200 35% 88%;
  --theme-gold: 50 95% 65%;
  --theme-light-bg: 200 60% 98%;
  --theme-overlay: 200 48% 92%;
}
```

2. Add to `lib/theme.ts`:

```typescript
export const themes: Record<ThemeType, ThemeConfig> = {
  // ... existing themes
  'sapphire': {
    name: 'Sapphire Elegance',
    id: 'sapphire',
    description: 'Deep blue with golden accents',
  },
};
```

3. Update Navigation.tsx to include new theme in switcher

## Color Property Reference

All colors use HSL (Hue Saturation Lightness) format:

```
HSL(Hue, Saturation%, Lightness%)

Examples:
--theme-primary: 12 48% 45%;     // Hue 12°, 48% saturation, 45% lightness
--theme-accent: 180 70% 60%;     // Cyan
```

### HSL Color Picker Values

| Color | HSL Value | Usage |
|-------|-----------|-------|
| Rose Gold | 12 48% 45% | Primary brand color |
| Soft Pink | 15 75% 75% | Light accents |
| Emerald | 160 48% 35% | Premium feel |
| Gold | 42 95% 65% | Luxe accents |
| Deep Black | 0 0% 15% | Ultra-luxury |

## Typography Customization

### Change Font Families

Edit `app/globals.css`:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Your Serif Font', serif;  /* Change heading font */
}

body {
  font-family: 'Your Body Font', sans-serif;  /* Change body font */
}

.script-font {
  font-family: 'Your Script Font', cursive;  /* Change script font */
}
```

### Import Custom Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
```

## Component Customization

### Modify Hero Section

`components/sections/HeroSection.tsx`:

- Change hero text content in the motion.h1 element
- Adjust image by changing the `src` prop
- Modify button text and onClick handlers

### Customize Collections Grid

`components/sections/CollectionsSection.tsx`:

- Edit `collections` array to add/remove items
- Change icons, names, descriptions
- Update image URLs

### Extend Gallery

`components/sections/GallerySection.tsx`:

```typescript
const galleryImages = [
  {
    id: 1,
    src: 'https://your-image-url.jpg',
    category: 'Rings',
  },
  // Add more images
];
```

## Animation Customization

### Change Animation Speed

Edit `lib/animations.ts`:

```typescript
export const fadeUpVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,    // Change this value (in seconds)
      ease: 'easeOut',  // or 'easeIn', 'easeInOut', 'linear'
    },
  },
};
```

### Adjust Animation Distance

```typescript
export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,  // Change this value (in pixels)
  },
};
```

### Create Custom Animation

```typescript
export const customVariant: Variants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
```

## Sparkle Effect Customization

### Change Sparkle Count

`hooks/useSparkle.ts`:

```typescript
const sparkles = createSparkles(e, 20);  // Change 20 to desired count
```

### Modify Sparkle Color/Style

`components/Sparkles.tsx`:

```tsx
style={{
  background: `hsl(var(--theme-gold))`,  // Change to any theme color
  boxShadow: `0 0 12px hsl(var(--theme-gold))`,  // Adjust glow
  width: '3px',
  height: '3px',
}}
```

## Navigation Customization

### Add New Navigation Links

`components/Navigation.tsx`:

```typescript
const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Collections', href: '#collections' },
  // Add new item:
  { label: 'Your Page', href: '#your-section' },
];
```

### Change Logo

```tsx
<motion.div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
  Your Logo Here
</motion.div>
```

## Form Customization

### Add Form Fields

`components/sections/ContactSection.tsx`:

```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',  // Add new field
});
```

### Change Form Validation

Modify the input elements to add custom validation attributes

## Footer Customization

### Update Social Links

`components/Footer.tsx`:

```typescript
const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'your-instagram-url' },
  // Update URLs
];
```

### Add Newsletter Functionality

Replace the input with your newsletter service integration (e.g., Mailchimp, ConvertKit)

## Layout & Spacing

### Adjust Section Padding

All sections use `py-20 md:py-32 px-4 sm:px-6 lg:px-8`

Change these Tailwind classes:
- `py-20` - Padding vertical (80px)
- `md:py-32` - Padding on medium screens (128px)
- `px-4` - Padding horizontal (16px)

### Modify Container Width

Default: `max-w-7xl mx-auto`

Change to:
- `max-w-screen-xl` - Wider
- `max-w-5xl` - Narrower
- `max-w-full` - Full width

## Glass Effect Customization

### Change Glass Effect Opacity

In components that use `.glass` class:

```css
.glass {
  background: rgba(255, 255, 255, 0.8);  /* Change 0.8 opacity */
  backdrop-filter: blur(15px);             /* Change blur amount */
}
```

## Responsive Design

### Adjust Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Apply different styles at breakpoints:

```tsx
className="text-lg md:text-2xl lg:text-4xl"
```

## Performance Optimization

### Optimize Images

Use Pexels or your image service with compression:

```
https://images.pexels.com/photo-id?auto=compress&cs=tinysrgb&w=1200
```

### Lazy Load Images

Images in Gallery already use lazy loading. For custom images:

```tsx
<img loading="lazy" src="..." alt="..." />
```

### Reduce Motion for Accessibility

Add to users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Advanced: Adding Pages

### Create New Section Page

1. Create file: `app/collection/page.tsx`
2. Add layout wrapper similar to main page
3. Update Navigation links

```typescript
const navItems = [
  { label: 'Collections', href: '/collection' },
];
```

## Need Help?

- Check main README.md for overview
- Review component files for implementation details
- Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/
- Next.js docs: https://nextjs.org/docs
