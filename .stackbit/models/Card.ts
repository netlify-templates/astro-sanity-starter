import { type ModelExtension } from '@stackbit/types';

export const card: ModelExtension = {
    name: 'card',
    fields: [
        {
            name: 'theme',
            controlType: 'palette',
            options: [
                {
                    label: 'Light',
                    value: 'light',
                    textColor: '#171227',
                    backgroundColor: '#ffffff',
                    borderColor: '#ececec'
                },
                {
                    label: 'Dark',
                    value: 'dark',
                    textColor: '#d7d8e4',
                    backgroundColor: '#171227',
                    borderColor: '#ececec'
                },
                {
                    label: 'Transparent',
                    value: 'transparent',
                    textColor: '#171227',
                    backgroundColor: 'transparent',
                    borderColor: '#ececec'
                }
            ]
        },
        {
            name: 'textAlign',
            controlType: 'button-group'
        }
    ]
};
