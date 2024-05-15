import { type Model } from '@stackbit/types';

export const DataAttribute: Model = {
    type: 'object',
    name: 'DataAttribute',
    label: 'Data Attribute',
    labelField: 'name',
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'value',
            label: 'Value',
            required: false,
            hidden: false,
            localized: false
        }
    ]
};
