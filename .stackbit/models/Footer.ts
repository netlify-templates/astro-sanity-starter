import { type Model } from '@stackbit/types';

export const Footer: Model = {
    name: 'Footer',
    type: 'object',
    label: 'Footer',
    labelField: 'copyrightText',
    readOnly: true,
    fields: [
        {
            name: 'copyrightText',
            type: 'markdown',
            label: 'Copyright text',
            default: 'Company © 2024'
        }
    ]
};
