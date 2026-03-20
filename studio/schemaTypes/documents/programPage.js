import { defineType, defineField, defineArrayMember } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const programPage = defineType({
  name: 'programPage',
  title: '30 Day Program Page',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    // Hero
    defineField({
      name: 'headline',
      title: 'Page Headline',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    // Pricing
    defineField({
      name: 'trialPrice',
      title: '7-Day Trial Price',
      type: 'string',
      initialValue: '$9.99',
      group: 'pricing',
    }),
    defineField({
      name: 'fullPrice',
      title: '30-Day Full Price',
      type: 'string',
      initialValue: '$35.99',
      group: 'pricing',
    }),
    defineField({
      name: 'pricingNote',
      title: 'Pricing Note',
      type: 'string',
      initialValue: 'Beta Pricing — Limited Time',
      group: 'pricing',
    }),
    defineField({
      name: 'trialCtaLabel',
      title: 'Trial CTA Label',
      type: 'string',
      initialValue: 'Start Your 7-Day Trial',
      group: 'pricing',
    }),
    defineField({
      name: 'fullCtaLabel',
      title: 'Full Program CTA Label',
      type: 'string',
      initialValue: 'Join the 30-Day Program',
      group: 'pricing',
    }),
    // What's Included
    defineField({
      name: 'inclusions',
      title: "What's Included",
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', title: 'Title' }),
          defineField({ name: 'description', type: 'string', title: 'Description' }),
        ],
        preview: { select: { title: 'title', subtitle: 'description' } },
      })],
      group: 'inclusions',
    }),
    // Program Breakdown
    defineField({
      name: 'programWeeks',
      title: 'Program Week Breakdown',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'weekLabel', type: 'string', title: 'Week Label', description: 'e.g. "Week 1"' }),
          defineField({ name: 'theme', type: 'string', title: 'Week Theme', description: 'e.g. "Foundation & Awareness"' }),
          defineField({ name: 'description', type: 'text', title: 'Description', rows: 3 }),
        ],
        preview: { select: { title: 'weekLabel', subtitle: 'theme' } },
      })],
      group: 'breakdown',
    }),
    // Ebook
    defineField({
      name: 'ebookHeadline',
      title: 'Ebook Section Headline',
      type: 'string',
      initialValue: 'Also included: Fatigue With Me',
      group: 'ebook',
    }),
    defineField({
      name: 'ebookDescription',
      title: 'Ebook Description',
      type: 'text',
      rows: 4,
      group: 'ebook',
    }),
    defineField({
      name: 'ebookCover',
      title: 'Ebook Cover Image',
      type: 'image',
      options: { hotspot: true },
      group: 'ebook',
    }),
    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Program Testimonials',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'testimonial' }] })],
      group: 'testimonials',
    }),
  ],
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'pricing', title: 'Pricing' },
    { name: 'inclusions', title: "What's Included" },
    { name: 'breakdown', title: 'Program Breakdown' },
    { name: 'ebook', title: 'Ebook' },
    { name: 'testimonials', title: 'Testimonials' },
  ],
  preview: {
    prepare: () => ({ title: '30 Day Accountability Blueprint Page' }),
  },
})
