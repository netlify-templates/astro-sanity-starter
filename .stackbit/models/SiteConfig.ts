import { type Model } from '@stackbit/types';

export const SiteConfig: Model = {
    name: 'SiteConfig',
    type: 'data',
    label: 'Site Configuration',
    singleInstance: true,
    readOnly: true,
    filePath: 'src/data/siteConfig.json',
    fields: [
        {
            name: 'favicon',
            type: 'image',
            label: 'Favicon'
        },
        {
            name: 'header',
            type: 'model',
            models: ['Header'],
            label: 'Header'
        },
        {
            name: 'footer',
            type: 'model',
            models: ['Footer'],
            label: 'Footer '
        },
        {
            type: 'string',
            name: 'titleSuffix',
            label: 'Suffix for page titles',
            description: 'Suffix to append to the title tag of all pages, except in pages where the this behavior is disabled.',
            group: 'seo',
            default: null
        }
    ],
    fieldGroups: [
        {
            name: 'seo',
            label: 'SEO',
            icon: 'page'
        }
    ]
};
