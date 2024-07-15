import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  description: 'Site general settings, header and footer configuration.',
  type: 'document',
  icon: CogIcon,
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
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
      group: 'content',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'content',
    }),
    defineField({
      name: 'titleSuffix',
      title: 'Suffix for page titles',
      description:
        'Suffix to append to the title tag of all pages, except in pages where the this behavior is disabled.',
      type: 'string',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'header.title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      }
    },
  },
})
