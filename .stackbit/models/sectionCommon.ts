import { type FieldExtension } from '@stackbit/types';

export const commonFields: FieldExtension[] = [
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
            }
        ],
        default: 'light',
        group: 'styles'
    },
    {
        name: 'width',
        controlType: 'button-group'
    }
];
