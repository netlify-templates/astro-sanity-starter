import {defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Page',
  description: 'A page with dynamic list of sections',
  type: 'document',
  icon: ComposeIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Should not contain a leading slash and must contain a trailing slash.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      description: 'The list containing the sections of a page',
      type: 'array',
      of: [
        {type: 'cardsSection'},
        {type: 'ctaSection'},
        {type: 'heroSection'},
        {type: 'logosSection'},
        {type: 'testimonialsSection'},
      ],
      group: 'content',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Title',
      description: 'A page title for SEO and social sharing. Ideally between 15 and 70 characters.',
      type: 'string',
      validation: (Rule) => Rule.max(70).warning('Consider shortening the title'),
      group: 'seo',
    }),
    defineField({
      name: 'addTitleSuffix',
      title: 'Add title suffix',
      description:
        'If enabled, the title suffix defined in the site configuration is appended to the title tag of this page.',
      type: 'boolean',
      initialValue: true,
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Description',
      description:
        'A short paragraph for SEO and social sharing. Ideally between 70 and 160 characters.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Consider shortening the description'),
      group: 'seo',
    }),
    defineField({
      name: 'socialImage',
      title: 'Image',
      description: 'Open graph image used in social sharing.',
      type: 'image',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: subtitle ? subtitle : '',
      }
    },
  },
})
