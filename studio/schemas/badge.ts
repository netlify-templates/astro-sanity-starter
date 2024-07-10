export default {
  name: 'badge',
  title: 'Badge',
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
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'theme',
      title: 'Theme',
      description: 'The color theme of the badge',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Accent', value: 'accent' },
          { title: 'Neutral', value: 'neutral' },
        ],
      },
      initialValue: 'primary',
      group: 'styles',
    },
  ],
}
