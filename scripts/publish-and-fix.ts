/**
 * Publish All Sanity Documents + Upload Gallery Images
 * 
 * This script:
 * 1. Publishes all draft documents in Sanity
 * 2. Uploads gallery images from /public/images
 * 
 * Run: SANITY_API_TOKEN="your-token" npx tsx scripts/publish-and-fix.ts
 */

import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('\n❌ Error: SANITY_API_TOKEN environment variable is required.');
  process.exit(1);
}

const client = createClient({
  projectId: 'ih6y25kt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false,
});

// Gallery images to upload
const galleryImages = [
  { filename: 'gal 1.jpeg', title: 'Gallery Image 1', category: 'Estates' },
  { filename: 'gal 2.jpeg', title: 'Gallery Image 2', category: 'Estates' },
  { filename: 'gal 3.jpeg', title: 'Gallery Image 3', category: 'Estates' },
  { filename: 'gal 4.jpeg', title: 'Gallery Image 4', category: 'Properties' },
  { filename: 'gal 5.jpeg', title: 'Gallery Image 5', category: 'Properties' },
  { filename: 'gal 6.jpeg', title: 'Gallery Image 6', category: 'Properties' },
  { filename: 'gal 7.jpeg', title: 'Gallery Image 7', category: 'Construction' },
  { filename: 'gal 8.jpeg', title: 'Gallery Image 8', category: 'Construction' },
  { filename: 'gal 9.jpeg', title: 'Gallery Image 9', category: 'Team' },
  { filename: 'gal 10.jpeg', title: 'Gallery Image 10', category: 'Team' },
  { filename: 'gal 11.jpeg', title: 'Gallery Image 11', category: 'Estates' },
  { filename: 'gal 12.jpeg', title: 'Gallery Image 12', category: 'Estates' },
  { filename: 'gal 13.jpeg', title: 'Gallery Image 13', category: 'Properties' },
  { filename: 'gal 14.jpeg', title: 'Gallery Image 14', category: 'Properties' },
  { filename: 'gal 15.jpeg', title: 'Gallery Image 15', category: 'Construction' },
  { filename: 'gal 16.jpeg', title: 'Gallery Image 16', category: 'Construction' },
  { filename: 'gal 17.jpeg', title: 'Gallery Image 17', category: 'Team' },
  { filename: 'gal 18.jpeg', title: 'Gallery Image 18', category: 'Estates' },
  { filename: 'gal 19.jpeg', title: 'Gallery Image 19', category: 'Properties' },
  { filename: 'gal 20.jpeg', title: 'Gallery Image 20', category: 'Estates' },
  { filename: 'prime haven 2.jpeg', title: 'Prime Haven Estate', category: 'Estates' },
  { filename: 'prime haven 3.jpeg', title: 'Prime Haven Development', category: 'Estates' },
  { filename: 'prime haven 4.jpeg', title: 'Prime Haven Grove', category: 'Estates' },
  { filename: 'wura gardens.jpeg', title: 'Wura Garden Estate', category: 'Estates' },
  { filename: 'wura gardens estate.jpeg', title: 'Wura Garden Overview', category: 'Estates' },
];

async function publishAllDrafts() {
  console.log('\n📤 Publishing all draft documents...\n');

  // Get all draft documents
  const drafts = await client.fetch(`*[_id in path("drafts.**")]`);
  
  if (drafts.length === 0) {
    console.log('  ℹ️  No draft documents found');
    return;
  }

  console.log(`  Found ${drafts.length} draft documents`);

  for (const draft of drafts) {
    const publishedId = draft._id.replace('drafts.', '');
    
    try {
      // Delete any existing published version
      await client.delete(publishedId).catch(() => {});
      
      // Create published version from draft
      const publishedDoc = {
        ...draft,
        _id: publishedId,
      };
      
      await client.createOrReplace(publishedDoc);
      
      // Delete the draft
      await client.delete(draft._id);
      
      console.log(`  ✅ Published: ${draft.title || draft.name || publishedId}`);
    } catch (error: any) {
      console.error(`  ❌ Failed to publish ${draft._id}:`, error.message);
    }
  }
}

async function uploadGalleryImages() {
  console.log('\n🖼️  Uploading gallery images...\n');

  let uploaded = 0;
  let skipped = 0;

  for (let i = 0; i < galleryImages.length; i++) {
    const img = galleryImages[i];
    const fullPath = path.join(process.cwd(), 'public', 'images', img.filename);
    const galleryId = `gallery-${i + 1}`;

    // Check if already exists
    const existing = await client.fetch(`*[_type == "galleryImage" && _id == $id][0]`, { id: galleryId });
    if (existing) {
      console.log(`  ⏭️  Skipping ${img.filename} (already exists)`);
      skipped++;
      continue;
    }

    if (!fs.existsSync(fullPath)) {
      console.log(`  ⚠️  File not found: ${img.filename}`);
      continue;
    }

    try {
      // Upload the image
      const imageBuffer = fs.readFileSync(fullPath);
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: img.filename,
      });

      // Create the gallery document
      await client.createOrReplace({
        _type: 'galleryImage',
        _id: galleryId,
        title: img.title,
        category: img.category,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
      });

      console.log(`  ✅ Uploaded: ${img.filename}`);
      uploaded++;
    } catch (error: any) {
      console.error(`  ❌ Failed to upload ${img.filename}:`, error.message);
    }
  }

  console.log(`\n  📊 Gallery: ${uploaded} uploaded, ${skipped} skipped`);
}

async function fixDocumentIds() {
  console.log('\n🔧 Fixing document IDs (removing drafts. prefix from published docs)...\n');

  const types = ['property', 'estate', 'testimonial', 'blogPost', 'siteSettings', 'galleryImage'];
  
  for (const type of types) {
    const docs = await client.fetch(`*[_type == $type]`, { type });
    console.log(`  Found ${docs.length} ${type} documents`);
    
    for (const doc of docs) {
      // If the _id starts with drafts., we need to republish it
      if (doc._id.startsWith('drafts.')) {
        const newId = doc._id.replace('drafts.', '');
        try {
          const newDoc = { ...doc, _id: newId };
          await client.createOrReplace(newDoc);
          await client.delete(doc._id);
          console.log(`    ✅ Fixed: ${doc.title || doc.name || newId}`);
        } catch (error: any) {
          console.error(`    ❌ Failed to fix ${doc._id}:`, error.message);
        }
      }
    }
  }
}

async function main() {
  console.log('🚀 Sanity Fix Script - Publish & Upload Gallery');
  console.log('=' .repeat(50));

  try {
    await publishAllDrafts();
    await fixDocumentIds();
    await uploadGalleryImages();

    console.log('\n' + '=' .repeat(50));
    console.log('✅ All fixes applied successfully!');
    console.log('\nRefresh Sanity Studio to see your content.\n');
  } catch (error: any) {
    console.error('\n❌ Script failed:', error.message);
    process.exit(1);
  }
}

main();
