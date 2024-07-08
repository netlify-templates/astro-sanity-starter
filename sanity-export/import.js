import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { createClient } from '@sanity/client';
import sanityImport from '@sanity/import';
import Configstore from 'configstore';

const config = new Configstore('sanity', {}, { globalConfigPath: true });
const token = config.get('authToken');
const projectId = process.argv[2];

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || projectId,
    dataset: process.env.SANITY_DATASET || 'production',
    token: process.env.SANITY_TOKEN || token,
    apiVersion: '2024-01-31',
    useCdn: false
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = fs.createReadStream(path.join(__dirname, 'export.tar.gz'));

sanityImport(input, {
    client: client,
    operation: 'createOrReplace' // `create`, `createOrReplace` or `createIfNotExists`
})
    .then(({ numDocs, warnings }) => {
        console.log('imported %d documents', numDocs);
        console.log('warnings:', warnings);
        // Note: There might be warnings! Check `warnings`
    })
    .catch((err) => {
        console.error('Import failed: %s', err.message);
    });
