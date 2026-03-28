import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({ name: 'line1', title: 'Line 1', type: 'string' }),
        defineField({ name: 'line2', title: 'Line 2', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'postcode', title: 'Postcode', type: 'string' }),
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Day(s)', type: 'string' }),
            defineField({ name: 'time', title: 'Hours', type: 'string' }),
          ],
          preview: { select: { title: 'day', subtitle: 'time' } },
        }),
      ],
    }),
    defineField({ name: 'socialFacebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'socialInstagram', title: 'Instagram URL', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
