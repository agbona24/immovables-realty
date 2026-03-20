/**
 * Publish All Sanity Documents
 * 
 * This script publishes all draft documents in Sanity.
 * Documents created via API are drafts by default.
 * 
 * Run: SANITY_API_TOKEN="your-token" npx tsx scripts/publish-all.ts
 */

import { createClient } from '@sanity/client';

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

async function publishAll() {
  console.log('\n📤 Publishing All Sanity Documents\n');
  console.log('='.repeat(50));

  // Get all document types
  const types = ['property', 'blogPost', 'estate', 'testimonial', 'galleryImage', 'siteSettings'];
  
  for (const type of types) {
    console.log(`\n📦 Processing ${type}...`);
    
    // Fetch all documents of this type (including drafts)
    const query = `*[_type == "${type}"]{ _id, _rev, title, name }`;
    const documents = await client.fetch(query);
    
    console.log(`   Found ${documents.length} documents`);
    
    for (const doc of documents) {
      const docId = doc._id;
      const displayName = doc.title || doc.name || docId;
      
      // If it's a draft, get the draft and publish it
      if (docId.startsWith('drafts.')) {
        const publishedId = docId.replace('drafts.', '');
        try {
          // Copy draft to published
          const draftDoc = await client.getDocument(docId);
          if (draftDoc) {
            const { _id, _rev, ...rest } = draftDoc;
            await client.createOrReplace({
              _id: publishedId,
              ...rest,
            });
            // Delete the draft
            await client.delete(docId);
            console.log(`   ✅ Published: ${displayName}`);
          }
        } catch (error: any) {
          console.error(`   ❌ Failed to publish ${displayName}:`, error.message);
        }
      } else {
        // Already published, just verify
        console.log(`   ✓ Already published: ${displayName}`);
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('✅ Done!\n');
}

publishAll().catch(console.error);
