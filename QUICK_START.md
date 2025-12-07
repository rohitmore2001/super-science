# Quick Start Guide

Get your Super Science Academy website up and running in minutes!

## 🚀 Fast Setup (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Assets

Copy your images and videos to the `public` folder:

```bash
# Create the directories
mkdir -p public/assets/images/imgs

# Copy from old project (adjust path as needed)
cp -r ../SuperScience/assets/images/* public/assets/images/
```

See `PUBLIC_ASSETS_GUIDE.md` for detailed instructions.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## ✏️ Customize Your Content

### Update Contact Information

Edit `src/components/home/ContactSection.tsx`:

```typescript
const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone Number',
    details: ['YOUR-PHONE-1', 'YOUR-PHONE-2'], // Update here
  },
  // ... more fields
];
```

### Update Courses

Edit `src/data/courses.ts` to add/modify courses.

### Update About Section

Edit `src/components/home/AboutSection.tsx` to change the founder information.

## 🎨 Customize Styling

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Change this
    600: '#0284c7',
    // ...
  },
}
```

### Change Fonts

Edit `src/app/globals.css` to import different Google Fonts.

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live in 2 minutes.

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and your site will be deployed!

## 📱 Test Your Site

### Essential Checks

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Course pages load
- [ ] Gallery page displays images
- [ ] Contact form is visible
- [ ] Mobile responsive
- [ ] Video plays on hero section

### Quick Mobile Test

```bash
# Get your local IP
ipconfig getifaddr en0  # Mac
# or
hostname -I  # Linux

# Access from phone: http://YOUR_IP:3000
```

## 🔥 Common Issues & Fixes

### Issue: Images Not Loading
**Fix**: Check `PUBLIC_ASSETS_GUIDE.md` and verify file paths

### Issue: Build Errors
**Fix**: 
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Issue: Slow Performance
**Fix**: Optimize images (see `PUBLIC_ASSETS_GUIDE.md`)

### Issue: TypeScript Errors
**Fix**: Check the error message and ensure all imports are correct

## 📚 Next Steps

1. ✅ Customize content (courses, contact info)
2. ✅ Add your images and videos
3. ✅ Test thoroughly
4. ✅ Deploy to Vercel
5. ✅ Set up custom domain
6. ✅ Add analytics (Google Analytics, etc.)

## 🆘 Need Help?

- Check `README.md` for full documentation
- Check `DEPLOYMENT.md` for deployment guide
- Check `PUBLIC_ASSETS_GUIDE.md` for asset setup

## 💡 Pro Tips

1. **Use Git branches** for testing changes
2. **Test on multiple devices** before deploying
3. **Optimize images** before uploading (use TinyPNG)
4. **Enable Vercel Analytics** for insights
5. **Keep dependencies updated** regularly

## 🎯 Performance Goals

Target these metrics on Google PageSpeed Insights:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Get your GA tracking ID
2. Add to `src/app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

## 🔒 Security Checklist

- [ ] No sensitive data in code
- [ ] Environment variables for secrets
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Form validation on contact form
- [ ] Rate limiting for form submissions (if needed)

---

**You're all set!** Start building your amazing educational website. 🚀

For detailed information, check the full `README.md` file.

