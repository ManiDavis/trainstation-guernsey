import { defineType, defineField } from 'sanity'
import { HeartIcon } from '@sanity/icons'

export const yogaClass = defineType({
  name: 'yogaClass',
  title: 'Yoga Class',
  type: 'document',
  icon: HeartIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Class Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'classType',
      title: 'Class Type',
      type: 'string',
      options: {
        list: [
          { title: 'One-on-One', value: 'one-on-one' },
          { title: 'Chair Yoga', value: 'chair' },
          { title: "Children's Yoga", value: 'children' },
          { title: 'Group Class', value: 'group' },
          { title: 'Private Session', value: 'private' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Session Duration',
      type: 'string',
      description: 'e.g. "60 minutes" or "45–75 minutes"',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "$75/session" or "Contact for pricing"',
    }),
    defineField({
      name: 'priceNote',
      title: 'Pricing Note',
      type: 'string',
      description: 'Optional note, e.g. "Packages available"',
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown on the class card',
    }),
    defineField({
      name: 'isOnline',
      title: 'Available Online',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isInPerson',
      title: 'Available In-Person (Florida)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'classType' },
  },
})
