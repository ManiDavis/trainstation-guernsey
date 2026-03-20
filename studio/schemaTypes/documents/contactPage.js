import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact & Booking Page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Page Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'bookingHeadline',
      title: 'Booking Section Headline',
      type: 'string',
      initialValue: 'Book a Free Discovery Call',
    }),
    defineField({
      name: 'bookingDescription',
      title: 'Booking Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'calendlyUrl',
      title: 'Calendly Embed URL',
      type: 'url',
      description: 'Your Calendly scheduling link',
    }),
    defineField({
      name: 'formHeadline',
      title: 'Contact Form Headline',
      type: 'string',
      initialValue: 'Send a Message',
    }),
    defineField({
      name: 'formSubtext',
      title: 'Contact Form Subtext',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Contact & Booking Page' }),
  },
})
