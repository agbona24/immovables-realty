/**
 * Upload Property Images to Sanity
 * 
 * This script uploads local property images to Sanity and updates the property documents.
 * 
 * Prerequisites:
 * 1. Set SANITY_API_TOKEN environment variable with Editor permissions
 * 
 * Run: npx tsx scripts/upload-property-images.ts
 */

import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('\n❌ Error: SANITY_API_TOKEN environment variable is required.');
  console.error('Run: export SANITY_API_TOKEN="your-token-here"\n');
  process.exit(1);
}

const client = createClient({
  projectId: 'ih6y25kt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false,
});

// Map property IDs to their main images
const propertyImages: Record<string, string> = {
  'property-1': 'house for sale 2.jpeg',
  'property-2': 'house for sale 1.jpeg',
  'property-3': 'land for sale 1.jpeg',
  'property-4': 'house for sale 3.jpeg',
  'property-5': 'land for sale 2.jpeg',
  'property-6': 'house for sale 4.jpeg',
  'property-7': 'land for sale 3.jpeg',
  'property-8': 'house for sale 1.jpeg',
  'property-9': 'prime haven 2.jpeg',
  'property-10': 'prime haven 3.jpeg',
  'property-11': 'wura gardens estate.jpeg',
  'property-12': 'wura gardens.jpeg',
};

// Gallery images for properties
const propertyGalleries: Record<string, string[]> = {
  'property-9': ['prime haven 2.jpeg', 'prime haven 3.jpeg', 'prime haven 4.jpeg', 'Prive Haven.jpeg'],
  'property-10': ['prime haven 3.jpeg', 'prime haven 2.jpeg', 'prime haven 4.jpeg'],
  'property-11': ['wura gardens estate.jpeg', 'wura gardens.jpeg', 'wura gardens kids.jpeg'],
  'property-12': ['wura gardens.jpeg', 'wura gardens estate.jpeg'],
};

async function uploadImage(imagePath: string): Promise<any> {
  const fullPath = path.join(process.cwd(), 'public', 'images', imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`  ⚠️  Image not found: ${imagePath}`);
    return null;
  }
  
  const imageBuffer = fs.readFileSync(fullPath);
  const filename = path.basename(imagePath);
  
  try {
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename,
    });
    console.log(`  ✅ Uploaded: ${filename}`);
    return asset;
  } catch (error: any) {
    console.error(`  ❌ Failed to upload ${filename}:`, error.message);
    return null;
  }
}

async function updatePropertyWithImages() {
  console.log('\n🖼️  Uploading Property Images to Sanity\n');
  console.log('=' .repeat(50));
  
  for (const [propertyId, imageName] of Object.entries(propertyImages)) {
    console.log(`\n📦 Processing ${propertyId}...`);
    
    // Upload main image
    const mainImageAsset = await uploadImage(imageName);
    
    if (!mainImageAsset) {
      console.log(`  ⏭️  Skipping ${propertyId} - no main image`);
      continue;
    }
    
    // Build the update
    const update: any = {
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: mainImageAsset._id,
        },
      },
    };
    
    // Upload gallery images if available
    const galleryImages = propertyGalleries[propertyId];
    if (galleryImages && galleryImages.length > 0) {
      const galleryAssets = [];
      for (const galleryImage of galleryImages) {
        const asset = await uploadImage(galleryImage);
        if (asset) {
          galleryAssets.push({
            _type: 'image',
            _key: `gallery-${Date.now()}-${Math.random().toString(36).substring(7)}`,
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          });
        }
      }
      if (galleryAssets.length > 0) {
        update.gallery = galleryAssets;
      }
    }
    
    // Update the property document
    try {
      await client.patch(propertyId).set(update).commit();
      console.log(`  ✅ Updated ${propertyId} with images`);
    } catch (error: any) {
      console.error(`  ❌ Failed to update ${propertyId}:`, error.message);
    }
  }
  
  console.log('\n' + '=' .repeat(50));
  console.log('✅ Image upload complete!\n');
}

updatePropertyWithImages().catch(console.error);
