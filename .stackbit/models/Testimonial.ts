import { type Model } from '@stackbit/types';

export const Testimonial: Model = {
    type: 'object',
    name: 'Testimonial',
    label: 'Testimonial',
    labelField: 'quote',
    fields: [
        {
            type: 'markdown',
            name: 'quote',
            label: 'Quote',
            required: false,
            default: 'This is a quote',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'author',
            label: 'Author',
            required: false,
            hidden: false,
            localized: false,
            models: ['Author']
        }
    ]
};
