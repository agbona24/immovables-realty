/**
 * Upload Gallery Images to Sanity
 * 
 * Run: SANITY_API_TOKEN="your-token" npx tsx scripts/upload-gallery-images.ts
 */

import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('\n❌ Error: SANITY_API_TOKEN environment variable is required.\n');
  process.exit(1);
}

const client = createClient({
  projectId: 'ih6y25kt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false,
});

// Gallery images from public/images
const galleryImages = [
  { file: 'gal 1.jpeg', title: 'Property View 1', category: 'properties' },
  { file: 'gal 2.jpeg', title: 'Property View 2', category: 'properties' },
  { file: 'gal 3.jpeg', title: 'Property View 3', category: 'properties' },
  { file: 'gal 4.jpeg', title: 'Property View 4', category: 'properties' },
  { file: 'gal 5.jpeg', title: 'Property View 5', category: 'properties' },
  { file: 'gal 6.jpeg', title: 'Property View 6', category: 'properties' },
  { file: 'gal 7.jpeg', title: 'Property View 7', category: 'properties' },
  { file: 'gal 8.jpeg', title: 'Property View 8', category: 'properties' },
  { file: 'gal 9.jpeg', title: 'Property View 9', category: 'properties' },
  { file: 'gal 10.jpeg', title: 'Property View 10', category: 'properties' },
  { file: 'gal 11.jpeg', title: 'Property View 11', category: 'properties' },
  { file: 'gal 12.jpeg', title: 'Property View 12', category: 'properties' },
  { file: 'gal 13.jpeg', title: 'Property View 13', category: 'properties' },
  { file: 'gal 14.jpeg', title: 'Property View 14', category: 'properties' },
  { file: 'gal 15.jpeg', title: 'Property View 15', category: 'properties' },
  { file: 'gal 16.jpeg', title: 'Property View 16', category: 'properties' },
  { file: 'gal 17.jpeg', title: 'Property View 17', category: 'properties' },
  { file: 'gal 18.jpeg', title: 'Property View 18', category: 'properties' },
  { file: 'gal 19.jpeg', title: 'Property View 19', category: 'properties' },
  { file: 'gal 20.jpeg', title: 'Property View 20', category: 'properties' },
  { file: 'prime haven 2.jpeg', title: 'Prime Haven Estate 1', category: 'estates' },
  { file: 'prime haven 3.jpeg', title: 'Prime Haven Estate 2', category: 'estates' },
  { file: 'prime haven 4.jpeg', title: 'Prime Haven Estate 3', category: 'estates' },
  { file: 'Prive Haven.jpeg', title: 'Prime Haven Estate 4', category: 'estates' },
  { file: 'Prime Haven Groven.jpeg', title: 'Prime Haven Grove', category: 'estates' },
  { file: 'wura gardens estate.jpeg', title: 'Wura Garden Estate 1', category: 'estates' },
  { file: 'wura gardens.jpeg', title: 'Wura Garden Estate 2', category: 'estates' },
  { file: 'wura gardens kids.jpeg', title: 'Wura Garden Kids Area', category: 'estates' },
];

async function uploadGalleryImages() {
  console.log('\n🖼️  Uploading Gallery Images to Sanity\n');
  console.log('='.repeat(50));

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < galleryImages.length; i++) {
    const img = galleryImages[i];
    const fullPath = path.join(process.cwd(), 'public', 'images', img.file);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Not found: ${img.file}`);
      failCount++;
      continue;
    }

    try {
      // Upload the image asset
      const imageBuffer = fs.readFileSync(fullPath);
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: img.file,
      });

      // Create the galleryImage document
      const doc = {
        _type: 'galleryImage',
        _id: `gallery-image-${i + 1}`,
        title: img.title,
        category: img.category,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
        order: i + 1,
      };

      await client.createOrReplace(doc);
      console.log(`✅ Uploaded: ${img.title}`);
      successCount++;
    } catch (error: any) {
      console.error(`❌ Failed: ${img.file} - ${error.message}`);
      failCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Success: ${successCount} | ❌ Failed: ${failCount}\n`);
}

uploadGalleryImages().catch(console.error);
