import { type Model } from '@stackbit/types';

export const Person: Model = {
    name: 'Person',
    type: 'object',
    label: 'Person',
    labelField: 'name',
    fields: [
        {
            name: 'name',
            type: 'string',
            label: 'Name',
            default: 'Person Name'
        },
        {
            name: 'title',
            type: 'string',
            label: 'Title',
            default: 'Person Title'
        },
        {
            name: 'image',
            type: 'model',
            models: ['Image'],
            label: 'Image'
        }
    ]
};
