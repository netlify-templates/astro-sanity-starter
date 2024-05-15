import { type Model } from '@stackbit/types';

export const Home: Model = {
    type: 'page',
    name: 'Home',
    label: 'Home',
    labelField: 'title',
    singleInstance: true,
    readOnly: true,
    hideContent: true,
    filePath: 'src/data/home.json',
    urlPath: '/',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: false,
            default: 'Page Title',
            hidden: false,
            localized: false
        },
        { type: 'model', name: 'hero', models: ['Hero'] },
        { type: 'model', name: 'summary', models: ['Summary'] },
        { type: 'model', name: 'cards', models: ['Cards'] },
        { type: 'model', name: 'logos', models: ['Logos'] },
        { type: 'model', name: 'metrics', models: ['Metrics'] },
        { type: 'model', name: 'testimonials', models: ['Testimonials'] },
        { type: 'model', name: 'cta', models: ['Cta'] }
    ]
};
