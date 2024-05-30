import { type ModelExtension } from '@stackbit/types';
import { commonFields } from './sectionCommon';

export const logosSection: ModelExtension = {
    name: 'logosSection',
    fields: [
        ...commonFields,
        {
            name: 'motion',
            controlType: 'button-group'
        }
    ]
};
