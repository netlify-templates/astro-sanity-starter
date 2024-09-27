import {defineField, defineType} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  icon: BlockquoteIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'styles',
      title: 'Styles',
    },
  ],
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'markdown',
      group: 'content',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
      group: 'content',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      description: 'The color theme of the testimonial.',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Transparent', value: 'transparent'},
        ],
      },
      group: 'styles',
    }),
    defineField({
      name: 'hasBorder',
      title: 'Border',
      description: 'If enabled, the border is added to the card',
      type: 'boolean',
      initialValue: true,
      group: 'styles',
    }),
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author.name',
    },
    prepare(selection) {
      return {
        title: selection.quote,
        subtitle: selection.author
      }
    },
  },
})
