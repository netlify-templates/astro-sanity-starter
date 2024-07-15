import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  icon: SquareIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
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
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      group: 'content',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation links',
      type: 'array',
      of: [{type: 'actionButton'}, {type: 'actionLink'}],
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo.image.asset',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      }
    },
  },
})
