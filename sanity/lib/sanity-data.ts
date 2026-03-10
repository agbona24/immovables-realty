import { client, urlFor } from './client'
import {
  allPropertiesQuery,
  propertyBySlugQuery,
  allBlogPostsQuery,
  blogPostBySlugQuery,
  allEstatesQuery,
  estateBySlugQuery,
  allTestimonialsQuery,
  siteSettingsQuery,
  allGalleryImagesQuery,
} from './queries'
import type {
  SanityProperty,
  SanityBlogPost,
  SanityEstate,
  SanityTestimonial,
  SanitySiteSettings,
  SanityGalleryImage,
} from './fetch'

// Import fallback data
import { properties as fallbackProperties, type Property } from '@/data/properties'
import { blogPosts as fallbackBlogPosts, type BlogPost } from '@/data/blogPosts'

// ============================================
// Properties
// ============================================

export async function getPropertiesWithFallback(): Promise<Property[]> {
  try {
    const sanityProperties: SanityProperty[] = await client.fetch(allPropertiesQuery)
    
    if (sanityProperties && sanityProperties.length > 0) {
      return sanityProperties.map(transformSanityProperty)
    }
  } catch (error) {
    console.warn('Failed to fetch properties from Sanity, using fallback:', error)
  }
  
  return fallbackProperties
}

export async function getPropertyByIdWithFallback(id: string): Promise<Property | null> {
  try {
    // Try Sanity first (using slug)
    const sanityProperty: SanityProperty | null = await client.fetch(propertyBySlugQuery, { slug: id })
    
    if (sanityProperty) {
      return transformSanityProperty(sanityProperty)
    }
  } catch (error) {
    console.warn('Failed to fetch property from Sanity, using fallback:', error)
  }
  
  // Fallback to hardcoded data
  return fallbackProperties.find(p => p.id === id) || null
}

function transformSanityProperty(sanity: SanityProperty): Property {
  return {
    id: sanity.slug?.current || sanity._id,
    title: sanity.title,
    location: sanity.location,
    price: sanity.price,
    description: sanity.description || '',
    type: sanity.type,
    status: sanity.status as Property['status'],
    features: sanity.features || [],
    details: sanity.details || {},
    amenities: sanity.amenities || [],
    image: sanity.image ? urlFor(sanity.image).url() : '/images/placeholder.jpg',
    gallery: sanity.gallery?.map(img => urlFor(img).url()),
    coordinates: sanity.coordinates,
    address: sanity.address,
    contactInfo: sanity.contactInfo || { phone: '+234 813 283 3083', whatsapp: '2348132833083' },
  }
}

// ============================================
// Blog Posts
// ============================================

export async function getBlogPostsWithFallback(): Promise<BlogPost[]> {
  try {
    const sanityPosts: SanityBlogPost[] = await client.fetch(allBlogPostsQuery)
    
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts.map(transformSanityBlogPost)
    }
  } catch (error) {
    console.warn('Failed to fetch blog posts from Sanity, using fallback:', error)
  }
  
  return fallbackBlogPosts
}

export async function getBlogPostByIdWithFallback(id: string): Promise<BlogPost | null> {
  try {
    const sanityPost: SanityBlogPost | null = await client.fetch(blogPostBySlugQuery, { slug: id })
    
    if (sanityPost) {
      return transformSanityBlogPost(sanityPost)
    }
  } catch (error) {
    console.warn('Failed to fetch blog post from Sanity, using fallback:', error)
  }
  
  return fallbackBlogPosts.find(p => p.id === id) || null
}

function transformSanityBlogPost(sanity: SanityBlogPost): BlogPost {
  // Convert Portable Text to string if needed
  let content = ''
  if (sanity.content) {
    if (typeof sanity.content === 'string') {
      content = sanity.content
    } else if (Array.isArray(sanity.content)) {
      // Simple Portable Text to string conversion
      content = sanity.content
        .filter((block: any) => block._type === 'block')
        .map((block: any) => block.children?.map((child: any) => child.text).join('') || '')
        .join('\n\n')
    }
  }
  
  return {
    id: sanity.slug?.current || sanity._id,
    title: sanity.title,
    excerpt: sanity.excerpt,
    content,
    category: sanity.category,
    date: sanity.date,
    readTime: sanity.readTime || '5 min read',
    author: sanity.author || { name: 'IMMOVABLES REALTY', role: 'Editorial Team' },
    tags: sanity.tags || [],
    image: sanity.image ? urlFor(sanity.image).url() : undefined,
  }
}

// ============================================
// Estates
// ============================================

export interface Estate {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  features: string[]
  badge: string
  color: string
  priceList?: { plotSize: string; price: string; paymentPlan: boolean }[]
  amenities?: { name: string; icon: string }[]
  paymentPlans?: { name: string; duration: string; deposit: string; details: string }[]
  gallery?: string[]
}

const fallbackEstates: Estate[] = [
  {
    id: 'prime-haven-estate',
    name: 'Prime Haven Grove Estate',
    tagline: 'A Premium, Secure & Fast-Appreciating Estate',
    description: 'Modern residential estate offering comfort, security, and profitable investment. Strategically located in a fast-developing corridor of Abeokuta with verified ownership and flexible payment plans.',
    image: '/images/primepriceupdate2026.jpeg',
    features: ['Freehold Title', '40% Deposit + 60% Balance', '300/600/900 sqm Plots', '100% Dry Table Land'],
    badge: 'PREMIUM ESTATE',
    color: 'from-brand-blue to-blue-800',
  },
  {
    id: 'wura-garden-estate',
    name: 'Wura Garden Estate',
    tagline: 'A Serene, Secure & Fast-Developing Residential Estate',
    description: 'Beautifully planned residential estate created for comfort, security, and long-term investment value. Located in a peaceful and fast-growing area of Abeokuta with verified documentation.',
    image: '/images/wurapriceupdate2026.jpeg',
    features: ['Registered Survey', 'Flexible Payment Plan', 'Gated & Secured', 'Family-Friendly Community'],
    badge: 'SERENE LIVING',
    color: 'from-brand-orange to-orange-600',
  },
]

export async function getEstatesWithFallback(): Promise<Estate[]> {
  try {
    const sanityEstates: SanityEstate[] = await client.fetch(allEstatesQuery)
    
    if (sanityEstates && sanityEstates.length > 0) {
      return sanityEstates.map(transformSanityEstate)
    }
  } catch (error) {
    console.warn('Failed to fetch estates from Sanity, using fallback:', error)
  }
  
  return fallbackEstates
}

export async function getEstateByIdWithFallback(id: string): Promise<Estate | null> {
  try {
    const sanityEstate: SanityEstate | null = await client.fetch(estateBySlugQuery, { slug: id })
    
    if (sanityEstate) {
      return transformSanityEstate(sanityEstate)
    }
  } catch (error) {
    console.warn('Failed to fetch estate from Sanity, using fallback:', error)
  }
  
  return fallbackEstates.find(e => e.id === id) || null
}

function transformSanityEstate(sanity: SanityEstate): Estate {
  return {
    id: sanity.slug?.current || sanity._id,
    name: sanity.name,
    tagline: sanity.tagline || '',
    description: sanity.description || '',
    image: sanity.image ? urlFor(sanity.image).url() : '/images/placeholder.jpg',
    features: sanity.features || [],
    badge: sanity.badge || '',
    color: sanity.color || 'from-brand-blue to-blue-800',
    priceList: sanity.priceList,
    amenities: sanity.amenities,
    paymentPlans: sanity.paymentPlans,
    gallery: sanity.gallery?.map(img => urlFor(img).url()),
  }
}

// ============================================
// Testimonials
// ============================================

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  initials: string
  image?: string
  rating: number
  text: string
}

const fallbackTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adebayo Okonkwo',
    role: 'Real Estate Investor',
    location: 'Lagos',
    initials: 'AO',
    rating: 5,
    text: "IMMOVABLES REALTY helped me purchase my first investment property in Abeokuta. Their team guided me through every step, from selection to documentation. Six months later, my property value has already appreciated by 15%. Highly recommended!",
  },
  {
    id: '2',
    name: 'Mrs. Funmilayo Adeleke',
    role: 'Business Owner',
    location: 'Ibadan',
    initials: 'FA',
    rating: 5,
    text: "I was skeptical about investing in real estate outside Lagos, but IMMOVABLES REALTY changed my perspective. Their market analytics were spot-on, and the flexible payment plan made it achievable. Now I own three properties through them!",
  },
  {
    id: '3',
    name: 'Engr. Chukwudi Nwosu',
    role: 'Civil Engineer',
    location: 'Abeokuta',
    initials: 'CN',
    rating: 5,
    text: "As an engineer, I appreciate attention to detail. IMMOVABLES REALTY's thorough due diligence and legal verification gave me complete confidence. The team is professional, responsive, and truly committed to client success.",
  },
  {
    id: '4',
    name: 'Dr. Aminat Bello',
    role: 'Medical Practitioner',
    location: 'Ogun State',
    initials: 'AB',
    rating: 5,
    text: "The best real estate experience I've ever had! From the initial consultation to property handover, everything was seamless. The team's expertise in Ogun State's property market is unmatched. My rental income started flowing within two months!",
  },
  {
    id: '5',
    name: 'Mr. Taiwo Johnson',
    role: 'Entrepreneur',
    location: 'Abuja',
    initials: 'TJ',
    rating: 5,
    text: "I invested from Abuja without visiting the property physically, thanks to IMMOVABLES REALTY's virtual tours and transparent processes. The documentation was flawless, and their after-sales support is exceptional. True professionals!",
  },
  {
    id: '6',
    name: 'Pastor & Mrs. Olumide',
    role: 'Church Leaders',
    location: 'Ogun State',
    initials: 'PO',
    rating: 5,
    text: "We wanted to invest wisely for our children's future. IMMOVABLES REALTY provided personalized advice and found us the perfect property within our budget. Their integrity and honesty shine through in every interaction. God bless this team!",
  },
]

export async function getTestimonialsWithFallback(): Promise<Testimonial[]> {
  try {
    const sanityTestimonials: SanityTestimonial[] = await client.fetch(allTestimonialsQuery)
    
    if (sanityTestimonials && sanityTestimonials.length > 0) {
      return sanityTestimonials.map(transformSanityTestimonial)
    }
  } catch (error) {
    console.warn('Failed to fetch testimonials from Sanity, using fallback:', error)
  }
  
  return fallbackTestimonials
}

function transformSanityTestimonial(sanity: SanityTestimonial): Testimonial {
  return {
    id: sanity._id,
    name: sanity.name,
    role: sanity.role || '',
    location: sanity.location || '',
    initials: sanity.initials || sanity.name.split(' ').map(n => n[0]).join('').toUpperCase(),
    image: sanity.image ? urlFor(sanity.image).url() : undefined,
    rating: sanity.rating || 5,
    text: sanity.text,
  }
}

// ============================================
// Site Settings
// ============================================

export interface SiteSettings {
  siteName: string
  siteDescription: string
  logo?: string
  heroTitle: string
  heroSubtitle: string
  heroStats?: { value: string; label: string }[]
  contactInfo: {
    phone: string
    whatsapp: string
    email: string
    address: string
    officeHours: string
  }
  socialLinks: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    tiktok?: string
  }
  footerText: string
  announcementBanner?: {
    enabled: boolean
    text: string
    link?: string
    linkText?: string
  }
}

const fallbackSiteSettings: SiteSettings = {
  siteName: 'IMMOVABLES REALTY',
  siteDescription: 'Your trusted partner for all things real estate in Ogun State.',
  heroTitle: 'Build <span class="text-brand-orange">Generational</span> Wealth Through Strategic Real Estate',
  heroSubtitle: 'Your trusted partner for smart real estate investment in Ogun State. We connect you with high-value properties that grow your portfolio.',
  heroStats: [
    { value: '500+', label: 'Properties Sold' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
  ],
  contactInfo: {
    phone: '+234 813 283 3083',
    whatsapp: '2348132833083',
    email: 'immovablesrealty@gmail.com',
    address: 'Abeokuta, Ogun State, Nigeria',
    officeHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/immovablesrealty',
    instagram: 'https://www.instagram.com/immovables_realty/',
    twitter: 'https://x.com/immovablesrealt',
    linkedin: 'https://www.linkedin.com/',
  },
  footerText: '© 2024 IMMOVABLES REALTY. All rights reserved. RC: 7466982',
}

export async function getSiteSettingsWithFallback(): Promise<SiteSettings> {
  try {
    const sanitySiteSettings: SanitySiteSettings | null = await client.fetch(siteSettingsQuery)
    
    if (sanitySiteSettings) {
      return {
        siteName: sanitySiteSettings.siteName || fallbackSiteSettings.siteName,
        siteDescription: sanitySiteSettings.siteDescription || fallbackSiteSettings.siteDescription,
        logo: sanitySiteSettings.logo ? urlFor(sanitySiteSettings.logo).url() : undefined,
        heroTitle: sanitySiteSettings.heroTitle || fallbackSiteSettings.heroTitle,
        heroSubtitle: sanitySiteSettings.heroSubtitle || fallbackSiteSettings.heroSubtitle,
        heroStats: sanitySiteSettings.heroStats || fallbackSiteSettings.heroStats,
        contactInfo: {
          phone: sanitySiteSettings.contactInfo?.phone || fallbackSiteSettings.contactInfo.phone,
          whatsapp: sanitySiteSettings.contactInfo?.whatsapp || fallbackSiteSettings.contactInfo.whatsapp,
          email: sanitySiteSettings.contactInfo?.email || fallbackSiteSettings.contactInfo.email,
          address: sanitySiteSettings.contactInfo?.address || fallbackSiteSettings.contactInfo.address,
          officeHours: sanitySiteSettings.contactInfo?.officeHours || fallbackSiteSettings.contactInfo.officeHours,
        },
        socialLinks: sanitySiteSettings.socialLinks || fallbackSiteSettings.socialLinks,
        footerText: sanitySiteSettings.footerText || fallbackSiteSettings.footerText,
        announcementBanner: sanitySiteSettings.announcementBanner,
      }
    }
  } catch (error) {
    console.warn('Failed to fetch site settings from Sanity, using fallback:', error)
  }
  
  return fallbackSiteSettings
}

// ============================================
// Gallery Images
// ============================================

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
}

export async function getGalleryImagesWithFallback(): Promise<GalleryImage[]> {
  try {
    const sanityImages: SanityGalleryImage[] = await client.fetch(allGalleryImagesQuery)
    
    if (sanityImages && sanityImages.length > 0) {
      return sanityImages.map(img => ({
        id: img._id,
        src: urlFor(img.image).url(),
        alt: img.title,
        category: img.category || 'Properties',
        title: img.title,
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch gallery images from Sanity, using fallback:', error)
  }
  
  // Return empty array - Gallery component has its own fallback
  return []
}
