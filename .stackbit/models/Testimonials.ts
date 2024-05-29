import { type Model } from '@stackbit/types';

export const Testimonials: Model = {
    name: 'Testimonials',
    type: 'object',
    label: 'Testimonials',
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
            name: 'testimonials',
            type: 'list',
            label: 'Testimonials',
            items: {
                type: 'model',
                models: ['Testimonial']
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
        },
        {
            name: 'columns',
            type: 'enum',
            controlType: 'button-group',
            label: 'Columns',
            options: [
                {
                    label: '1',
                    value: 'one'
                },
                {
                    label: '2',
                    value: 'two'
                }
            ],
            default: 'two',
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
