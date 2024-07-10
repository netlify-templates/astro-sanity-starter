import { BlockquoteIcon } from '@sanity/icons'

export default {
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
    {
      name: 'quote',
      title: 'Quote',
      type: 'markdown',
      group: 'content',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
      group: 'content',
    },
    {
      name: 'theme',
      title: 'Theme',
      description: 'The color theme of the testimonial.',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
          { title: 'Transparent', value: 'transparent' },
        ],
      },
      group: 'styles',
    },
    {
      name: 'hasBorder',
      title: 'Border',
      description: 'If enabled, the border is added to the card',
      type: 'boolean',
      initialValue: true,
      group: 'styles',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body',
    },
    prepare(selection) {
      return {
        title: `${selection.heading || selection.body || ''}`,
      }
    },
  },
}
