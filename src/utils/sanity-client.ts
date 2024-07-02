import { loadEnv } from 'vite';
import { createClient, type ClientConfig } from '@sanity/client';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN, STACKBIT_PREVIEW, SANITY_PREVIEW_DRAFTS } = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');
const isDev = import.meta.env.DEV;
const isDeployPreview = process.env.CONTEXT === 'deploy-preview';
const previewDrafts = STACKBIT_PREVIEW?.toLowerCase() === 'true' || SANITY_PREVIEW_DRAFTS?.toLowerCase() === 'true';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sanityConfig: ClientConfig = {
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-01-31',
    token: SANITY_TOKEN,
    perspective: isDev || isDeployPreview || previewDrafts ? 'previewDrafts' : 'published'
};

export const client = createClient(sanityConfig);
export const legacyClient = createClient({ ...sanityConfig, dataset: 'production' });

export async function getDocumentById(id: string) {
    const result = client.fetch(`*[_id == $id]`, {
        id
    });
    return result;
}

export async function updateDocumentType(id: string, type: string) {
    const result = client.patch(id).set({ type });
    return result;
}

client.listen(`*[_type in ["page"]]`, {}, { visibility: 'query' }).subscribe(async (event: any) => {
    // only refresh when pages are deleted or created
    if (event.transition === 'appear' || event.transition === 'disappear') {
        const filePath = path.join(__dirname, '../layouts/Layout.astro');

        const time = new Date();

        // update the updatedat stamp for the layout file, triggering astro to refresh the data in getStaticPaths
        await fs.promises.utimes(filePath, time, time);
    }
});
