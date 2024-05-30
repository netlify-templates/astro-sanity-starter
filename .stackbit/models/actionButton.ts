import { type ModelExtension } from '@stackbit/types';

export const actionButton: ModelExtension = {
    name: 'actionButton',
    fields: [
        {
            name: 'theme',
            controlType: 'palette',
            options: [
                {
                    label: 'Primary',
                    value: 'primary',
                    textColor: '#171227',
                    backgroundColor: '#ffae9c',
                    borderColor: '#ececec'
                },
                {
                    label: 'Secondary',
                    value: 'secondary',
                    textColor: '#171227',
                    backgroundColor: '#fff2d7',
                    borderColor: '#ececec'
                },
                {
                    label: 'Accent',
                    value: 'accent',
                    textColor: '#171227',
                    backgroundColor: '#e3f1ff',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral',
                    value: 'neutral',
                    textColor: '#d7d8e4',
                    backgroundColor: '#171227',
                    borderColor: '#ececec'
                }
            ]
        }
    ]
};
