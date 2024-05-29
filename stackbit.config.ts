import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from './.stackbit/models';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
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
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['src/content', 'src/data'],
            models: Object.values(allModels),
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: '/',
                publicPath: '/'
            }
        })
    ]
});
