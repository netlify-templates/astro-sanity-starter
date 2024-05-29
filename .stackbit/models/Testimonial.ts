import { type Model } from '@stackbit/types';

export const Testimonial: Model = {
    name: 'Testimonial',
    type: 'object',
    label: 'Testimonial',
    labelField: 'quote',
    fields: [
        {
            name: 'badge',
            type: 'model',
            models: ['Badge'],
            label: 'Badge'
        },
        {
            name: 'quote',
            type: 'markdown',
            label: 'Quote',
            default: 'This is the quote.',
            required: true
        },
        {
            name: 'author',
            type: 'model',
            models: ['Person'],
            label: 'Author'
        },
        {
            name: 'theme',
            type: 'enum',
            controlType: 'palette',
            label: 'Theme',
            description: 'The color theme of the card',
            options: [
                {
                    label: 'Light',
                    value: 'light',
                    textColor: '#171227',
                    backgroundColor: '#ffffff',
                    borderColor: '#ececec'
                },
                {
                    label: 'Dark',
                    value: 'dark',
                    textColor: '#d7d8e4',
                    backgroundColor: '#171227',
                    borderColor: '#ececec'
                },
                {
                    label: 'None',
                    value: 'none',
                    textColor: '#171227',
                    backgroundColor: 'transparent',
                    borderColor: '#ececec'
                }
            ],
            default: 'none',
            group: 'styles'
        },
        {
            name: 'hasBorder',
            type: 'boolean',
            label: 'Border',
            description: 'If enabled, the border is added to the card',
            default: true,
            group: 'styles'
        }
    ],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ]
};
