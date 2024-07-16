import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '__SANITY_PROJECT_ID__',
    dataset: 'production',
  },
})
