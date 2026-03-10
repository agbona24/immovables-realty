import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Profession',
      type: 'string',
      description: 'e.g., "Real Estate Investor" or "Business Owner"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Lagos" or "Abeokuta"',
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'e.g., "AO" for avatar display',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional profile photo',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this testimonial prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      location: 'location',
      media: 'image',
    },
    prepare({ title, role, location, media }) {
      return {
        title,
        subtitle: `${role} • ${location}`,
        media,
      }
    },
  },
})
