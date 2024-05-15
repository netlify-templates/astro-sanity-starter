import { type Model } from '@stackbit/types';

export const MetricsItem: Model = {
    type: 'object',
    name: 'MetricsItem',
    label: 'Metrics Item',
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
        }
    ]
};
