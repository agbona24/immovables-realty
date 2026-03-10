/**
 * Sanity CMS Seed Script
 * 
 * This script seeds all static content from the website into Sanity CMS.
 * 
 * Prerequisites:
 * 1. Create a Sanity API Token with write access:
 *    - Go to https://www.sanity.io/manage/project/ih6y25kt/settings/api
 *    - Click "Add API token"
 *    - Name: "Seed Script Token"
 *    - Permissions: "Editor" (needs write access)
 *    - Copy the token
 * 
 * 2. Set the environment variable:
 *    export SANITY_API_TOKEN="your-token-here"
 * 
 * 3. Run the script:
 *    npx tsx scripts/seed-sanity.ts
 */

import { createClient } from '@sanity/client';

// Check for required environment variable
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('\n❌ Error: SANITY_API_TOKEN environment variable is required.');
  console.error('\nTo create a token:');
  console.error('1. Go to https://www.sanity.io/manage/project/ih6y25kt/settings/api');
  console.error('2. Click "Add API token"');
  console.error('3. Set permissions to "Editor" or "Deploy Studio"');
  console.error('4. Run: export SANITY_API_TOKEN="your-token-here"');
  console.error('5. Then run this script again\n');
  process.exit(1);
}

// Create Sanity client with write access
const client = createClient({
  projectId: 'ih6y25kt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false,
});

// ============================================================
// STATIC DATA (copied from src/data files and components)
// ============================================================

// Properties data
const properties = [
  {
    _type: 'property',
    _id: 'property-1',
    title: 'Oke-Ata 2BR Flat',
    slug: { _type: 'slug', current: 'oke-ata-2br-flat' },
    location: 'Oke-Ata Housing Estate, Abeokuta',
    price: '₦35M',
    description: 'Beautiful 2-bedroom flat in the prestigious Oke-Ata Housing Estate. Features include modern finishing, spacious rooms, and excellent neighborhood. All documentation including C of O, Deed of Assignment, Registered Survey, and Receipt are available.',
    propertyType: 'House',
    status: 'Available',
    features: ['2 Bedrooms', 'Modern Finishing', 'Spacious Rooms', 'Good Neighborhood', 'Secure Estate'],
    amenities: ['C of O', 'Deed of Assignment', 'Registered Survey', 'Receipt', 'Estate Security'],
    bedrooms: 2,
    bathrooms: 2,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-2',
    title: 'Property for Sale in Olomore',
    slug: { _type: 'slug', current: 'property-for-sale-olomore' },
    location: 'Olomore, Abeokuta, Ogun State',
    price: '₦100M',
    description: 'Massive construction of 6 Units of 3-Bedroom Flats available with Borehole and Car Wash. Excellent opportunity for rental income and investment. Documentation includes Deed of Assignment and Receipt.',
    propertyType: 'Commercial',
    status: 'Available',
    features: ['6 Units of 3BR Flats', 'Borehole', 'Car Wash', 'Investment Property', 'Rental Income Potential'],
    amenities: ['Deed of Assignment', 'Receipt', 'Borehole', 'Car Wash Facility'],
    bedrooms: 3,
    units: 6,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-3',
    title: 'Land 3 Plots',
    slug: { _type: 'slug', current: 'land-3-plots' },
    location: 'Abeokuta, Ogun State',
    price: '₦18M',
    description: 'Prime land consisting of 3 plots available for sale. Perfect for residential or commercial development. All documentation including C of O, Deed of Assignment, Registered Survey, and Receipt are available.',
    propertyType: 'Land',
    status: 'Available',
    features: ['3 Plots of Land', 'Development Ready', 'Strategic Location', 'Good Access Road'],
    amenities: ['C of O', 'Deed of Assignment', 'Registered Survey', 'Receipt'],
    plotSize: '3 Plots',
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-4',
    title: '7 Blocks of Flats - Liberty Estate',
    slug: { _type: 'slug', current: '7-blocks-liberty-estate' },
    location: 'Liberty Estate, Abeokuta',
    price: '₦145M',
    description: 'Massive 7 blocks of residential flats in the prestigious Liberty Estate. Excellent investment opportunity with high rental potential in a well-established neighborhood.',
    propertyType: 'Commercial',
    status: 'Available',
    features: ['7 Blocks of Flats', 'Liberty Estate', 'High Rental Yield', 'Investment Property'],
    amenities: ['Estate Living', 'Security', 'Good Road Network', 'Stable Electricity'],
    units: 7,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-5',
    title: 'Land For Sale GRA',
    slug: { _type: 'slug', current: 'land-for-sale-gra' },
    location: 'GRA, Abeokuta, Ogun State',
    price: '₦85M',
    description: 'Premium land available in the highly sought-after GRA area of Abeokuta. 2 plots with complete documentation including C of O, Deed of Assignment, Registered Survey, and Receipt.',
    propertyType: 'Land',
    status: 'Available',
    features: ['Premium GRA Location', 'Well-Developed Area', 'High Appreciation Potential'],
    amenities: ['C of O', 'Deed of Assignment', 'Registered Survey', 'Receipt', 'Premium GRA Location'],
    plotSize: '2 Plots',
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-6',
    title: '3 Units + Room & Parlour',
    slug: { _type: 'slug', current: '3-units-room-parlour' },
    location: 'Ire Akari, Olomore, After Federal Housing Estate',
    price: '₦37M',
    description: '3 Units of 2 Bedroom Flat and A Room and Parlour Self Contain. Excellent investment opportunity with Deed of Assignment and Receipt.',
    propertyType: 'House',
    status: 'Available',
    features: ['3 Units 2BR Flats', 'Room & Parlour Self Contain', 'Deed of Assignment', 'Receipt Available', 'Investment Opportunity'],
    amenities: ['Deed of Assignment', 'Receipt', 'Multiple Units', 'Prime Location'],
    bedrooms: 2,
    units: 4,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-7',
    title: '4 Bedroom Flat',
    slug: { _type: 'slug', current: '4-bedroom-flat-adigbe' },
    location: 'Behind Navy School, Adigbe Road, Abeokuta',
    price: '₦53M',
    description: 'Spacious 4-bedroom flat with Registered Survey, Deed of Assignment, Receipt, and Building Approval. Ready for immediate occupation.',
    propertyType: 'House',
    status: 'Available',
    features: ['4 Bedrooms', 'Registered Survey', 'Deed of Assignment', 'Receipt', 'Building Approval', 'Ready for Occupation'],
    amenities: ['Registered Survey', 'Deed of Assignment', 'Receipt', 'Building Approval', 'Prime Location'],
    bedrooms: 4,
    bathrooms: 4,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-8',
    title: '6 Units 3BR Flats + Functional Car Wash',
    slug: { _type: 'slug', current: '6-units-3br-car-wash-olomore' },
    location: 'Olomore, Abeokuta, Ogun State',
    price: '₦100M',
    description: 'Exceptional mixed-use property ideal for investors seeking both residential rental income and commercial cash flow. Features 6 units of spacious 3-bedroom flats alongside a fully operational car wash facility.',
    propertyType: 'Commercial',
    status: 'Available',
    features: ['6 Units of 3-Bedroom Flats', 'Functional Car Wash Facility', 'Dual Income Streams', 'Borehole Water Supply', 'Secure Fencing'],
    amenities: ['Deed of Assignment', 'Registered Survey', 'Building Approval', 'Borehole', 'Good Access Road', 'Commercial Car Wash'],
    bedrooms: 3,
    units: 6,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-9',
    title: 'Prime Haven Grove Estate - 2BR Semi-Detached',
    slug: { _type: 'slug', current: 'prime-haven-2br-semi-detached' },
    location: 'Prime Haven Grove Estate, Abeokuta, Ogun State',
    price: 'Carcass: ₦22M | Fully Completed: ₦40M',
    description: 'Brand-new 2-Bedroom Semi-Detached Home in the prestigious Prime Haven Grove Estate. Available in Carcass or Fully Completed options. Features gated estate living with 24/7 security.',
    propertyType: 'House',
    status: 'Available',
    features: ['2 Bedrooms Semi-Detached', 'Two Purchase Options', 'Prime Haven Grove Estate', 'Gated Estate', '24/7 Security'],
    amenities: ['Gated Estate', '24/7 Security', 'Tarred Roads', 'Estate Power Supply', 'Drainage System', 'Street Lighting'],
    bedrooms: 2,
    bathrooms: 2,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-10',
    title: 'Prime Haven Grove Estate - 3BR Fully Detached',
    slug: { _type: 'slug', current: 'prime-haven-3br-fully-detached' },
    location: 'Prime Haven Grove Estate, Abeokuta, Ogun State',
    price: 'Carcass: ₦25M | Fully Completed: ₦55M',
    description: 'Elegant 3-Bedroom Fully Detached Home in Prime Haven Grove Estate. Features spacious floor plan, master bedroom en-suite, and private backyard.',
    propertyType: 'House',
    status: 'Available',
    features: ['3 Bedrooms Fully Detached', 'Two Purchase Options', 'Master Bedroom En-Suite', 'Private Backyard', 'Ample Parking'],
    amenities: ['Gated Estate', '24/7 Security', 'Tarred Roads', 'Estate Power Supply', 'Drainage System', 'Green Landscape'],
    bedrooms: 3,
    bathrooms: 3,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-11',
    title: 'Prime Haven Grove Estate - 4BR with Recreational Centre',
    slug: { _type: 'slug', current: 'prime-haven-4br-recreational' },
    location: 'Prime Haven Grove Estate, Abeokuta, Ogun State',
    price: 'Carcass: ₦35M | Fully Completed: ₦65M',
    description: 'Luxurious 4-Bedroom Fully Detached Home with Recreational Centre. Features master bedroom en-suite with walk-in closet, family lounge, and dedicated recreational space.',
    propertyType: 'House',
    status: 'Available',
    features: ['4 Bedrooms Fully Detached', 'Recreational Centre', 'Walk-in Closet', 'Family Lounge', 'Large Compound'],
    amenities: ['Gated Estate', '24/7 Security', 'Tarred Roads', 'Estate Power Supply', 'Recreational Centre', 'Perimeter Fencing'],
    bedrooms: 4,
    bathrooms: 4,
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
  {
    _type: 'property',
    _id: 'property-12',
    title: 'Wura Garden Estate - Serene & Secure Land',
    slug: { _type: 'slug', current: 'wura-garden-estate-land' },
    location: 'Abeokuta, Ogun State',
    price: 'Contact for Pricing',
    description: 'Beautifully planned residential estate offering comfort, security, and long-term investment value. Available plot sizes: 300 sqm, 600 sqm, and 900 sqm with flexible payment (40% deposit + 60% balance).',
    propertyType: 'Estate',
    status: 'Available',
    features: ['Plot Sizes: 300/600/900 sqm', '100% Dry Land', 'Gated & Secured', 'Flexible Payment Plan', 'Road Network'],
    amenities: ['Freehold Title', 'Registered Survey', 'Deed of Assignment', 'Gated Estate', 'Electricity Access', 'Street Lighting'],
    plotSize: '300 sqm / 600 sqm / 900 sqm',
    contactPhone: '+234 813 283 3083',
    contactWhatsapp: '2348132833083',
  },
];

// Estates data
const estates = [
  {
    _type: 'estate',
    _id: 'estate-prime-haven',
    name: 'Prime Haven Grove Estate',
    slug: { _type: 'slug', current: 'prime-haven-estate' },
    tagline: 'A Premium, Secure & Fast-Appreciating Estate',
    description: 'Modern residential estate offering comfort, security, and profitable investment. Strategically located in a fast-developing corridor of Abeokuta with verified ownership and flexible payment plans.',
    features: ['Freehold Title', '40% Deposit + 60% Balance', '300/600/900 sqm Plots', '100% Dry Table Land'],
    badge: 'PREMIUM ESTATE',
    color: 'from-brand-blue to-blue-800',
  },
  {
    _type: 'estate',
    _id: 'estate-wura-garden',
    name: 'Wura Garden Estate',
    slug: { _type: 'slug', current: 'wura-garden-estate' },
    tagline: 'A Serene, Secure & Fast-Developing Residential Estate',
    description: 'Beautifully planned residential estate created for comfort, security, and long-term investment value. Located in a peaceful and fast-growing area of Abeokuta with verified documentation.',
    features: ['Registered Survey', 'Flexible Payment Plan', 'Gated & Secured', 'Family-Friendly Community'],
    badge: 'SERENE LIVING',
    color: 'from-brand-orange to-orange-600',
  },
];

// Testimonials data
const testimonials = [
  {
    _type: 'testimonial',
    _id: 'testimonial-1',
    name: 'Adebayo Okonkwo',
    role: 'Real Estate Investor',
    location: 'Lagos',
    initials: 'AO',
    rating: 5,
    text: 'IMMOVABLES REALTY helped me purchase my first investment property in Abeokuta. Their team guided me through every step, from selection to documentation. Six months later, my property value has already appreciated by 15%. Highly recommended!',
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-2',
    name: 'Mrs. Funmilayo Adeleke',
    role: 'Business Owner',
    location: 'Ibadan',
    initials: 'FA',
    rating: 5,
    text: 'I was skeptical about investing in real estate outside Lagos, but IMMOVABLES REALTY changed my perspective. Their market analytics were spot-on, and the flexible payment plan made it achievable. Now I own three properties through them!',
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-3',
    name: 'Engr. Chukwudi Nwosu',
    role: 'Civil Engineer',
    location: 'Abeokuta',
    initials: 'CN',
    rating: 5,
    text: 'As an engineer, I appreciate attention to detail. IMMOVABLES REALTY\'s thorough due diligence and legal verification gave me complete confidence. The team is professional, responsive, and truly committed to client success.',
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-4',
    name: 'Dr. Aminat Bello',
    role: 'Medical Practitioner',
    location: 'Ogun State',
    initials: 'AB',
    rating: 5,
    text: 'The best real estate experience I\'ve ever had! From the initial consultation to property handover, everything was seamless. The team\'s expertise in Ogun State\'s property market is unmatched. My rental income started flowing within two months!',
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-5',
    name: 'Mr. Taiwo Johnson',
    role: 'Entrepreneur',
    location: 'Abuja',
    initials: 'TJ',
    rating: 5,
    text: 'I invested from Abuja without visiting the property physically, thanks to IMMOVABLES REALTY\'s virtual tours and transparent processes. The documentation was flawless, and their after-sales support is exceptional. True professionals!',
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-6',
    name: 'Pastor & Mrs. Olumide',
    role: 'Church Leaders',
    location: 'Ogun State',
    initials: 'PO',
    rating: 5,
    text: 'We wanted to invest wisely for our children\'s future. IMMOVABLES REALTY provided personalized advice and found us the perfect property within our budget. Their integrity and honesty shine through in every interaction. God bless this team!',
  },
];

// Blog posts data (simplified for seeding - full content in markdown)
const blogPosts = [
  {
    _type: 'blogPost',
    _id: 'blog-vision-2030',
    title: 'Our Vision 2030: A Legacy of Trust and Transformation',
    slug: { _type: 'slug', current: 'vision-2030' },
    excerpt: 'Our long-term vision to become one of the most trusted real estate firms in Ogun State by 2030.',
    category: 'Company News',
    publishedAt: '2025-01-15',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Company Leadership',
    tags: ['Vision', 'Company News', 'Growth', 'Trust'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-top-5-communities',
    title: 'Top 5 Fastest-Developing Communities in Abeokuta for Real Estate Investment',
    slug: { _type: 'slug', current: 'top-5-fastest-developing-communities-abeokuta' },
    excerpt: 'Discover the five fastest-developing communities in Abeokuta for real estate investment: Kobape, Bethel Park Estate, Obada-Oko, Oke-Ilewo, and Adigbe/Obantoko.',
    category: 'Market Trends',
    publishedAt: '2025-01-26',
    readTime: '6 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Market Research Team',
    tags: ['Abeokuta', 'Investment', 'Kobape', 'Market Trends', 'Land Banking'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-freehold-documents',
    title: 'Why Freehold, Registered Survey & Deed of Assignment Matter When Buying Land',
    slug: { _type: 'slug', current: 'freehold-registered-survey-deed-of-assignment' },
    excerpt: 'Understand why Freehold, Registered Survey, and Deed of Assignment are essential documents that protect you when buying land in Nigeria.',
    category: 'Education',
    publishedAt: '2025-01-26',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Legal & Documentation Team',
    tags: ['Land Documentation', 'Freehold', 'Registered Survey', 'Deed of Assignment', 'Legal Protection'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-prime-haven-wura-future',
    title: 'The Future of Prime Haven & Wura Garden: What Early Buyers Stand to Gain',
    slug: { _type: 'slug', current: 'prime-haven-wura-garden-future-investment' },
    excerpt: 'Explore the projected appreciation, ongoing developments, and long-term investment potential of Prime Haven and Wura Garden estates.',
    category: 'Investment',
    publishedAt: '2025-01-26',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Market Analysis Team',
    tags: ['Prime Haven', 'Wura Garden', 'Long-Term Investment', 'Appreciation', 'Ogun State'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-start-investing-zero-experience',
    title: 'How to Start Real Estate Investing in Nigeria with Zero Experience',
    slug: { _type: 'slug', current: 'start-real-estate-investing-nigeria-zero-experience' },
    excerpt: 'Real estate investing in Nigeria is now accessible to everyone. Learn how to start with confidence using the Immovables Realty model.',
    category: 'Beginner Guide',
    publishedAt: '2025-01-26',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Investment Advisory Team',
    tags: ['Beginner Guide', 'Real Estate Investing', 'Nigeria', 'Diaspora', 'First-Time Investors'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-december-promo',
    title: 'December Promo Alert: Own Land in Abeokuta for as Low as ₦250,000',
    slug: { _type: 'slug', current: 'december-promo-abeokuta-land-250000' },
    excerpt: 'Take advantage of Immovables Realty\'s December promo and secure affordable land in Abeokuta for as low as ₦250,000.',
    category: 'Promo',
    publishedAt: '2025-01-26',
    readTime: '4 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Sales & Marketing Team',
    tags: ['Promo', 'Abeokuta', 'Affordable Land', 'December Deals', 'Christmas Promo'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-land-banking-flipping',
    title: 'Land Banking & Land Flipping Programs: Build Wealth with Little Capital',
    slug: { _type: 'slug', current: 'land-banking-land-flipping-wealth-building' },
    excerpt: 'Learn how Immovables Realty\'s land banking and land flipping programs help Nigerians build long-term wealth with minimal capital.',
    category: 'Investment',
    publishedAt: '2025-01-26',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Investment Programs Team',
    tags: ['Land Banking', 'Land Flipping', 'Investment', 'Wealth Building', 'Nigeria'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-ogun-state-goldmine-2025',
    title: 'Why Ogun State Is the Next Real Estate Goldmine: Opportunities in 2025',
    slug: { _type: 'slug', current: 'ogun-state-real-estate-goldmine-2025' },
    excerpt: 'Discover why Ogun State is becoming Nigeria\'s next big real estate goldmine in 2025.',
    category: 'Investment',
    publishedAt: '2025-01-26',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Real Estate Investment Advisors',
    tags: ['Investment', 'Ogun State', '2025', 'Real Estate', 'Land Banking'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-airport-opportunities',
    title: 'Ogun State\'s New International Airport | Real Estate Investment Opportunities',
    slug: { _type: 'slug', current: 'ogun-state-airport-opportunities' },
    excerpt: 'A look at how Ogun State\'s newly commissioned international airport is boosting trade, travel, and real estate opportunities.',
    category: 'Infrastructure',
    publishedAt: '2025-01-15',
    readTime: '5 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Real Estate Investment Advisors',
    tags: ['Infrastructure', 'Investment', 'Airport', 'Ogun State'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-ogun-booming',
    title: 'Ogun State Is Booming | Real Estate Investment Opportunities',
    slug: { _type: 'slug', current: 'ogun-state-booming-opportunities' },
    excerpt: 'Highlights Ogun State\'s recent economic surge driven by new infrastructure, positioning it as a top investment destination.',
    category: 'Market Trends',
    publishedAt: '2025-01-12',
    readTime: '4 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Market Analysis Team',
    tags: ['Market Trends', 'Investment', 'Ogun State', 'Economic Growth'],
  },
  {
    _type: 'blogPost',
    _id: 'blog-investment-guide',
    title: 'Ogun State Real Estate Investment Guide',
    slug: { _type: 'slug', current: 'ogun-state-investment-guide' },
    excerpt: 'Explores why Ogun State stands as one of South-West Nigeria\'s most industrious regions and a hotspot for real estate investors.',
    category: 'Investment Guide',
    publishedAt: '2025-01-10',
    readTime: '6 min read',
    authorName: 'IMMOVABLES REALTY',
    authorRole: 'Investment Advisory',
    tags: ['Investment Guide', 'Ogun State', 'Real Estate', 'Strategy'],
  },
];

// Site settings
const siteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  companyName: 'IMMOVABLES REALTY',
  tagline: 'Building Dreams, Creating Value, Securing Futures',
  description: 'Your trusted partner for premium real estate investments in Ogun State, Nigeria. We specialize in verified properties, flexible payment plans, and expert advisory services.',
  phone: '+234 813 283 3083',
  email: 'info@immovablesrealty.com',
  address: 'Abeokuta, Ogun State, Nigeria',
  whatsapp: '2348132833083',
  socialLinks: {
    facebook: 'https://facebook.com/immovablesrealty',
    instagram: 'https://instagram.com/immovablesrealty',
    twitter: 'https://twitter.com/immovablesng',
    linkedin: 'https://linkedin.com/company/immovables-realty',
  },
  officeHours: 'Monday - Saturday: 8AM - 6PM',
};

// ============================================================
// SEED FUNCTIONS
// ============================================================

async function seedProperties() {
  console.log('\n📦 Seeding properties...');
  let created = 0;
  let skipped = 0;

  for (const property of properties) {
    try {
      // Check if document exists
      const existing = await client.getDocument(property._id);
      if (existing) {
        console.log(`  ⏭️  Skipping "${property.title}" (already exists)`);
        skipped++;
        continue;
      }

      await client.createOrReplace(property);
      console.log(`  ✅ Created: ${property.title}`);
      created++;
    } catch (error: any) {
      console.error(`  ❌ Failed to create ${property.title}:`, error.message);
    }
  }

  console.log(`  📊 Properties: ${created} created, ${skipped} skipped`);
}

async function seedEstates() {
  console.log('\n🏘️  Seeding estates...');
  let created = 0;
  let skipped = 0;

  for (const estate of estates) {
    try {
      const existing = await client.getDocument(estate._id);
      if (existing) {
        console.log(`  ⏭️  Skipping "${estate.name}" (already exists)`);
        skipped++;
        continue;
      }

      await client.createOrReplace(estate);
      console.log(`  ✅ Created: ${estate.name}`);
      created++;
    } catch (error: any) {
      console.error(`  ❌ Failed to create ${estate.name}:`, error.message);
    }
  }

  console.log(`  📊 Estates: ${created} created, ${skipped} skipped`);
}

async function seedTestimonials() {
  console.log('\n💬 Seeding testimonials...');
  let created = 0;
  let skipped = 0;

  for (const testimonial of testimonials) {
    try {
      const existing = await client.getDocument(testimonial._id);
      if (existing) {
        console.log(`  ⏭️  Skipping "${testimonial.name}" (already exists)`);
        skipped++;
        continue;
      }

      await client.createOrReplace(testimonial);
      console.log(`  ✅ Created: ${testimonial.name}`);
      created++;
    } catch (error: any) {
      console.error(`  ❌ Failed to create ${testimonial.name}:`, error.message);
    }
  }

  console.log(`  📊 Testimonials: ${created} created, ${skipped} skipped`);
}

async function seedBlogPosts() {
  console.log('\n📝 Seeding blog posts...');
  let created = 0;
  let skipped = 0;

  for (const post of blogPosts) {
    try {
      const existing = await client.getDocument(post._id);
      if (existing) {
        console.log(`  ⏭️  Skipping "${post.title.substring(0, 40)}..." (already exists)`);
        skipped++;
        continue;
      }

      await client.createOrReplace(post);
      console.log(`  ✅ Created: ${post.title.substring(0, 50)}...`);
      created++;
    } catch (error: any) {
      console.error(`  ❌ Failed to create ${post.title}:`, error.message);
    }
  }

  console.log(`  📊 Blog Posts: ${created} created, ${skipped} skipped`);
}

async function seedSiteSettings() {
  console.log('\n⚙️  Seeding site settings...');

  try {
    const existing = await client.getDocument(siteSettings._id);
    if (existing) {
      console.log('  ⏭️  Skipping site settings (already exists)');
      return;
    }

    await client.createOrReplace(siteSettings);
    console.log('  ✅ Created site settings');
  } catch (error: any) {
    console.error('  ❌ Failed to create site settings:', error.message);
  }
}

// ============================================================
// MAIN EXECUTION
// ============================================================

async function main() {
  console.log('🚀 Starting Sanity CMS Seed Script');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📌 Project ID: ih6y25kt`);
  console.log(`📌 Dataset: production`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  try {
    await seedProperties();
    await seedEstates();
    await seedTestimonials();
    await seedBlogPosts();
    await seedSiteSettings();

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Seeding completed successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🔗 View your content at:');
    console.log('   http://localhost:3000/studio');
    console.log('   https://www.sanity.io/manage/project/ih6y25kt\n');
  } catch (error: any) {
    console.error('\n❌ Seeding failed:', error.message);
    process.exit(1);
  }
}

main();
