import { createClient } from '@sanity/client'

// Stega encoding is only needed when inside the Sanity Presentation tool iframe
const inPresentation = typeof window !== 'undefined' && window.parent !== window

export const client = createClient({
  projectId: 'weak5669',
  dataset: 'production',
  apiVersion: '2026-03-28',
  useCdn: !inPresentation,
  stega: {
    enabled: inPresentation,
    studioUrl: 'https://trainstation-guernsey.sanity.studio',
  },
})
