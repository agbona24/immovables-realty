import { groq } from 'next-sanity'

// Properties
export const allPropertiesQuery = groq`
  *[_type == "property"] | order(order asc, _createdAt desc) {
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
    contactInfo,
    order
  }
`

export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
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
  }
`

// Blog Posts
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    category,
    date,
    readTime,
    author,
    tags,
    image
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    category,
    date,
    readTime,
    author,
    tags,
    image
  }
`

// Featured Estates
export const allEstatesQuery = groq`
  *[_type == "estate"] | order(order asc) {
    _id,
    name,
    slug,
    tagline,
    description,
    image,
    features,
    badge,
    color,
    priceList,
    amenities,
    paymentPlans,
    order
  }
`

export const estateBySlugQuery = groq`
  *[_type == "estate" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    tagline,
    description,
    image,
    features,
    badge,
    color,
    priceList,
    amenities,
    paymentPlans,
    gallery
  }
`

// Testimonials
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    location,
    initials,
    rating,
    text,
    order
  }
`

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    heroTitle,
    heroSubtitle,
    heroStats,
    contactInfo,
    socialLinks,
    footerText
  }
`

// Gallery
export const allGalleryImagesQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    title,
    image,
    category,
    description,
    order
  }
`

// Services
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    features,
    content,
    order
  }
`
