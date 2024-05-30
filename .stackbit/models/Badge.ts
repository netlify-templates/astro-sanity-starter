import { type ModelExtension } from '@stackbit/types';

export const badge: ModelExtension = {
    name: 'badge',
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
                    textColor: '#171227',
                    backgroundColor: '#d7d8e4',
                    borderColor: '#ececec'
                }
            ]
        }
    ]
};
