# IMMOVABLES REALTY - Smart Real Estate Solutions

A stunning, professional real estate investment platform built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Featuring dynamic property listings, investment-focused blog content, and comprehensive SEO optimization.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff0055)

## 🌟 Features

### Core Features
- ✨ **Stunning UI/UX** - Professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Next.js 16 with static and dynamic rendering
- 🎯 **SEO Optimized** - Comprehensive meta tags and structured data
- 🔍 **PWA Ready** - Progressive Web App manifest included

### Priority Features Implemented
- 💬 **WhatsApp Integration** - Floating button with instant messaging
- 📧 **EmailJS Contact Form** - Working contact form with validation
- 🏠 **Property Detail Pages** - Individual pages for all 9 properties
- 📝 **Blog Post Pages** - Detailed investment articles
- 📊 **Google Analytics** - Integrated tracking (requires setup)
- 🎨 **Structured Data** - JSON-LD for better search engine understanding

### Sections & Pages
- 🏡 **Hero** - Dynamic landing section with call-to-action
- ℹ️ **About** - Company overview and services
- 🏘️ **Properties** - 9 featured properties with filtering
- ⭐ **Why Choose Us** - Animated statistics and benefits
- 📞 **Contact** - Working form with EmailJS integration
- 📰 **Blog** - 20+ investment-focused articles
- 🔗 **Footer** - Social links and navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone repository
git clone <repository-url>
cd immovables-realty

# Install dependencies
npm install
```

### Environment Setup

Create `.env.local` file:

```bash
# EmailJS (Optional - for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

See `EMAILJS_SETUP.md` and `GOOGLE_ANALYTICS_SETUP.md` for detailed setup instructions.

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
immovables-realty/
├── public/
│   ├── images/
│   │   ├── properties/              # Property banner images
│   │   └── UPLOAD_IMAGES_HERE.md
│   ├── site.webmanifest             # PWA manifest
│   ├── browserconfig.xml            # Windows tiles
│   └── robots.txt                   # SEO directives
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with SEO
│   │   ├── page.tsx                 # Homepage
│   │   ├── globals.css              # Global styles
│   │   ├── blog/
│   │   │   ├── page.tsx             # Blog listing
│   │   │   └── [id]/page.tsx        # Blog post detail
│   │   └── properties/
│   │       └── [id]/page.tsx        # Property detail
│   ├── components/
│   │   ├── Navbar.tsx               # Navigation
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── About.tsx                # About section
│   │   ├── Properties.tsx           # Property listing
│   │   ├── WhyUs.tsx                # Benefits section
│   │   ├── Contact.tsx              # Contact form
│   │   ├── Footer.tsx               # Footer
│   │   ├── WhatsAppButton.tsx       # Floating WhatsApp
│   │   ├── GoogleAnalytics.tsx      # GA integration
│   │   └── StructuredData.tsx       # SEO schema
│   └── data/
│       ├── properties.ts            # Property data
│       └── blogPosts.ts             # Blog content
├── .env.local.example               # Environment template
├── EMAILJS_SETUP.md                 # Email setup guide
├── GOOGLE_ANALYTICS_SETUP.md        # Analytics guide
├── FAVICON_SETUP.md                 # Favicon guide
└── IMPLEMENTATION_SUMMARY.md        # Feature documentation
```

## 🎨 Brand Guidelines

### Colors
- **Primary**: Royal Blue `#0C3B82`
- **Secondary**: Vibrant Orange `#F47A20`
- **Neutral**: Light Grey `#EDEDED`

### Typography
- **Headlines**: Montserrat (Bold/ExtraBold)
- **Body**: Poppins
- **Accent**: Allura (cursive)

## 🏠 Property Listings

9 properties across Abeokuta, Ogun State:

1. Prime Haven Grove Estate - ₦4.5M
2. Wura Gardens Estate - ₦3.2M
3. Prime Haven Groven 4BR Detached - ₦45M
4. Prime Haven Groven Semi-Detached - ₦35M
5. House in Olomore - ₦25M
6. 3 Units (2BR Flats + Self-Con) - ₦18M
7. Blocks of Flats - Prime Area - ₦65M
8. 3 Plots at Gbokoniyi - ₦9M
9. 2 Plots for Sale - ₦6M

## 📝 Blog Content

3 detailed investment articles:
- Ogun State's New International Airport Opportunities
- Ogun State Economic Boom Analysis
- Real Estate Investment Guide for Ogun State

Plus 17 additional article previews covering infrastructure, market trends, and investment strategies.

## 🔧 Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 16.0.3 |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 3.4.1 |
| Animations | Framer Motion 12.23.24 |
| UI Components | Lucide React (icons) |
| Email | EmailJS |
| Analytics | Google Analytics 4 |
| Fonts | Google Fonts CDN |

## 📞 Contact Information

- **Phone**: +234 813 283 3083
- **Email**: info@immovablesrealty.com
- **Office**: 12, Obasanjo Way off Akin Olugbade, Ita Eko, Abeokuta, Ogun State
- **Hours**: Mon-Sat: 9AM-6PM

## 🌐 Social Media

- [Facebook](https://www.facebook.com/immovablesrealty)
- [Twitter/X](https://x.com/immovablesrealt)
- [Instagram](https://www.instagram.com/immovables_realty)
- [LinkedIn](https://www.linkedin.com/)

## 📦 Deployment Checklist

Before deploying:

- [ ] Add environment variables to hosting platform
- [ ] Upload logo files to `/public/images/` (see LOGO_UPLOAD_GUIDE.md)
  - `logo.png` - Main logo for navbar
  - `logo-white.png` - White version for footer (optional)
  - `og-image.jpg` - Social sharing image (1200x630px)
- [ ] Upload property images to `/public/images/properties/`
- [ ] Create and upload favicon files
- [ ] Configure EmailJS account
- [ ] Set up Google Analytics
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test social sharing previews

## 📚 Documentation

- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Complete feature overview
- **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)** - Contact form setup
- **[GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)** - Analytics configuration
- **[FAVICON_SETUP.md](./FAVICON_SETUP.md)** - Favicon creation guide

## 🤝 Contributing

This is a proprietary project for IMMOVABLES REALTY.

## 📄 License

© 2025 IMMOVABLES REALTY. All rights reserved.
RC: 7466982

---

**Built with ❤️ for IMMOVABLES REALTY**
