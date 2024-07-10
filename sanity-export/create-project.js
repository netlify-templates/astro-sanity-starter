import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { createClient } from '@sanity/client';
import Configstore from 'configstore';

const config = new Configstore('sanity', {}, { globalConfigPath: true });
const token = process.env.SANITY_TOKEN || config.get('authToken');
const dataset = process.env.SANITY_DATASET || 'production';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createProject({ projectName, dataset, token }) {
    if (!token) {
        throw new Error(
            'no sanity token provided, either provide an API token via "SANITY_TOKEN" environment variable or login into sanity using sanity cli "sanity login"'
        );
    }
    if (!dataset) {
        throw new Error('no dataset provided');
    }

    const client = createClient({
        useProjectHostname: false,
        apiVersion: '2024-01-31',
        token: token,
        useCdn: false
    });

    console.log('creating a project...');
    const project = await client.request({
        url: '/projects',
        method: 'POST',
        body: {
            displayName: projectName
        }
    });

    console.log('created a project, projectId:', project.id);

    console.log('creating a dataset...');
    await client.request({
        url: `/projects/${project.id}/datasets/${dataset}`,
        method: 'PUT',
        body: {
            aclMode: 'public'
        }
    });
    console.log('created a dataset');

    console.log('replacing sanity project ID in sanity.json files...');
    const studioDir = path.join(__dirname, '../studio');
    const configFilePath = path.join(studioDir, 'sanity.json');

    // Replace SANITY_PROJECT_ID in sanity.json
    let configFileContent = await fs.readFile(configFilePath, 'utf8');
    configFileContent = configFileContent.replace(/SANITY_PROJECT_ID/g, project.id);
    await fs.writeFile(configFilePath, configFileContent, 'utf8');

    console.log('replaced sanity project ID in sanity.json files');
}

createProject({
    projectName: 'My Sanity Project',
    dataset,
    token
}).catch((error) => {
    console.error('failed to create new project', error);
});
