# Favicon Setup Guide

## Quick Setup

### Option 1: Using Favicon Generator (Recommended)

1. Visit [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. Upload your IMMOVABLES REALTY logo (ideally 512x512px or larger)
3. Customize the favicon for different platforms:
   - iOS (Apple Touch Icon)
   - Android (Web App Manifest)
   - Windows (Browser Config)
   - macOS Safari (Pinned Tab)
4. Download the generated package
5. Extract all files to `/public/` directory

### Option 2: Manual Setup

Create the following files in the `/public/` directory:

1. **favicon.ico** (16x16, 32x32, 48x48 multi-size)
2. **apple-touch-icon.png** (180x180)
3. **favicon-16x16.png**
4. **favicon-32x32.png**
5. **android-chrome-192x192.png**
6. **android-chrome-512x512.png**

## Design Guidelines

### Logo Colors
- Primary: Royal Blue (#0C3B82)
- Accent: Vibrant Orange (#F47A20)
- Background: White or Blue

### Simple Favicon Design Ideas
1. **"IR" Monogram**: White "IR" letters on blue background
2. **House Icon**: Stylized house in orange and blue
3. **Initial "I"**: Bold "I" with small house icon
4. **Logo Mark**: Simplified version of full logo

## Files Already Configured

The website is already configured to use these favicon files in `src/app/layout.tsx`. Simply add the files to the `/public/` directory.

## Quick Test Checklist

After adding favicons:
- [ ] Browser tab shows icon
- [ ] Bookmark shows icon
- [ ] iOS home screen shows icon (when website is added)
- [ ] Android home screen shows icon
- [ ] Icons look clear at all sizes

## Temporary Placeholder

Until custom favicons are created, Next.js will use its default favicon. This won't affect functionality but should be replaced for branding.

## Web App Manifest

Create `/public/site.webmanifest`:

```json
{
  "name": "IMMOVABLES REALTY",
  "short_name": "Immovables",
  "description": "Smart Real Estate Solutions: Invest, Buy, or Sell with Confidence",
  "theme_color": "#0C3B82",
  "background_color": "#ffffff",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Browser Config

Create `/public/browserconfig.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#0C3B82</TileColor>
        </tile>
    </msapplication>
</browserconfig>
```
