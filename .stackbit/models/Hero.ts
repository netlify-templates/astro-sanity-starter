import { type Model } from '@stackbit/types';

export const Hero: Model = {
    type: 'object',
    name: 'Hero',
    label: 'Hero',
    labelField: 'heading[0]',
    fields: [
        {
            type: 'list',
            name: 'heading',
            label: 'Heading',
            required: false,
            default: ['This is a heading'],
            hidden: false,
            localized: false,
            items: { type: 'string' }
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
            name: 'ctas',
            label: 'CTAs',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Button']
            }
        },
        {
            type: 'model',
            name: 'video',
            label: 'Video',
            required: false,
            hidden: false,
            localized: false,
            models: ['VideoBlock']
        },
        {
            type: 'model',
            name: 'backgroundImage',
            label: 'Background image',
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
