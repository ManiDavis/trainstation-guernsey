import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'weak5669',
  dataset: 'production',
  apiVersion: '2026-03-28',
  useCdn: true,
})
