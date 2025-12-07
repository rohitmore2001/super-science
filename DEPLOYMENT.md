# Deployment Guide

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Prepare Your Code
1. Ensure all your code is committed to Git
2. Push to GitHub, GitLab, or Bitbucket

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your Git provider
3. Click "Add New Project"
4. Import your repository
5. Configure project:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. Click "Deploy"

### Step 3: Domain Setup (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

**Done!** Your site is now live with:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on Git push
- ✅ Preview deployments for branches

---

## Alternative: Deploy to Netlify

### Step 1: Build Settings
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x or higher

### Step 2: Environment Variables
Add any necessary environment variables in Netlify dashboard:
- Go to Site settings → Environment variables
- Add your variables

### Step 3: Deploy
Click "Deploy site" and wait for the build to complete.

---

## Alternative: Deploy to Your Own Server

### Requirements
- Node.js 18.x or higher
- PM2 (for process management)
- Nginx (for reverse proxy)

### Step 1: Build the Application
```bash
npm install
npm run build
```

### Step 2: Set Up PM2
```bash
npm install -g pm2
pm2 start npm --name "super-science" -- start
pm2 save
pm2 startup
```

### Step 3: Configure Nginx
Create a new Nginx configuration file:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

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

### Step 4: Enable HTTPS (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Pre-Deployment Checklist

- [ ] All environment variables are set
- [ ] Images are optimized and in the correct directory
- [ ] Contact form is properly configured
- [ ] All links are working
- [ ] Mobile responsiveness is tested
- [ ] SEO metadata is complete
- [ ] Analytics is configured (if needed)
- [ ] Error pages are tested
- [ ] Build completes without errors: `npm run build`
- [ ] Production build runs locally: `npm start`

---

## Post-Deployment Tasks

1. **Test Your Site**
   - Check all pages load correctly
   - Test forms and interactive elements
   - Verify images and videos load
   - Test on multiple devices and browsers

2. **Set Up Monitoring**
   - Enable Vercel Analytics (if using Vercel)
   - Set up Google Analytics
   - Configure error tracking (Sentry, etc.)

3. **Performance Check**
   - Run Google PageSpeed Insights
   - Check Core Web Vitals
   - Test loading speed from different locations

4. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Verify robots.txt is accessible
   - Check meta tags with SEO tools

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18.x or higher)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure images are in the `public` directory
- Check image paths start with `/`
- Verify Next.js Image configuration in `next.config.mjs`

### Slow Performance
- Enable Next.js Image optimization
- Check for large dependencies
- Use dynamic imports for heavy components
- Enable caching headers

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check variable names match exactly

---

## Continuous Deployment

### Automatic Deployments (Vercel/Netlify)
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Automatic preview links

### Manual Deployment Updates
```bash
git add .
git commit -m "Update content"
git push origin main
```

Your site will automatically rebuild and deploy!

---

## Performance Optimization Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images before upload
   - Use appropriate formats (WebP, AVIF)

2. **Code Optimization**
   - Enable SWC minification (already enabled)
   - Use dynamic imports for large components
   - Implement code splitting

3. **Caching**
   - Configure CDN caching rules
   - Use `stale-while-revalidate` strategy
   - Enable browser caching

4. **Monitoring**
   - Set up real-user monitoring
   - Track Core Web Vitals
   - Monitor error rates

---

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/

For project-specific questions, contact the development team.

