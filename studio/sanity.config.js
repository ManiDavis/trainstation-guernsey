import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const singletonTypes = ['siteSettings', 'homepage', 'yogaPage', 'programPage', 'resourcesPage', 'contactPage']
const singletonActions = (input, context) =>
  singletonTypes.includes(context.schemaType)
    ? input.filter(({ action }) => action !== 'duplicate')
    : input

const structure = (S) =>
  S.list()
    .title('Soothing Solutions')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Yoga Classes Page')
        .id('yogaPage')
        .child(S.document().schemaType('yogaPage').documentId('yogaPage')),
      S.listItem()
        .title('30 Day Program Page')
        .id('programPage')
        .child(S.document().schemaType('programPage').documentId('programPage')),
      S.listItem()
        .title('Resources & Community Page')
        .id('resourcesPage')
        .child(S.document().schemaType('resourcesPage').documentId('resourcesPage')),
      S.listItem()
        .title('Contact & Booking Page')
        .id('contactPage')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.divider(),
      S.documentTypeListItem('yogaClass').title('Yoga Classes'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('resource').title('Resources / Articles'),
    ])

export default defineConfig({
  name: 'soothing-solutions',
  title: 'Soothing Solutions',
  projectId: '1y9no5l1',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  document: {
    actions: singletonActions,
  },
})
