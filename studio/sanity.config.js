import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { CogIcon, TagIcon, UserIcon } from '@sanity/icons'

const SINGLETONS = ['siteSettings']

const structure = (S) =>
  S.list()
    .title('TrainStation Guernsey')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Pricing Plans')
        .icon(TagIcon)
        .child(S.documentTypeList('pricingPlan').title('Pricing Plans')),
      S.listItem()
        .title('Reviews')
        .icon(UserIcon)
        .child(S.documentTypeList('review').title('Reviews')),
    ])

export default defineConfig({
  name: 'trainstation',
  title: 'TrainStation Guernsey',
  projectId: 'weak5669',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType)),
  },
  document: {
    actions: (input, context) =>
      SINGLETONS.includes(context.schemaType)
        ? input.filter(({ action }) => action !== 'duplicate')
        : input,
  },
})
