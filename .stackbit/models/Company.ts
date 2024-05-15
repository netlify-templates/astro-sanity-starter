import { type Model } from '@stackbit/types';

export const Company: Model = {
    type: 'object',
    name: 'Company',
    label: 'Company',
    labelField: 'name',
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'name',
            required: false,
            default: 'Company Name',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'logo',
            label: 'Logo',
            required: false,
            hidden: false,
            localized: false,
            models: ['ImageBlock']
        }
    ]
};
