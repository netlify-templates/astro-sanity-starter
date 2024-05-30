import { type ModelExtension } from '@stackbit/types';
import { commonFields } from './sectionCommon';

export const cardsSection: ModelExtension = {
    name: 'cardsSection',
    fields: [
        ...commonFields,
        {
            name: 'columns',
            controlType: 'button-group'
        }
    ]
};
