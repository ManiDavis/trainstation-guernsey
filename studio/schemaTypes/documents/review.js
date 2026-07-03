import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const review = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({ name: 'reviewerName', title: 'Reviewer Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'initials', title: 'Initials (2 letters)', type: 'string', validation: (r) => r.max(2) }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({ name: 'reviewDate', title: 'Date Label (e.g. "3 years ago")', type: 'string' }),
    defineField({ name: 'reviewText', title: 'Review Text', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'avatarColor', title: 'Avatar Background Colour (hex)', type: 'string', initialValue: '#E31E24' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'reviewerName', subtitle: 'rating' },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `${subtitle}★` }),
  },
})
