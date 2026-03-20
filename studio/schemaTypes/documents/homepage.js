import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero CTA Button Label',
      type: 'string',
      initialValue: 'Book a Free Call',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Maria Photo)',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    // About Section
    defineField({
      name: 'aboutHeadline',
      title: 'About Section Headline',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutBio',
      title: 'Bio / About Text',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'about',
    }),
    defineField({
      name: 'aboutPhoto',
      title: 'Maria\'s Photo',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),
    defineField({
      name: 'aboutHighlights',
      title: 'Key Highlights / Credentials',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'about',
    }),
    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'testimonial' }] })],
      group: 'testimonials',
    }),
    // Services Overview
    defineField({
      name: 'servicesHeadline',
      title: 'Services Section Headline',
      type: 'string',
      initialValue: 'Everything You Need to Thrive',
      group: 'services',
    }),
    defineField({
      name: 'servicesSubtext',
      title: 'Services Section Subtext',
      type: 'text',
      rows: 2,
      group: 'services',
    }),
  ],
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'services', title: 'Services Overview' },
    { name: 'about', title: 'About Maria' },
    { name: 'testimonials', title: 'Testimonials' },
  ],
  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
})
