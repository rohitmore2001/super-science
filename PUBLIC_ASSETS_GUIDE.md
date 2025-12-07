# Public Assets Directory Structure

This guide explains how to organize your assets in the `public` directory.

## 📁 Required Directory Structure

Create the following structure in your `public` folder:

```
public/
└── assets/
    ├── images/
    │   ├── imgs/
    │   │   ├── img1.png
    │   │   ├── img2.jpg
    │   │   ├── img3.jpg
    │   │   ├── img4.jpg
    │   │   ├── img6.jpg
    │   │   ├── img8.jpg
    │   │   ├── img10.jpg
    │   │   ├── img11.jpg
    │   │   ├── img12.jpg
    │   │   └── img13.jpg
    │   ├── meeting-01.jpg
    │   ├── meeting-02.jpg
    │   ├── meeting-03.jpg
    │   ├── meeting-04.jpg
    │   ├── single-meeting.jpg
    │   └── super-video.mp4
    └── (other assets as needed)
```

## 📋 How to Set Up

### Option 1: Copy from Existing Project

If you have the old HTML project:

```bash
# From your project root
mkdir -p public/assets/images/imgs
cp -r path/to/old/project/assets/images/* public/assets/images/
```

### Option 2: Manual Setup

1. Create the directories:
```bash
mkdir -p public/assets/images/imgs
```

2. Copy your images:
   - Gallery images → `public/assets/images/imgs/`
   - Course images → `public/assets/images/`
   - Video → `public/assets/images/super-video.mp4`

## 🖼️ Image Optimization Tips

Before adding images, optimize them:

1. **Compress Images**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB per image

2. **Recommended Formats**
   - Use WebP for better compression
   - Fallback to JPEG for photos
   - PNG for graphics with transparency

3. **Recommended Sizes**
   - Hero images: 1920x1080px
   - Course cards: 800x600px
   - Gallery images: 1200x900px

## 🎥 Video Optimization

The `super-video.mp4` file should be:
- Max size: 10-15MB
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080px or lower
- Duration: Keep under 30 seconds for better performance

**Alternative**: Host videos on YouTube or Vimeo and embed them to reduce bandwidth.

## ⚡ Performance Best Practices

1. **Use Next.js Image Component**
   - Already implemented throughout the site
   - Automatic optimization and lazy loading
   - Responsive image serving

2. **Add Images Gradually**
   - Start with placeholder images
   - Replace with actual images one by one
   - Test performance after each addition

3. **CDN Hosting (Optional)**
   - For production, consider hosting images on:
     - Cloudinary
     - ImageKit
     - Vercel's image optimization (automatic)

## 🔄 Placeholder Images

If you don't have images yet, use placeholder services:

```typescript
// In your components
<Image
  src="https://placehold.co/800x600/0ea5e9/ffffff?text=Course+Image"
  alt="Course"
  width={800}
  height={600}
/>
```

## ✅ Verification

After setting up, verify:

1. All images load correctly:
```bash
npm run dev
# Open http://localhost:3000
```

2. Check these pages:
   - Home page (hero video, course images)
   - Gallery page (all gallery images)
   - Course pages (course images)

3. Check browser console for any 404 errors

## 🐛 Troubleshooting

### Images Not Loading

1. **Check file paths**
   - Paths in code should start with `/assets/images/`
   - File names are case-sensitive

2. **Check file extensions**
   - Ensure `.jpg`, `.png`, etc. match actual files

3. **Restart dev server**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Video Not Playing

1. Check video codec (should be H.264)
2. Try a smaller file size
3. Check browser console for errors
4. Verify path: `/assets/images/super-video.mp4`

## 📝 Notes

- The `public` directory is served at the root URL
- Don't put build artifacts in `public`
- Keep total assets under 50MB for better deployment
- Images are automatically optimized by Next.js in production

---

Need help? Check the main README.md for contact information.

