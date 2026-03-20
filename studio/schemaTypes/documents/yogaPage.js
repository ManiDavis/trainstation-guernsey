import { defineType, defineField, defineArrayMember } from 'sanity'
import { HeartIcon } from '@sanity/icons'

export const yogaPage = defineType({
  name: 'yogaPage',
  title: 'Yoga Classes Page',
  type: 'document',
  icon: HeartIcon,
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
      rows: 3,
    }),
    defineField({
      name: 'introText',
      title: 'Intro Paragraph',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'classes',
      title: 'Yoga Classes',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'yogaClass' }] })],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Section Text',
      type: 'string',
      initialValue: 'Ready to begin your yoga journey?',
    }),
    defineField({
      name: 'ctaButtonLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Book a Class',
    }),
    defineField({
      name: 'locationNote',
      title: 'Location / Availability Note',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Yoga Classes Page' }),
  },
})
