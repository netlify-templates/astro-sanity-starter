import { type ModelExtension } from '@stackbit/types';
import { commonFields } from './sectionCommon';

export const testimonialsSection: ModelExtension = {
    name: 'testimonialsSection',
    fields: [
        ...commonFields,
        {
            name: 'columns',
            controlType: 'button-group'
        }
    ]
};
