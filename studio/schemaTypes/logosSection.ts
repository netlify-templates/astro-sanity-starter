import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'
import {SECTION_BASE_FIELDS, SECTION_BASE_GROUPS} from './sectionBase'

export default defineType({
  name: 'logosSection',
  title: 'Logos',
  type: 'object',
  icon: SquareIcon,
  groups: SECTION_BASE_GROUPS,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'markdown',
      group: 'content',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'customImage'}],
      group: 'content',
    }),
    ...SECTION_BASE_FIELDS,
    defineField({
      name: 'motion',
      title: 'Motion',
      type: 'string',
      options: {
        list: [
          {title: 'Static', value: 'static'},
          {title: 'Move to left', value: 'moveToLeft'},
          {title: 'Move to right', value: 'moveToRight'},
        ],
      },
      initialValue: 'moveToLeft',
      group: 'styles',
    }),
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
})
