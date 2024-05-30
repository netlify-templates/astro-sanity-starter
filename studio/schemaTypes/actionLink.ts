import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'actionLink',
  title: 'Link',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'ariaLabel',
      title: 'ARIA Label',
      description:
        "(Optional) Provide additional information about the element's purpose and functionality to assistive technologies, such as screen readers",
      type: 'string',
      group: 'content',
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection) {
      return {
        title: selection.label,
        subtitle: 'Link',
      }
    },
  },
})
