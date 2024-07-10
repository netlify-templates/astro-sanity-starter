import { LinkIcon } from '@sanity/icons'

export default {
  name: 'actionLink',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      group: 'content',
    },
    {
      name: 'ariaLabel',
      title: 'ARIA Label',
      description:
        "(Optional) Provide additional information about the element's purpose and functionality to assistive technologies, such as screen readers",
      type: 'string',
      group: 'content',
    },
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
}
