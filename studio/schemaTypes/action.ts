import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'action',
  title: 'Action',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'styles',
      title: 'Styles',
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
    defineField({
      name: 'variant',
      title: 'Variant',
      description: 'The version of the call-to-action button',
      type: 'string',
      options: {
        list: [
          {title: 'Solid', value: 'solid'},
          {title: 'Outline', value: 'outline'},
          {title: 'Text', value: 'text'},
        ],
      },
      initialValue: 'solid',
      group: 'styles',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      description: 'The color theme of call-to-action button',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Accent', value: 'accent'},
          {title: 'Neutral', value: 'neutral'},
        ],
      },
      initialValue: 'primary',
      group: 'styles',
    }),
  ],
})
