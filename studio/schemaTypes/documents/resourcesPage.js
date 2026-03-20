import { defineType, defineField, defineArrayMember } from 'sanity'
import { BookIcon } from '@sanity/icons'

export const resourcesPage = defineType({
  name: 'resourcesPage',
  title: 'Resources & Community Page',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Page Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Page Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'featuredResources',
      title: 'Featured Resources',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'resource' }] })],
    }),
    // Community Section
    defineField({
      name: 'communityHeadline',
      title: 'Community Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'communityDescription',
      title: 'Community Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'communityBenefits',
      title: 'Community Benefits',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'communityCtaLabel',
      title: 'Community CTA Label',
      type: 'string',
      initialValue: 'Join the Community',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Resources & Community Page' }),
  },
})
