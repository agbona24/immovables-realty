import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ih6y25kt',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkPropertySlugs() {
  try {
    const properties = await client.fetch(`
      *[_type == "property"] {
        _id,
        title,
        "slug": slug.current
      }
    `);

    console.log('\n=== Properties in Sanity ===\n');
    properties.forEach((prop: any, index: number) => {
      console.log(`${index + 1}. ${prop.title}`);
      console.log(`   Slug: ${prop.slug}`);
      console.log(`   URL: /properties/${prop.slug}\n`);
    });

    console.log(`Total properties: ${properties.length}`);
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
}

checkPropertySlugs();
