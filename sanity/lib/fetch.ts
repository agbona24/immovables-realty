import { client } from './client'
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
  allServicesQuery,
} from './queries'

// Types
export interface SanityProperty {
  _id: string
  title: string
  slug: { current: string }
  location: string
  price: string
  description: string
  type: 'Estate' | 'House' | 'Land' | 'Commercial'
  status: 'Available' | 'Selling Fast' | 'Few Units Left' | 'Sold Out'
  features: string[]
  details: {
    size?: string
    bedrooms?: number
    bathrooms?: number
    units?: number
    plotSize?: string
  }
  amenities: string[]
  image: SanityImage
  gallery?: SanityImage[]
  coordinates?: {
    lat: number
    lng: number
  }
  address?: string
  contactInfo: {
    phone: string
    whatsapp: string
  }
  order?: number
}

export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: any[] // Portable Text
  category: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
  }
  tags: string[]
  image?: SanityImage
  featured?: boolean
}

export interface SanityEstate {
  _id: string
  name: string
  slug: { current: string }
  tagline: string
  description: string
  image: SanityImage
  gallery?: SanityImage[]
  features: string[]
  badge: string
  color: string
  priceList?: {
    plotSize: string
    price: string
    paymentPlan: boolean
  }[]
  amenities?: {
    name: string
    icon: string
  }[]
  paymentPlans?: {
    name: string
    duration: string
    deposit: string
    details: string
  }[]
  location?: string
  coordinates?: {
    lat: number
    lng: number
  }
  order?: number
}

export interface SanityTestimonial {
  _id: string
  name: string
  role: string
  location: string
  initials: string
  image?: SanityImage
  rating: number
  text: string
  order?: number
  featured?: boolean
}

export interface SanityService {
  _id: string
  title: string
  slug: { current: string }
  description: string
  icon: string
  image?: SanityImage
  features?: {
    title: string
    description: string
    icon: string
  }[]
  content?: any[] // Portable Text
  ctaText?: string
  ctaLink?: string
  order?: number
}

export interface SanityGalleryImage {
  _id: string
  title: string
  image: SanityImage
  category: string
  description?: string
  order?: number
}

export interface SanitySiteSettings {
  siteName: string
  siteDescription: string
  logo?: SanityImage
  favicon?: SanityImage
  heroTitle: string
  heroSubtitle: string
  heroStats?: {
    value: string
    label: string
  }[]
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

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

// Fetch functions
export async function getProperties(): Promise<SanityProperty[]> {
  return await client.fetch(allPropertiesQuery)
}

export async function getPropertyBySlug(slug: string): Promise<SanityProperty | null> {
  return await client.fetch(propertyBySlugQuery, { slug })
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return await client.fetch(allBlogPostsQuery)
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return await client.fetch(blogPostBySlugQuery, { slug })
}

export async function getEstates(): Promise<SanityEstate[]> {
  return await client.fetch(allEstatesQuery)
}

export async function getEstateBySlug(slug: string): Promise<SanityEstate | null> {
  return await client.fetch(estateBySlugQuery, { slug })
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return await client.fetch(allTestimonialsQuery)
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return await client.fetch(siteSettingsQuery)
}

export async function getGalleryImages(): Promise<SanityGalleryImage[]> {
  return await client.fetch(allGalleryImagesQuery)
}

export async function getServices(): Promise<SanityService[]> {
  return await client.fetch(allServicesQuery)
}
