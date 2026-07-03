import { defineType, defineField, defineArrayMember } from 'sanity'
import { StarIcon } from '@sanity/icons'

const ICON_OPTIONS = [
  { title: 'No Contracts', value: 'no-contracts' },
  { title: 'Qualified PTs', value: 'qualified-pts' },
  { title: 'Indoor & Outdoor', value: 'indoor-outdoor' },
  { title: 'Unbeatable Prices', value: 'prices' },
  { title: 'Changing Rooms', value: 'changing-rooms' },
  { title: 'Great Community', value: 'community' },
]

export const whyUs = defineType({
  name: 'whyUs',
  title: 'Why Train With Us',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small red label above the heading',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main section heading (use \\n for line break)',
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'text',
      rows: 3,
      description: 'Paragraph below the heading',
    }),
    defineField({
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      description: 'The six "why train with us" cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'iconKey',
              title: 'Icon',
              type: 'string',
              options: { list: ICON_OPTIONS, layout: 'dropdown' },
            }),
            defineField({ name: 'title', title: 'Card Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Card Description', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'desc' },
            prepare: ({ title, subtitle }) => ({ title, subtitle }),
          },
        }),
      ],
    }),
    defineField({
      name: 'bannerLabel',
      title: 'Banner Label (small text)',
      type: 'string',
      description: 'Small uppercase text above the banner heading (e.g. "No Commitment")',
    }),
    defineField({
      name: 'bannerHeading',
      title: 'Banner Heading',
      type: 'string',
      description: 'Large text in the red banner (e.g. "CLAIM YOUR FREE TRIAL")',
    }),
    defineField({
      name: 'bannerCta',
      title: 'Banner Button Text',
      type: 'string',
    }),
  ],
  preview: { prepare: () => ({ title: 'Why Train With Us' }) },
})
