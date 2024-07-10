import { InlineElementIcon } from '@sanity/icons'

export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  icon: InlineElementIcon,
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
      name: 'badge',
      title: 'Badge',
      type: 'badge',
      group: 'content',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      group: 'content',
    },
    {
      name: 'cta',
      title: 'Call-to-action',
      type: 'array',
      of: [{ type: 'actionButton' }, { type: 'actionLink' }],
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
      group: 'content',
    },
    {
      name: 'theme',
      title: 'Theme',
      description: 'The color theme of the card.',
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
      name: 'textAlign',
      title: 'Text Align',
      description: 'The horizontal alignment of the card content.',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
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
