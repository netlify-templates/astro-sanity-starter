import { BlockElementIcon } from '@sanity/icons'
import { SECTION_BASE_FIELDS, SECTION_BASE_GROUPS } from './sectionBase'

export default {
  name: 'testimonialsSection',
  title: 'Testimonials',
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
      of: [{ type: 'testimonial' }],
      group: 'content',
    },
    ...SECTION_BASE_FIELDS,
    {
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          { title: '1', value: 'one' },
          { title: '2', value: 'two' },
        ],
      },
      initialValue: 'two',
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
        subtitle: 'Testimonials',
      }
    },
  },
}
