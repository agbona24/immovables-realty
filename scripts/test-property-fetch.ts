import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ih6y25kt',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

async function testPropertyFetch() {
  const slug = '4-bedroom-fully-detached-duplex-recreational-off-plan';
  
  console.log(`\nTesting property fetch for slug: ${slug}\n`);

  try {
    const query = `*[_type == "property" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      location,
      price,
      description,
      type,
      status,
      features,
      details,
      amenities,
      image,
      gallery,
      coordinates,
      address,
      contactInfo
    }`;

    const property = await client.fetch(query, { slug });

    if (property) {
      console.log('✅ Property found!');
      console.log('Title:', property.title);
      console.log('Slug:', property.slug?.current);
      console.log('Location:', property.location);
      console.log('Price:', property.price);
      console.log('Image:', property.image ? 'Yes' : 'No');
      if (property.image) {
        console.log('Image URL:', urlFor(property.image).url());
      }
    } else {
      console.log('❌ Property NOT found');
    }
  } catch (error) {
    console.error('Error fetching property:', error);
  }
}

testPropertyFetch();
