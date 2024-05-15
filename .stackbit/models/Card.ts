import { type Model } from '@stackbit/types';

export const Card: Model = {
    type: 'object',
    name: 'Card',
    label: 'Card',
    labelField: 'heading',
    fields: [
        {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: false,
            default: 'This is a heading',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'subheading',
            label: 'Subheading',
            required: false,
            default: 'This is a subheading',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'supporting',
            label: 'Supporting',
            required: false,
            default: 'This is a description',
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'facets',
            label: 'Facets',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Facet']
            }
        },
        {
            type: 'model',
            name: 'cta',
            label: 'CTA',
            required: false,
            hidden: false,
            localized: false,
            models: ['Button']
        },
        {
            type: 'model',
            name: 'image',
            label: 'Image',
            required: false,
            hidden: false,
            localized: false,
            models: ['ImageBlock']
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
        }
    ],
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
