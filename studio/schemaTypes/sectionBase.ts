import {defineField} from 'sanity'

export const SECTION_BASE_GROUPS = [
  {
    name: 'content',
    title: 'Content',
    default: true,
  },
  {
    name: 'styles',
    title: 'Styles',
  },
]

export const SECTION_BASE_FIELDS = [
  defineField({
    name: 'theme',
    title: 'Theme',
    description: 'The color theme of the section.',
    type: 'string',
    options: {
      list: [
        {title: 'Light', value: 'light'},
        {title: 'Dark', value: 'dark'},
      ],
    },
    initialValue: 'light',
    group: 'styles',
  }),
  defineField({
    name: 'backgroundImage',
    title: 'Background Image',
    type: 'backgroundImage',
    group: 'styles',
  }),
  defineField({
    name: 'width',
    title: 'Width',
    description:
      'The width of the section. If set to "full" the section spans the full width of the screen, otherwise it is equally indented from both sides of the screen.',
    type: 'string',
    options: {
      list: [
        {title: 'Full', value: 'full'},
        {title: 'Inset', value: 'inset'},
      ],
    },
    initialValue: 'full',
    group: 'styles',
  }),
]
