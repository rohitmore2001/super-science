# Super Science Academy - Next.js Website

A modern, interactive, and highly optimized website for Super Science Academy Gadhinglaj built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Built-in SEO features for better search engine visibility
- **Fast Performance**: Optimized images, code splitting, and lazy loading
- **Dynamic Routing**: Course pages with dynamic routing
- **Interactive Components**: Animated sections with scroll-triggered animations
- **Contact Form**: Fully functional contact form with validation
- **Gallery Page**: Beautiful image gallery with hover effects

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SuperScience
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live with automatic HTTPS and global CDN!

### Manual Deployment

```bash
npm run build
```

Then upload the `.next` folder and other necessary files to your hosting provider.

## 📁 Project Structure

```
SuperScience/
├── public/
│   └── assets/         # Static assets (images, videos)
├── src/
│   ├── app/           # Next.js 14 app directory
│   │   ├── courses/   # Dynamic course pages
│   │   ├── gallery/   # Gallery page
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── home/      # Home page sections
│   │   └── layout/    # Layout components
│   └── data/          # Static data (courses info)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Content

- **Courses**: Edit `src/data/courses.ts`
- **Home Page**: Edit components in `src/components/home/`
- **Contact Info**: Edit `src/components/home/ContactSection.tsx`

## 🌟 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Intersection Observer**: Scroll animations

## 📱 Pages

1. **Home** (`/`) - Hero, Services, Courses, About, Facts, Contact
2. **Gallery** (`/gallery`) - Image gallery showcasing the academy
3. **Course Details** (`/courses/[slug]`) - Individual course pages

## ⚡ Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Tailwind CSS purging for minimal CSS
- Server-side rendering (SSR) where beneficial

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any necessary environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📄 License

Copyright © 2025 Desolve Frames PVT LTD. All Rights Reserved.

## 🤝 Support

For support, email sbpsuperscience@gmail.com or call:
- 02327-222077
- 9371061009
- 9226935427
- 9272335192

## 🏢 Address

Delta Building, Behind Kalyanshetti Hospital,
Church Road, Gadhinglaj

---

**Design**: KM (Knowledge Modulation)
**Developed with**: Next.js, TypeScript, Tailwind CSS, and ❤️

