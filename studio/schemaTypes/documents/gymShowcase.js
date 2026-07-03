import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const gymShowcase = defineType({
  name: 'gymShowcase',
  title: 'Gym Showcase',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small red label above the heading (e.g. "The Facility")',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading (e.g. "Built for Serious Athletes")',
    }),
    defineField({
      name: 'paragraph1',
      title: 'First Paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'paragraph2',
      title: 'Second Paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'equipment',
      title: 'Equipment Tags',
      type: 'array',
      description: 'The chip-style equipment badges',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
            defineField({ name: 'label', title: 'Equipment Name', type: 'string' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'icon' },
            prepare: ({ title, subtitle }) => ({ title: `${subtitle} ${title}` }),
          },
        }),
      ],
    }),
    defineField({
      name: 'panelBrand',
      title: 'Equipment Brand (large panel)',
      type: 'string',
      description: 'Brand name shown in the dark panel (e.g. "ROGUE")',
    }),
    defineField({
      name: 'panelBrandSub',
      title: 'Equipment Brand Subtitle',
      type: 'string',
      description: 'Small text below brand (e.g. "Equipment Throughout")',
    }),
    defineField({
      name: 'statNumber',
      title: 'Stat Number (red panel)',
      type: 'string',
      description: 'Large number in the red panel (e.g. "2")',
    }),
    defineField({
      name: 'statLabel',
      title: 'Stat Label (red panel)',
      type: 'string',
      description: 'Label below the stat (e.g. "Training Zones")',
    }),
  ],
  preview: { prepare: () => ({ title: 'Gym Showcase' }) },
})
