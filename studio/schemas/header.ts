import { BlockElementIcon } from '@sanity/icons'

export default {
  name: 'header',
  title: 'Header',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      group: 'content',
    },
    {
      name: 'navLinks',
      title: 'Navigation links',
      type: 'array',
      of: [{ type: 'actionButton' }, { type: 'actionLink' }],
      group: 'content',
    },
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
}
