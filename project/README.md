# Soni Jewellery - Luxury Jewelry Portfolio Website

A premium, production-ready luxury jewelry portfolio website built with Next.js 15, Framer Motion, and Tailwind CSS. This is not an ecommerce store, but a sophisticated editorial-style showcase for a high-end jewelry brand.

## Features

### Design & Aesthetics
- **Luxury Theme System**: Dynamic CSS variables supporting 3 preset themes (Rose Gold, Emerald Royal, Black Gold Premium)
- **Premium Typography**: Cormorant Garamond headings, Great Vibes script accents, Inter body text
- **Glassmorphism Effects**: Frosted glass UI elements with backdrop blur
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Sparkle Effects**: Click-triggered sparkle particle effects across the website
- **Responsive Design**: Fully responsive from mobile to desktop

### Sections
1. **Hero Section** - Fullscreen luxury introduction with parallax effects
2. **Collections** - Grid showcase of jewelry categories (Rings, Necklaces, Bracelets, Earrings)
3. **Brand Values** - Core values presentation with hover animations
4. **Gallery** - Masonry portfolio gallery with modal previews
5. **About** - Brand story with floating information cards
6. **Contact/Inquiry** - Luxury contact form with smooth interactions
7. **Footer** - Newsletter subscription and social links

### Interactive Features
- **Theme Switcher**: Instant theme switching with smooth transitions
- **Sticky Navigation**: Header that transforms on scroll with theme switching
- **Particle Effects**: Sparkle burst on click throughout the site
- **Hover Animations**: Scale, glow, and reveal animations on interactive elements
- **Smooth Scrolling**: Native scroll behavior with smooth transitions
- **Modal Gallery**: Full-screen image previews with lightbox effect

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Great Vibes, Inter)
- **Images**: Pexels stock photos

## Project Structure

```
├── app/
│   ├── globals.css              # Global styles with theme system
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main page component
├── components/
│   ├── Navigation.tsx           # Sticky navigation with theme switcher
│   ├── LuxuryButton.tsx         # Animated luxury button component
│   ├── Footer.tsx               # Footer with social links
│   ├── Sparkles.tsx             # Click sparkle effect handler
│   └── sections/
│       ├── HeroSection.tsx      # Hero with parallax
│       ├── CollectionsSection.tsx # Jewelry categories
│       ├── BrandValuesSection.tsx # Core values
│       ├── GallerySection.tsx   # Portfolio masonry
│       ├── AboutSection.tsx     # Brand story
│       └── ContactSection.tsx   # Inquiry form
├── lib/
│   ├── theme.ts                 # Theme configuration and utilities
│   └── animations.ts            # Framer Motion variants
├── hooks/
│   └── useSparkle.ts            # Sparkle effect hook
└── public/                      # Static assets
```

## Theme System

The website features a dynamic theme system using CSS variables. Three preset themes are included:

### 1. Rose Gold Luxury (Default)
- Primary: Warm rose brown (#b44b2c)
- Secondary: Soft blush pink
- Accent: Warm rose gold
- Ideal for: Classic luxury jewelry

### 2. Emerald Royal
- Primary: Rich emerald green (#2d7466)
- Secondary: Soft mint
- Accent: Deep emerald gold
- Ideal for: Premium, sophisticated brands

### 3. Black Gold Premium
- Primary: Deep black (#1a1a1a)
- Secondary: Bright gold (#f4d03f)
- Accent: Gleaming gold
- Ideal for: Ultra-luxury, minimalist brands

### Customizing Colors

Edit the CSS variables in `app/globals.css` in the `:root` or theme-specific sections:

```css
:root {
  --theme-primary: 12 48% 45%;           /* Primary brand color */
  --theme-secondary: 15 75% 75%;         /* Secondary light color */
  --theme-accent: 18 64% 68%;            /* Accent color */
  --theme-background: 12 50% 97%;        /* Main background */
  --theme-text: 12 38% 28%;              /* Primary text color */
  --theme-muted: 12 25% 62%;             /* Muted text color */
  --theme-card: 12 40% 95%;              /* Card backgrounds */
  --theme-border: 12 35% 88%;            /* Border colors */
  --theme-gold: 42 89% 60%;              /* Gold accent */
}
```

Colors use HSL format for easy manipulation. Update any value to change the entire theme.

## Animation System

### Framer Motion Variants

Reusable animation variants are defined in `lib/animations.ts`:

- `fadeUpVariants` - Fade in with upward movement
- `blurRevealVariants` - Blur-to-sharp reveal
- `slideInRightVariants` / `slideInLeftVariants` - Side slide animations
- `scaleInVariants` - Scale up from smaller size
- `floatVariants` - Continuous floating motion
- `containerVariants` / `itemVariants` - Stagger animations for lists
- `hoverScaleVariants` - Hover scale effects
- `pulseGlowVariants` - Pulsing glow animation

Use these variants in components:

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={fadeUpVariants}
>
  Content
</motion.div>
```

## Sparkle Effect

The sparkle effect triggers on any click globally. Customize in `hooks/useSparkle.ts`:

```typescript
const sparkles = createSparkles(e, count); // count = number of particles
```

Customize appearance in `components/Sparkles.tsx`:

```tsx
style={{
  background: `hsl(var(--theme-accent))`,
  boxShadow: `0 0 8px hsl(var(--theme-accent))`,
}}
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Customization Guide

### Changing Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'YourFont', serif;
}
```

### Adding New Sections

1. Create a new component in `components/sections/YourSection.tsx`
2. Use the animation variants and glass effects as templates
3. Import in `app/page.tsx`

### Modifying Theme Colors

1. Edit CSS variables in `app/globals.css`
2. For new themes, add a new `body.theme-name` selector
3. Implement theme switcher in `components/Navigation.tsx`

### Adjusting Animations

- **Speed**: Modify `duration` in animation variants
- **Ease**: Change `ease` property (easeIn, easeOut, easeInOut, linear)
- **Distance**: Adjust `x`, `y`, `scale` values
- **Delay**: Add `delay` in transition object

## Performance Optimizations

- **Image Optimization**: Using Pexels high-quality images with compression
- **CSS-in-JS**: Minimal overhead with Tailwind utilities
- **Font Loading**: Google Fonts with optimal subsets
- **Code Splitting**: Next.js automatic code splitting
- **SEO**: Comprehensive metadata and semantic HTML

## SEO Features

- Dynamic metadata with OpenGraph and Twitter cards
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on images
- Mobile-friendly responsive design
- Fast Core Web Vitals

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers

## Deployment

### Netlify
```bash
npm run build
# Deploy the `.next` folder using Netlify
```

### Vercel
```bash
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Performance Metrics

- **Lighthouse Score**: 90+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: ~56.7 kB (main page)

## Advanced Features

### Custom Cursor (Optional)

Add to `globals.css`:

```css
* {
  cursor: custom-cursor;
}
```

### Page Transitions

Extend layout.tsx with motion layout:

```tsx
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
```

### Dynamic Metadata

Metadata is set in `app/layout.tsx`. Customize brand information there.

## Contributing

This is a template project. Feel free to customize and extend as needed.

## License

This project is provided as-is for demonstration purposes.

## Support

For issues or questions, refer to the documentation in specific component files.

---

**Built with precision and elegance** for luxury brands. Inspired by premium jewelry house websites like Cartier, Tiffany & Co., and modern editorial design principles.
