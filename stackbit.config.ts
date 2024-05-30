import path from 'path';
import { defineStackbitConfig } from '@stackbit/types';
import { SanityContentSource } from '@stackbit/cms-sanity';
import { allModelExtensions } from './.stackbit/models';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    nodeVersion: '18',
    ssgName: 'custom',
    devCommand: 'node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1',
    experimental: {
        ssg: {
            name: 'Astro',
            logPatterns: {
                up: ['is ready', 'astro']
            },
            directRoutes: {
                'socket.io': 'socket.io'
            },
            passthrough: ['/vite-hmr/**']
        }
    },
    contentSources: [
        new SanityContentSource({
            rootPath: __dirname,
            studioPath: path.join(__dirname, 'studio'),
            studioUrl: '',
            projectId: process.env.SANITY_PROJECT_ID!,
            token: process.env.SANITY_ACCESS_TOKEN!,
            dataset: process.env.SANITY_DATASET || 'production'
        })
    ],
    modelExtensions: allModelExtensions
});
