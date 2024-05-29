import { type Model } from '@stackbit/types';

export const Card: Model = {
    name: 'Card',
    type: 'object',
    label: 'Card',
    labelField: 'heading',
    fields: [
        {
            name: 'badge',
            type: 'model',
            models: ['Badge'],
            label: 'Badge'
        },
        {
            name: 'heading',
            type: 'string',
            label: 'Heading',
            default: 'This is a heading'
        },
        {
            name: 'body',
            type: 'markdown',
            label: 'Body',
            default: 'This is a description'
        },
        {
            name: 'cta',
            type: 'model',
            models: ['Button'],
            label: 'Call-to-action'
        },
        {
            name: 'image',
            type: 'model',
            models: ['Image'],
            label: 'Image'
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
            name: 'textAlign',
            type: 'enum',
            controlType: 'button-group',
            label: 'Text Align',
            description: 'The horizontal alignment of the card content.',
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Center',
                    value: 'center'
                }
            ],
            default: 'left',
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
