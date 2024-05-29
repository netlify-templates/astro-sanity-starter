import { type Model } from '@stackbit/types';

export const Button: Model = {
    name: 'Button',
    type: 'object',
    label: 'Button',
    labelField: 'label',
    fields: [
        {
            name: 'label',
            type: 'string',
            label: 'Label',
            default: 'Learn more',
            required: true
        },
        {
            name: 'ariaLabel',
            type: 'string',
            label: 'ARIA label',
            description: "Additional information about the element's purpose and functionality to assistive technologies, such as screen readers (optional)"
        },
        {
            name: 'url',
            type: 'string',
            label: 'URL',
            default: '/',
            required: true
        },
        {
            name: 'variant',
            type: 'enum',
            controlType: 'button-group',
            label: 'Variant',
            options: [
                {
                    label: 'Solid',
                    value: 'solid'
                },
                {
                    label: 'Outline',
                    value: 'outline'
                },
                {
                    label: 'Text',
                    value: 'text'
                }
            ],
            default: 'solid',
            group: 'styles'
        },
        {
            name: 'theme',
            type: 'enum',
            controlType: 'palette',
            label: 'Theme',
            description: 'The color theme of the button',
            options: [
                {
                    label: 'Primary',
                    value: 'primary',
                    textColor: '#ffae9c',
                    backgroundColor: '#ffae9c',
                    borderColor: '#ececec'
                },
                {
                    label: 'Secondary',
                    value: 'secondary',
                    textColor: '#fff2d7',
                    backgroundColor: '#fff2d7',
                    borderColor: '#ececec'
                },
                {
                    label: 'Accent',
                    value: 'accent',
                    textColor: '#e3f1ff',
                    backgroundColor: '#e3f1ff',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral',
                    value: 'neutral',
                    textColor: '#d7d8e4',
                    backgroundColor: '#d7d8e4',
                    borderColor: '#ececec'
                }
            ],
            default: 'primary',
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
