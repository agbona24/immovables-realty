# Logo Upload Guide

## Logo Files Needed

Upload your IMMOVABLES REALTY logo files to the `/public/images/` directory:

### 1. Main Logo
- **Filename**: `logo.png` or `logo.svg`
- **Location**: `/public/images/logo.png`
- **Recommended Size**:
  - PNG: 400x100px (or proportional)
  - SVG: Any size (vector)
- **Background**: Transparent preferred
- **Usage**: Navbar, footer, general branding

### 2. Logo Variations (Optional)

#### White Version (for dark backgrounds)
- **Filename**: `logo-white.png` or `logo-white.svg`
- **Location**: `/public/images/logo-white.png`
- **Usage**: Footer (on blue background)

#### Square/Icon Version
- **Filename**: `logo-icon.png`
- **Size**: 512x512px
- **Usage**: Favicons, social media, app icons

### 3. Open Graph Image (for social sharing)
- **Filename**: `og-image.jpg`
- **Location**: `/public/og-image.jpg`
- **Size**: 1200x630px
- **Content**: Your logo + tagline on branded background
- **Usage**: Facebook, LinkedIn, Twitter previews

## Current Setup

The website is configured to use:
- **Navbar Logo**: `/images/logo.png` (with text fallback)
- **Footer Logo**: `/images/logo-white.png` (with text fallback)
- **SEO Logo**: `/images/logo.png`
- **OG Image**: `/og-image.jpg`

## File Formats

### Recommended Formats:
1. **SVG** - Best for logos (scalable, small file size)
2. **PNG** - Good for logos with transparency
3. **JPG** - Only for photos/OG images (no transparency)

### File Size Limits:
- Logo files: < 100KB
- OG image: < 500KB

## Design Guidelines

### Logo Usage:
- Maintain aspect ratio
- Use on appropriate backgrounds (contrast)
- Include "IMMOVABLES REALTY" text in logo
- Brand colors: Royal Blue (#0C3B82) and Orange (#F47A20)

### Quick Upload:
1. Place logo files in `/public/images/`
2. Refresh the website
3. Logo will appear automatically in navbar and footer

## Testing After Upload

- [ ] Logo displays correctly in navbar (desktop and mobile)
- [ ] Logo displays in footer
- [ ] Logo is not pixelated or blurry
- [ ] Logo maintains brand colors
- [ ] Logo is visible on both light and dark backgrounds

## Current Fallback

Until you upload the logo, the website displays:
- Text-based logo: "IR" badge with "IMMOVABLES REALTY" text
- This ensures the site looks professional while you prepare logo files
