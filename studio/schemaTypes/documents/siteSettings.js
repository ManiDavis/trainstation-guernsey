import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'visibility',    title: 'Section Visibility' },
    { name: 'hero',          title: 'Hero Section' },
    { name: 'navbar',        title: 'Navbar' },
    { name: 'footer',        title: 'Footer' },
    { name: 'contact',       title: 'Contact Info' },
    { name: 'announcement',  title: '📢 Announcement Banner' },
    { name: 'contentBlock',  title: '📝 Content Split Block' },
    { name: 'statsBanner',   title: '📊 Stats Strip' },
    { name: 'ctaBanner',     title: '🔥 CTA Banner' },
    { name: 'gallery',       title: '🖼️ Photo Gallery' },
  ],
  fields: [
    // ── SECTION VISIBILITY ───────────────────────────────────
    defineField({
      name: 'showWhyUs',
      title: 'Show "Why Us" Section',
      type: 'boolean',
      initialValue: true,
      group: 'visibility',
    }),
    defineField({
      name: 'showGymShowcase',
      title: 'Show Gym Showcase Section',
      type: 'boolean',
      initialValue: true,
      group: 'visibility',
    }),
    defineField({
      name: 'showPricing',
      title: 'Show Pricing Section',
      type: 'boolean',
      initialValue: true,
      group: 'visibility',
    }),
    defineField({
      name: 'showReviews',
      title: 'Show Reviews Section',
      type: 'boolean',
      initialValue: true,
      group: 'visibility',
    }),
    defineField({
      name: 'showPersonalTrainers',
      title: 'Show Personal Trainers Section',
      type: 'boolean',
      initialValue: false,
      description: 'Enable the PT section (add trainers via "Personal Trainers" in the sidebar)',
      group: 'visibility',
    }),
    defineField({
      name: 'showTrainersInNav',
      title: 'Show "Our Trainers" in navigation',
      type: 'boolean',
      initialValue: false,
      description: 'Adds an "Our Trainers" link to the navbar (only relevant if the section is visible)',
      group: 'visibility',
    }),
    defineField({
      name: 'showContact',
      title: 'Show Contact Section',
      type: 'boolean',
      initialValue: true,
      group: 'visibility',
    }),

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
      name: 'navLogo',
      title: 'Logo Image',
      type: 'image',
      description: 'Logo shown in the navbar circle. Upload your gym logo here.',
      options: { hotspot: true },
      group: 'navbar',
    }),
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

    // ── ANNOUNCEMENT BANNER ──────────────────────────────────
    defineField({
      name: 'announcementEnabled',
      title: 'Show Announcement Banner',
      type: 'boolean',
      initialValue: false,
      description: 'Turn on to display a slim banner at the very top of the page',
      group: 'announcement',
    }),
    defineField({
      name: 'announcementText',
      title: 'Announcement Text',
      type: 'string',
      description: 'Main message (e.g. "Bank Holiday hours this weekend — we\'re open 8am–2pm")',
      group: 'announcement',
    }),
    defineField({
      name: 'announcementLinkLabel',
      title: 'Button Label',
      type: 'string',
      description: 'Optional — leave blank for no button',
      group: 'announcement',
    }),
    defineField({
      name: 'announcementLinkUrl',
      title: 'Button URL',
      type: 'url',
      group: 'announcement',
    }),
    defineField({
      name: 'announcementStyle',
      title: 'Banner Colour',
      type: 'string',
      options: {
        list: [
          { title: 'Red (brand)', value: 'red' },
          { title: 'Dark', value: 'dark' },
          { title: 'Yellow / Warning', value: 'yellow' },
        ],
        layout: 'radio',
      },
      initialValue: 'red',
      group: 'announcement',
    }),

    // ── CONTENT SPLIT BLOCK ──────────────────────────────────
    defineField({
      name: 'contentBlockEnabled',
      title: 'Show Content Split Block',
      type: 'boolean',
      initialValue: false,
      description: 'A flexible section with text and an optional side image',
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockLayout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Text only (centred)', value: 'text-only' },
          { title: 'Image on the left', value: 'image-left' },
          { title: 'Image on the right', value: 'image-right' },
        ],
        layout: 'radio',
      },
      initialValue: 'image-right',
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small uppercase label above the heading (e.g. "New for 2026")',
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockHeading',
      title: 'Heading',
      type: 'string',
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockBody',
      title: 'Body Text',
      type: 'text',
      rows: 4,
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockCtaLabel',
      title: 'Button Label',
      type: 'string',
      description: 'Optional — leave blank for no button',
      group: 'contentBlock',
    }),
    defineField({
      name: 'contentBlockCtaUrl',
      title: 'Button URL',
      type: 'url',
      group: 'contentBlock',
    }),

    // ── STATS STRIP ──────────────────────────────────────────
    defineField({
      name: 'statsBannerEnabled',
      title: 'Show Stats Strip',
      type: 'boolean',
      initialValue: false,
      description: 'A bold row of numbers — great for social proof (e.g. "500+ Members", "10 Years")',
      group: 'statsBanner',
    }),
    defineField({
      name: 'statsBannerHeading',
      title: 'Heading (optional)',
      type: 'string',
      description: 'Optional heading above the stats row',
      group: 'statsBanner',
    }),
    defineField({
      name: 'statsBannerStyle',
      title: 'Background Style',
      type: 'string',
      options: {
        list: [
          { title: 'Red (brand)', value: 'red' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'red',
      group: 'statsBanner',
    }),
    defineField({
      name: 'statsBannerStats',
      title: 'Stats',
      type: 'array',
      description: 'Add up to 5 stats',
      group: 'statsBanner',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Number / Value', type: 'string', description: 'e.g. "500" or "10+"' }),
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Members"' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
    }),

    // ── CTA BANNER ───────────────────────────────────────────
    defineField({
      name: 'ctaBannerEnabled',
      title: 'Show CTA Banner',
      type: 'boolean',
      initialValue: false,
      description: 'A full-width bold call-to-action section — e.g. "Ready to start? Join today."',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerStyle',
      title: 'Background Style',
      type: 'string',
      options: {
        list: [
          { title: 'Red (brand)', value: 'red' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'red',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Optional small label above the heading',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerHeading',
      title: 'Heading',
      type: 'string',
      description: 'Big bold line (e.g. "Start Your Journey Today")',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerSubtext',
      title: 'Subtext',
      type: 'string',
      description: 'Optional line below the heading',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerCtaLabel',
      title: 'Button Label',
      type: 'string',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerCtaUrl',
      title: 'Button URL',
      type: 'url',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerSecondaryLabel',
      title: 'Secondary Button Label',
      type: 'string',
      description: 'Optional second button (outline style)',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerSecondaryUrl',
      title: 'Secondary Button URL',
      type: 'url',
      group: 'ctaBanner',
    }),

    // ── PHOTO GALLERY ────────────────────────────────────────
    defineField({
      name: 'galleryEnabled',
      title: 'Show Photo Gallery',
      type: 'boolean',
      initialValue: false,
      description: 'A responsive grid of gym/atmosphere photos',
      group: 'gallery',
    }),
    defineField({
      name: 'galleryHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Optional — leave blank for no heading',
      group: 'gallery',
    }),
    defineField({
      name: 'galleryEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      group: 'gallery',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Photos',
      type: 'array',
      description: 'Upload up to 12 photos. The grid adapts automatically.',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
          ],
        }),
      ],
      validation: Rule => Rule.max(12),
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
