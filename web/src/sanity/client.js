import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '1y9no5l1',
  dataset: 'production',
  apiVersion: '2026-03-20',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_READ_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
