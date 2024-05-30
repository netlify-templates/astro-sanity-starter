import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
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
    defineField({
      name: 'name',
      title: 'Name',
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
})
