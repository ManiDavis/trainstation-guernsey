import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const trainer = defineType({
  name: 'trainer',
  title: 'Trainer',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g. "Senior Personal Trainer" or "Strength & Conditioning Coach"',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Best results with a portrait-style photo (roughly 3:4 ratio)',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description: 'A short paragraph about this trainer — specialisms, background, approach',
    }),
    defineField({
      name: 'accolades',
      title: 'Accolades / Badges',
      type: 'array',
      description: 'Up to 5 short badges shown under their name (e.g. "REPS Level 3", "10+ Years Experience", "Nutrition Certified")',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(5),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1 = first)',
      initialValue: 10,
    }),
    defineField({
      name: 'enabled',
      title: 'Show on site',
      type: 'boolean',
      description: 'Toggle off to hide this trainer without deleting them',
      initialValue: true,
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
})
