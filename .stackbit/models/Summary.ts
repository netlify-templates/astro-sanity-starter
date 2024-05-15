import { type Model } from '@stackbit/types';

export const Summary: Model = {
    type: 'object',
    name: 'Summary',
    label: 'Summary',
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
            name: 'supporting',
            label: 'Supporting',
            required: false,
            default: 'This is a description',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'cta',
            label: 'CTs',
            required: false,
            hidden: false,
            localized: false,
            models: ['Button']
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
