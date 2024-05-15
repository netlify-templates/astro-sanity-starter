import { type Model } from '@stackbit/types';

export const VideoBlock: Model = {
    type: 'object',
    name: 'VideoBlock',
    label: 'Video',
    labelField: 'id',
    fields: [
        {
            type: 'string',
            name: 'id',
            label: 'YouTube video ID',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'image',
            name: 'poster',
            label: 'Poster image',
            required: false,
            hidden: false,
            localized: false
        }
    ]
};
