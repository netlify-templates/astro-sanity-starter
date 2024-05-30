import { type ModelExtension } from '@stackbit/types';

export const action: ModelExtension = {
    name: 'action',
    fields: [
        {
            name: 'variant',
            controlType: 'button-group'
        },
        {
            name: 'theme',
            controlType: 'palette',
            options: [
                {
                    label: 'Primary',
                    value: 'primary',
                    textColor: '#ffae9c',
                    backgroundColor: '#ffae9c',
                    borderColor: '#ececec'
                },
                {
                    label: 'Secondary',
                    value: 'secondary',
                    textColor: '#fff2d7',
                    backgroundColor: '#fff2d7',
                    borderColor: '#ececec'
                },
                {
                    label: 'Accent',
                    value: 'accent',
                    textColor: '#e3f1ff',
                    backgroundColor: '#e3f1ff',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral',
                    value: 'neutral',
                    textColor: '#d7d8e4',
                    backgroundColor: '#d7d8e4',
                    borderColor: '#ececec'
                }
            ]
        }
    ]
};
