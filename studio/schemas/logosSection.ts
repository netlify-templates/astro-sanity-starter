import { BlockElementIcon } from '@sanity/icons'
import { SECTION_BASE_FIELDS, SECTION_BASE_GROUPS } from './sectionBase'

export default {
  name: 'logosSection',
  title: 'Logos',
  type: 'object',
  icon: BlockElementIcon,
  groups: SECTION_BASE_GROUPS,
  fields: [
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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'customImage' }],
      group: 'content',
    },
    ...SECTION_BASE_FIELDS,
    {
      name: 'motion',
      title: 'Motion',
      type: 'string',
      options: {
        list: [
          { title: 'Static', value: 'static' },
          { title: 'Move to left', value: 'moveToLeft' },
          { title: 'Move to right', value: 'moveToRight' },
        ],
      },
      initialValue: 'moveToLeft',
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
        subtitle: 'Logos',
      }
    },
  },
}
