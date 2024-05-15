import { type Model } from '@stackbit/types';

export const Testimonials: Model = {
    type: 'object',
    name: 'Testimonials',
    label: 'Testimonials',
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
            type: 'list',
            name: 'testimonials',
            label: 'Testimonials',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Testimonial']
            }
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
