import { type Model } from '@stackbit/types';

export const Image: Model = {
    name: 'Image',
    type: 'object',
    label: 'Image',
    labelField: 'alt',
    fields: [
        {
            name: 'src',
            type: 'image',
            label: 'Image',
            required: true
        },
        {
            name: 'alt',
            type: 'string',
            label: 'Alt text',
            description: 'The alt text of the image'
        }
    ]
};
