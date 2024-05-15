import { type Model } from '@stackbit/types';

export const Facet: Model = {
    type: 'object',
    name: 'Facet',
    label: 'Facet',
    labelField: 'label',
    fields: [
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            required: false,
            default: 'Learn more',
            hidden: false,
            localized: false
        },
        {
            type: 'enum',
            name: 'icon',
            label: 'Icon',
            required: false,
            default: 'shapes',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Chart line',
                    value: 'chart-line'
                },
                {
                    label: 'Code branch',
                    value: 'code-branch'
                },
                {
                    label: 'Door open',
                    value: 'door-open'
                },
                {
                    label: 'Gauge max',
                    value: 'gauge-max'
                },
                {
                    label: 'Lightbulb on',
                    value: 'lightbulb-on'
                },
                {
                    label: 'Pen paintbrush',
                    value: 'pen-paintbrush'
                },
                {
                    label: 'Rocket launch',
                    value: 'rocket-launch'
                },
                {
                    label: 'Shapes',
                    value: 'shapes'
                },
                {
                    label: 'Sparkles',
                    value: 'sparkles'
                }
            ]
        }
    ]
};
