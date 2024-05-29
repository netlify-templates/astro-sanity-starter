import { type Model } from '@stackbit/types';

export const Hero: Model = {
    name: 'Hero',
    type: 'object',
    label: 'Hero',
    labelField: 'heading',
    groups: ['pageSection'],
    fields: [
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
            type: 'list',
            label: 'Call-to-action',
            items: {
                type: 'model',
                models: ['Button']
            }
        },
        {
            name: 'width',
            type: 'enum',
            controlType: 'button-group',
            label: 'Width',
            description:
                'The width of the section. If set to "full" the section spans the full width of the screen, otherwise it is equally indented from both sides of the screen.',
            options: [
                {
                    label: 'Full',
                    value: 'full'
                },
                {
                    label: 'Inset',
                    value: 'inset'
                }
            ],
            default: 'full',
            group: 'styles'
        },
        {
            name: 'theme',
            type: 'enum',
            controlType: 'palette',
            label: 'Theme',
            description: 'The color theme of the section',
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
                }
            ],
            default: 'light',
            group: 'styles'
        },
        {
            name: 'backgroundImage',
            type: 'model',
            models: ['BackgroundImage'],
            label: 'Background Image',
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
