import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Use fallbacks for build-time when env vars might not be available
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ih6y25kt'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

// Preview client (for draft content)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

export function getClient(preview?: boolean) {
  return preview ? previewClient : client
}
