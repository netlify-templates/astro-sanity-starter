import { type ModelExtension } from '@stackbit/types';

export const backgroundImage: ModelExtension = {
    name: 'backgroundImage',
    fields: [
        {
            name: 'opacity',
            controlType: 'slider',
            min: 0,
            max: 100,
            step: 1,
            unit: '%'
        }
    ]
};
