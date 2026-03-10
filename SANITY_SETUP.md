# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for Immovables Realty website content management.

## Step 1: Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up or log in
2. Click "Create new project"
3. Enter project name: `immovables-realty`
4. Select "Create empty project"
5. Choose your preferred dataset name (e.g., `production`)

## Step 2: Configure Environment Variables

After creating your project, get your Project ID from the Sanity dashboard.

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update the Sanity variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

## Step 3: Set Up CORS Origins

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **CORS origins**
4. Add the following origins:
   - `http://localhost:3000` (for local development)
   - `https://immovablesrealty.com` (your production domain)
   - `https://www.immovablesrealty.com` (if using www)

## Step 4: Access Sanity Studio

After configuring your environment variables, start your development server:

```bash
npm run dev
```

Access the Sanity Studio at: `http://localhost:3000/studio`

## Step 5: Create Initial Content

Once in the Studio, you can manage:

### Content Types

| Type | Description |
|------|-------------|
| **Properties** | Real estate listings with images, pricing, features |
| **Estates** | Featured estate developments (Prime Haven, Wura Garden) |
| **Blog Posts** | Articles, market insights, and company news |
| **Testimonials** | Customer reviews and success stories |
| **Services** | Service offerings with descriptions |
| **Gallery Images** | Photo gallery for marketing |
| **Pages** | Custom pages with rich content |
| **Site Settings** | Global settings like contact info, social links |

### Recommended Setup Order

1. **Site Settings** - Configure contact info, social links first
2. **Estates** - Add your flagship estates
3. **Properties** - Add property listings
4. **Testimonials** - Add customer testimonials
5. **Blog Posts** - Add articles and news
6. **Gallery** - Upload gallery images

## Step 6: API Token for Preview (Optional)

To enable draft preview mode:

1. Go to **API** → **Tokens** in your Sanity dashboard
2. Click "Add API token"
3. Name: `Preview Token`
4. Permissions: `Viewer`
5. Copy the token to `SANITY_API_READ_TOKEN` in `.env.local`

## Content Schema Overview

### Property Schema
- Title, location, price
- Property type (Estate/House/Land/Commercial)
- Status (Available/Selling Fast/Few Units Left/Sold Out)
- Features and amenities
- Images and gallery
- Contact information
- GPS coordinates for map

### Estate Schema
- Name and tagline
- Description and features
- Price list with plot sizes
- Amenities with icons
- Payment plans
- Gallery images

### Blog Post Schema
- Title, excerpt, full content (rich text)
- Category and tags
- Author information
- Featured image
- Publication date

### Testimonial Schema
- Client name, role, location
- Rating (1-5 stars)
- Testimonial text
- Profile image (optional)

## Deployment Notes

When deploying to production:

1. Ensure all environment variables are set in your hosting platform
2. Add your production domain to Sanity CORS origins
3. The Studio will be accessible at `your-domain.com/studio`

## Troubleshooting

### Studio Not Loading
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Verify CORS origins include your current domain

### Images Not Displaying
- Ensure `cdn.sanity.io` is in your Next.js image domains (already configured)
- Check that image assets are published (not just drafts)

### Content Not Updating
- Clear Next.js cache: `rm -rf .next`
- Check if content is published (green indicator in Studio)

## Need Help?

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-guide)
- [Sanity Community Slack](https://slack.sanity.io/)
