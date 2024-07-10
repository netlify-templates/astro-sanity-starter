import { HomeIcon } from '@sanity/icons'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: HomeIcon,
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
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      group: 'content',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'logo.image.asset',
    },
    prepare(selection) {
      return {
        title: selection.name,
        media: selection.media,
      }
    },
  },
}
