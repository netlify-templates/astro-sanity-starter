import { type Model } from '@stackbit/types';

export const ImageBlock: Model = {
    type: 'object',
    name: 'ImageBlock',
    label: 'Image',
    labelField: 'alt',
    fields: [
        {
            type: 'image',
            name: 'src',
            label: 'Image',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'alt',
            label: 'Alt text',
            description: 'The alt text of the image',
            required: false,
            default: 'alt text of the image',
            hidden: false,
            localized: false
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
            type: 'number',
            name: 'width',
            label: 'Width',
            required: false,
            hidden: false,
            localized: false,
            subtype: 'int',
            group: 'settings'
        },
        {
            type: 'number',
            name: 'height',
            label: 'Height',
            required: false,
            hidden: false,
            localized: false,
            subtype: 'int',
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
