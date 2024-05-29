import { type Model } from '@stackbit/types';

export const Badge: Model = {
    name: 'Badge',
    type: 'object',
    label: 'Badge',
    labelField: 'text',
    fields: [
        {
            type: 'string',
            name: 'text',
            label: 'Text',
            default: 'This is the badge',
            required: true
        },
        {
            name: 'theme',
            type: 'enum',
            controlType: 'palette',
            label: 'Theme',
            description: 'The color theme of the badge',
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
            ],
            default: 'primary',
            group: 'styles'
        }
    ],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ]
};
