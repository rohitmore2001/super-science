# Installation Instructions

Follow these steps to set up your Super Science Academy Next.js website.

## 📋 Prerequisites

Ensure you have these installed:
- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

### Check Your Installation

```bash
node --version  # Should be v18.x or higher
npm --version   # Should be v9.x or higher
```

---

## 🚀 Step-by-Step Installation

### Step 1: Navigate to Project Directory

```bash
cd path/to/SuperScience
```

### Step 2: Install Dependencies

This will install all required packages (Next.js, React, Tailwind, etc.):

```bash
npm install
```

**Expected time**: 2-3 minutes

**You should see**:
```
added 350 packages in 2m
```

### Step 3: Copy Your Assets

#### Option A: From Old Project

If you have the old HTML project:

```bash
# Create directories
mkdir -p public/assets/images/imgs

# Copy images (adjust path to your old project)
cp -r path/to/old-project/assets/images/* public/assets/images/
```

#### Option B: Manual Copy

1. Create folder: `public/assets/images/imgs/`
2. Copy these files:
   - All gallery images → `public/assets/images/imgs/`
   - Course images → `public/assets/images/`
   - Video file → `public/assets/images/super-video.mp4`

**Required files:**
```
public/assets/images/
├── imgs/
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img6.jpg
│   ├── img8.jpg
│   ├── img10.jpg
│   ├── img11.jpg
│   ├── img12.jpg
│   └── img13.jpg
├── meeting-01.jpg
├── meeting-02.jpg
├── meeting-03.jpg
├── meeting-04.jpg
├── single-meeting.jpg
└── super-video.mp4
```

### Step 4: Start Development Server

```bash
npm run dev
```

**You should see**:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

### Step 5: Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

**You should see**: Your homepage with hero video, services, courses, etc.

---

## ✅ Verify Installation

### Check These Pages:

1. **Home Page** (`/`)
   - [ ] Hero section with video
   - [ ] Services grid (9 cards)
   - [ ] Courses section (6 courses)
   - [ ] About section
   - [ ] Facts & statistics
   - [ ] Contact form

2. **Gallery Page** (`/gallery`)
   - [ ] Gallery grid with 9 images
   - [ ] Hover effects working

3. **Course Pages** (`/courses/foundation-course`)
   - [ ] Course details display
   - [ ] Images load correctly

4. **Navigation**
   - [ ] Header links work
   - [ ] Mobile menu works
   - [ ] Smooth scrolling works

---

## 🔧 Common Installation Issues

### Issue: `npm install` fails

**Error**: `EACCES permission denied`

**Fix**:
```bash
sudo npm install -g npm@latest
# Or use nvm (recommended)
```

**Error**: `Cannot find module`

**Fix**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Error**: `Port 3000 is already in use`

**Fix**:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Images not loading

**Error**: 404 errors for images in console

**Fix**:
1. Check images are in `public/assets/images/`
2. Verify file names match (case-sensitive)
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: TypeScript errors

**Error**: `Type 'X' is not assignable to type 'Y'`

**Fix**:
```bash
# Check TypeScript version
npm list typescript

# If needed, reinstall
npm install typescript@latest --save-dev
```

---

## 🎨 Customization After Installation

### 1. Update Contact Information

Edit `src/components/home/ContactSection.tsx`:

```typescript
const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone Number',
    details: ['YOUR-PHONE-1', 'YOUR-PHONE-2'], // Change here
  },
  // ...
];
```

### 2. Update Social Media Links

Edit `src/components/layout/Header.tsx`:

```typescript
const socialLinks = [
  { icon: FaFacebook, href: 'YOUR_FACEBOOK_URL' }, // Change here
  { icon: FaInstagram, href: 'YOUR_INSTAGRAM_URL' },
  // ...
];
```

### 3. Update Course Information

Edit `src/data/courses.ts` to modify course details.

---

## 📦 Build for Production

Before deploying, create a production build:

```bash
npm run build
```

**Expected output**:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization

Route (app)                              Size
┌ ○ /                                    142 kB
├ ○ /courses/[slug]                      89 kB
└ ○ /gallery                             98 kB
```

Test the production build locally:

```bash
npm start
```

---

## 🚀 Deploy to Vercel

### Method 1: GitHub (Recommended)

1. **Create GitHub repository**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and your site is live!
```

---

## 📱 Mobile Testing

### Test on Your Phone

1. Find your computer's IP:
```bash
# Mac/Linux
ipconfig getifaddr en0

# Windows
ipconfig
```

2. On your phone, open:
```
http://YOUR_IP_ADDRESS:3000
```

3. Test:
   - [ ] Mobile menu works
   - [ ] Images load
   - [ ] Animations smooth
   - [ ] Forms work
   - [ ] Touch gestures work

---

## 🔄 Updating the Site

### Development Workflow

1. **Make changes** to your files
2. **See changes** instantly (hot reload)
3. **Test** in browser
4. **Build** with `npm run build`
5. **Deploy** (Git push → auto-deploy)

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update all
npm update

# Update specific package
npm update next@latest
```

---

## 📚 Next Steps

1. ✅ Installation complete
2. → Customize content (courses, contact info)
3. → Add your images
4. → Test thoroughly
5. → Deploy to Vercel
6. → Set up custom domain
7. → Monitor and optimize

---

## 🆘 Need Help?

### Documentation
- `README.md` - Complete guide
- `QUICK_START.md` - Quick setup
- `DEPLOYMENT.md` - Deployment guide
- `MIGRATION_GUIDE.md` - Migration help

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vercel Support](https://vercel.com/support)

### Contact
- **Email**: sbpsuperscience@gmail.com
- **Phone**: 02327-222077

---

## ✅ Installation Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Assets copied to `public/assets/images/`
- [ ] Dev server running (`npm run dev`)
- [ ] Home page loads correctly
- [ ] Gallery page works
- [ ] Course pages work
- [ ] Contact info updated
- [ ] Social links updated
- [ ] Production build successful (`npm run build`)
- [ ] Ready to deploy!

---

**Congratulations!** 🎉 Your installation is complete!

Run `npm run dev` and start building your amazing website.

