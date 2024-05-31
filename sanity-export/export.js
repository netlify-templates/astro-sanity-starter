#!/usr/bin/env node

const path = require('path');
const { createClient } = require('@sanity/client');
const exportDataset = require('@sanity/export');
require('dotenv').config();

// Load environment variables
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const token = process.env.SANITY_ACCESS_TOKEN;

const compress = true;

const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: '2024-01-31',
    token: token,
    useCdn: false
});

let currentStep = null;
const options = {
    client: client,
    dataset: 'production',
    outputPath: path.join(__dirname, compress ? 'export.tar.gz' : 'export.json'),

    compress: compress,
    drafts: true,
    assets: true,
    raw: false,
    assetConcurrency: 5,
    // types: '',

    onProgress: ({ step, current, total, update }) => {
        if (currentStep !== step) {
            if (currentStep) {
                return;
            }
            currentStep = step;
            console.log(step);
        }
    }
};

console.log('Start Sanity export');
exportDataset(options).then(() => {
    console.log('Start export finished');
});
