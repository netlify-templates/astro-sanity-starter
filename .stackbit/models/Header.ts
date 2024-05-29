import { type Model } from '@stackbit/types';

export const Header: Model = {
    name: 'Header',
    type: 'object',
    label: 'Header',
    labelField: 'title',
    readOnly: true,
    fields: [
        {
            name: 'title',
            type: 'string',
            label: 'Title',
            default: 'Company'
        },
        {
            name: 'navLinks',
            type: 'list',
            label: 'Navigation links',
            items: {
                type: 'model',
                models: ['Button']
            }
        }
    ]
};
