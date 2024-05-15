import { type Model } from '@stackbit/types';

export const Author: Model = {
    type: 'object',
    name: 'Author',
    label: 'Author',
    labelField: 'name',
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: false,
            default: 'Name Surname',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: false,
            default: 'Author Title',
            hidden: false,
            localized: false
        },
        {
            type: 'image',
            name: 'avatar',
            label: 'Avatar',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'company',
            label: 'Company',
            required: false,
            hidden: false,
            localized: false,
            models: ['Company']
        }
    ]
};
