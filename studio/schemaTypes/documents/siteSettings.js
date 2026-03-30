import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'navbar', title: 'Navbar' },
    { name: 'footer', title: 'Footer' },
    { name: 'contact', title: 'Contact Info' },
  ],
  fields: [
    // ── HERO ─────────────────────────────────────────────────
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Text',
      type: 'string',
      description: 'Small red label above the headline (e.g. "Guernsey\'s Premier Gym")',
      group: 'hero',
    }),
    defineField({
      name: 'heroLine1',
      title: 'Headline Line 1',
      type: 'string',
      description: 'First word of the large headline (e.g. "UNLEASH")',
      group: 'hero',
    }),
    defineField({
      name: 'heroLine2',
      title: 'Headline Line 2 (outline/glow)',
      type: 'string',
      description: 'Middle word — shown as red outline with glow (e.g. "YOUR")',
      group: 'hero',
    }),
    defineField({
      name: 'heroLine3',
      title: 'Headline Line 3',
      type: 'string',
      description: 'Third word of the large headline (e.g. "POWER")',
      group: 'hero',
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'text',
      rows: 3,
      description: 'Paragraph below the headline',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta1',
      title: 'CTA Button 1 (red)',
      type: 'string',
      description: 'Primary call-to-action button label',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta2',
      title: 'CTA Button 2 (outline)',
      type: 'string',
      description: 'Secondary call-to-action button label',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      description: 'Full-bleed background photo. Upload a new one here to replace it.',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats Bar',
      type: 'array',
      description: 'The animated stat counters below the headline',
      group: 'hero',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Number', type: 'number' }),
            defineField({ name: 'suffix', title: 'Suffix (e.g. %, ★, min)', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
            prepare: ({ title, subtitle }) => ({ title, subtitle: String(subtitle) }),
          },
        }),
      ],
    }),

    // ── NAVBAR ───────────────────────────────────────────────
    defineField({
      name: 'navBrandName',
      title: 'Brand Name',
      type: 'string',
      description: 'Name shown next to the logo in the navbar',
      group: 'navbar',
    }),
    defineField({
      name: 'navTagline',
      title: 'Brand Tagline',
      type: 'string',
      description: 'Small text below brand name (e.g. "Strength · Fitness · Results")',
      group: 'navbar',
    }),

    // ── FOOTER ───────────────────────────────────────────────
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 2,
      description: 'Short paragraph in the footer brand column',
      group: 'footer',
    }),

    // ── CONTACT INFO ─────────────────────────────────────────
    defineField({ name: 'phone', title: 'Phone', type: 'string', group: 'contact' }),
    defineField({ name: 'email', title: 'Email', type: 'string', group: 'contact' }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      group: 'contact',
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
      group: 'contact',
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
    defineField({ name: 'socialFacebook', title: 'Facebook URL', type: 'url', group: 'contact' }),
    defineField({ name: 'socialInstagram', title: 'Instagram URL', type: 'url', group: 'contact' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
