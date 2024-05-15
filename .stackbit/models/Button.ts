import { type Model } from '@stackbit/types';

export const Button: Model = {
    type: 'object',
    name: 'Button',
    label: 'Button',
    labelField: 'label',
    fields: [
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            required: false,
            default: 'Learn more',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'ariaLabel',
            label: 'Aria-label',
            description: 'The alternative text for screen readers',
            required: false,
            default: '',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            required: true,
            default: '/',
            hidden: false,
            localized: false
        },
        {
            type: 'enum',
            name: 'variant',
            label: 'Variant',
            required: false,
            default: 'primary',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Primary',
                    value: 'primary'
                },
                {
                    label: 'Secondary',
                    value: 'secondary'
                },
                {
                    label: 'Ghost',
                    value: 'ghost'
                }
            ],
            group: 'styles',
            controlType: 'button-group'
        },
        {
            type: 'string',
            name: 'id',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            required: false,
            default: '',
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'list',
            name: 'dataset',
            label: 'Data attributes',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['DataAttribute']
            },
            group: 'settings'
        }
    ],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
