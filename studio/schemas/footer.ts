import { BlockElementIcon } from '@sanity/icons'

export default {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  icon: BlockElementIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      group: 'content',
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      return {
        title: selection.text,
      }
    },
  },
}
