import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const personalTrainers = defineType({
  name: 'personalTrainers',
  title: 'Personal Trainers',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above the heading (e.g. "Meet The Team")',
      initialValue: 'Meet The Team',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main title of the PT section',
      initialValue: 'Our Personal Trainers',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading / Intro',
      type: 'text',
      rows: 3,
      description: 'A sentence or two about the team — qualifications, experience, etc.',
      initialValue: 'All of our personal trainers are fully qualified to at least REPS Level 3, with years of real-world experience helping clients reach their goals.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Personal Trainers — Section Settings' }) },
})
