import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    image: {
        domains: ['cdn.sanity.io']
    },
    vite: {
        server: {
            hmr: { path: '/vite-hmr/' }
        },
        optimizeDeps: { exclude: ['fsevents'] }
    },
    integrations: [
        tailwind({
            applyBaseStyles: false
        })
    ],
    server: {
        port: 3000
    }
});
