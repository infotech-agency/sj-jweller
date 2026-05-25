# Deployment Guide - Soni Jewellery

Complete guide for deploying the luxury jewelry portfolio website.

## Pre-Deployment Checklist

- [ ] Update metadata in `app/layout.tsx` (title, description, social images)
- [ ] Configure theme colors and fonts
- [ ] Update Navigation links and content
- [ ] Replace placeholder images with real jewelry photos
- [ ] Update contact information in Footer and Contact section
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Verify all animations work smoothly
- [ ] Test all forms and interactive elements
- [ ] Run performance audit (Lighthouse)
- [ ] Update README with your brand information

## Vercel (Recommended)

Vercel is the optimal choice for Next.js applications.

### Setup

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit https://vercel.com/new
   - Import your Git repository
   - Click "Deploy"

3. **Configure Domain**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings → Domains
   - Add your custom domain

### Environment Variables (if needed)

Project Settings → Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Automatic Deployments

Deployments trigger automatically on push to main branch. Configure in:
- Settings → Git
- Choose branch for production deployments

---

## Netlify

Alternative deployment platform with excellent Next.js support.

### Setup

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Configure netlify.toml

The file is already configured in your project:

```toml
[build]
command = "npx next build"
publish = ".next"

[[plugins]]
package = "@netlify/plugin-nextjs"
```

### Using Netlify UI

1. Visit https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npx next build`
   - Publish directory: `.next`
5. Deploy

---

## GitHub Pages (Not Recommended)

GitHub Pages works but isn't ideal for dynamic Next.js applications.

To export as static site:

```bash
npm run build
npm run export
```

Then deploy the `out` folder to GitHub Pages.

---

## Docker Deployment

Deploy using Docker on your own server or cloud platform.

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Build and Run

```bash
docker build -t soni-jewellery .
docker run -p 3000:3000 soni-jewellery
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
```

Run with:
```bash
docker-compose up -d
```

---

## AWS Deployment

### Using AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Select your Git provider
   - Authorize and select your repository

2. **Configure Build**
   - Build command: `npm run build`
   - Base directory: `.`

3. **Deploy**
   - Click "Save and deploy"

### Using AWS EC2 + Nginx

1. **SSH into Instance**
   ```bash
   ssh -i your-key.pem ec2-user@your-instance-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```

3. **Clone Repository**
   ```bash
   git clone your-repository-url
   cd your-repository
   npm install
   npm run build
   ```

4. **Use PM2 for Process Management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "soni-jewellery" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## DigitalOcean App Platform

1. **Create App**
   - Visit DigitalOcean App Platform
   - Click "Create App"
   - Select GitHub source
   - Select your repository

2. **Configure**
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

3. **Deploy**
   - Click "Deploy App"

---

## Performance Optimization for Production

### Image Optimization

1. **Compress Images**
   ```bash
   npm install -g imagemin-cli
   imagemin public/images --out-dir=public/images
   ```

2. **Use WebP Format**
   - Convert images to WebP for better compression
   - Serve with fallback to JPG

### Enable Caching

Add to `next.config.js`:

```javascript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};
```

### Database Setup (if needed)

For future database needs, configure Supabase:

1. Create Supabase project
2. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   SUPABASE_SERVICE_ROLE_KEY=your_key
   ```

---

## DNS Configuration

### Point Domain to Vercel

1. **Get Vercel's nameservers**
   - Project settings → Domains
   - Copy provided nameservers

2. **Update Domain Registrar**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update nameservers to Vercel's nameservers

Or use CNAME:
```
www.your-domain.com → cname.vercel.com
```

---

## SSL/TLS Certificate

### Automatic (Recommended)

Vercel and Netlify automatically provision and renew SSL certificates.

### Manual

For self-hosted:
```bash
sudo certbot certonly --standalone -d your-domain.com
```

---

## Monitoring & Analytics

### Add Google Analytics

Add to `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Add Sentry for Error Tracking

```bash
npm install @sentry/nextjs
```

Configure in `next.config.js`:

```javascript
const withSentry = require('@sentry/nextjs').withSentry;

module.exports = withSentry(nextConfig, {
  org: 'your-org',
  project: 'your-project',
});
```

---

## Backup & Security

### Git Backups

- Repository backed up on GitHub
- Configure automatic backups if self-hosted

### Security Headers

Add to `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ];
}
```

---

## Post-Deployment

### Verify Deployment

1. Visit your deployed URL
2. Test responsive design
3. Verify animations work
4. Check form submissions
5. Test theme switcher
6. Verify images load properly

### Performance Audit

Run Lighthouse audit:
```bash
npm install -g lighthouse
lighthouse https://your-domain.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Set Up CI/CD

GitHub Actions example (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Troubleshooting

### Build Fails

1. Check Node version: `node --version` (should be 18+)
2. Clear cache: `npm cache clean --force`
3. Reinstall: `rm -rf node_modules && npm install`
4. Check logs: `npm run build 2>&1 | tail -50`

### Slow Performance

1. Run Lighthouse audit
2. Optimize images
3. Check third-party scripts
4. Enable caching headers
5. Use CDN for images (Cloudflare, Imgix)

### Animations Not Working

1. Check browser support
2. Verify Framer Motion loaded
3. Check DevTools console for errors
4. Disable browser extensions

### Theme Not Persisting

Check localStorage:
- Open DevTools
- Application tab
- LocalStorage → your-domain
- Verify `jewelry-theme` key exists

---

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Netlify Docs: https://docs.netlify.com/
