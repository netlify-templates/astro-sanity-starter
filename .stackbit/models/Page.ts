import { type PageModel } from '@stackbit/types';

export const Page: PageModel = {
    name: 'Page',
    type: 'page',
    label: 'Page',
    hideContent: true,
    urlPath: '/{slug}',
    filePath: 'src/content/pages/{slug}.md',
    fields: [
        {
            name: 'title',
            type: 'string',
            label: 'Title',
            default: 'Page Title',
            required: true
        },
        {
            name: 'sections',
            type: 'list',
            label: 'Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['pageSection']
            }
        },
        {
            name: 'metaTitle',
            type: 'string',
            label: 'Meta title',
            description: 'By default, the <title> tag for this page is determined by the page title. You can override the page title here.',
            default: null,
            group: 'seo'
        },
        {
            name: 'addTitleSuffix',
            type: 'boolean',
            label: 'Add title suffix',
            description: 'If enabled, the title suffix defined in the site configuration is appended to the title tag of this page.',
            default: true,
            group: 'seo'
        },
        {
            name: 'metaDescription',
            type: 'string',
            label: 'Meta description',
            description: 'The description tag is used by search engines and for social sharing. By default, the tag is not set.',
            default: null,
            group: 'seo'
        },
        {
            name: 'socialImage',
            type: 'image',
            label: ' Image for social sharing',
            description: 'Set the image used when sharing this page on social networks (e.g. Facebook, X).',
            default: null,
            group: 'seo'
        },
        {
            name: 'theme',
            type: 'enum',
            controlType: 'palette',
            label: 'Theme',
            description: 'The color theme of the page',
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
        }
    ],
    fieldGroups: [
        { name: 'seo', label: 'SEO', icon: 'page' },
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ]
};
