import { BlockElementIcon } from '@sanity/icons'
import { SECTION_BASE_FIELDS, SECTION_BASE_GROUPS } from './sectionBase'

export default {
  name: 'heroSection',
  title: 'Hero',
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
      name: 'cta',
      title: 'Call-to-action',
      type: 'array',
      of: [{ type: 'actionButton' }, { type: 'actionLink' }],
      group: 'content',
    },
    ...SECTION_BASE_FIELDS,
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body',
    },
    prepare(selection) {
      return {
        title: `${selection.heading || selection.body || ''}`,
        subtitle: 'Hero',
      }
    },
  },
}
