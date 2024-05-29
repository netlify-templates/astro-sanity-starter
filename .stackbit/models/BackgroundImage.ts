import { type Model } from '@stackbit/types';

export const BackgroundImage: Model = {
    name: 'BackgroundImage',
    type: 'object',
    label: 'Background Image',
    labelField: 'image.alt',
    fields: [
        {
            name: 'image',
            type: 'model',
            models: ['Image'],
            label: 'Image'
        },
        {
            name: 'opacity',
            type: 'number',
            controlType: 'slider',
            min: 0,
            max: 100,
            step: 1,
            unit: '%',
            label: 'Opacity',
            default: 100
        }
    ]
};
