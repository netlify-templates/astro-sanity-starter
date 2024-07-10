import { UserIcon } from '@sanity/icons'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
      group: 'content',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
      group: 'content',
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
      media: 'image.image.asset',
    },
    prepare(selection) {
      return {
        title: selection.name,
        subtitle: selection.title,
        media: selection.media,
      }
    },
  },
}
