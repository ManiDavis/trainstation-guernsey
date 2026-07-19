import { defineType, defineField, defineArrayMember } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const pricingPlan = defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({ name: 'name', title: 'Plan Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Membership', value: 'membership' },
          { title: 'PT Package', value: 'pt-package' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'price', title: 'Price (e.g. £44.50)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'priceNote', title: 'Price Note (e.g. /month by standing order)', type: 'string' }),
    defineField({ name: 'altPrice', title: 'Alt Price (e.g. or £490 per annum)', type: 'string' }),
    defineField({ name: 'badge', title: 'Badge Label (e.g. Best Value)', type: 'string' }),
    defineField({ name: 'highlighted', title: 'Highlighted / Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'price' },
    prepare: ({ title, subtitle }) => ({ title, subtitle }),
  },
})
