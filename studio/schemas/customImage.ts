export default {
  name: 'customImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'alt',
      title: 'Alt text',
      description: 'The alt text is used in the "alt" attribute of the img tag',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'image.asset.originalFilename',
      media: 'image.asset',
    },
    prepare(selection) {
      return {
        title: selection.name,
        media: selection.media,
      }
    },
  },
}
