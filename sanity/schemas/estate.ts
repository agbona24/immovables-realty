import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'estate',
  title: 'Estate',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Estate Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short catchy phrase for the estate',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g., "PREMIUM ESTATE" or "SERENE LIVING"',
    }),
    defineField({
      name: 'color',
      title: 'Theme Color',
      type: 'string',
      description: 'Tailwind gradient classes, e.g., "from-brand-blue to-blue-800"',
    }),
    defineField({
      name: 'priceList',
      title: 'Price List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'plotSize', title: 'Plot Size', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'paymentPlan', title: 'Payment Plan Available', type: 'boolean' },
          ],
        },
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
          ],
        },
      ],
    }),
    defineField({
      name: 'paymentPlans',
      title: 'Payment Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Plan Name', type: 'string' },
            { name: 'duration', title: 'Duration', type: 'string' },
            { name: 'deposit', title: 'Initial Deposit', type: 'string' },
            { name: 'details', title: 'Plan Details', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'coordinates',
      title: 'Location Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      tagline: 'tagline',
      media: 'image',
    },
    prepare({ title, tagline, media }) {
      return {
        title,
        subtitle: tagline,
        media,
      }
    },
  },
})
