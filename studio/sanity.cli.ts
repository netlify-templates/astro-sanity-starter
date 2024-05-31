import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'SANITY_PROJECT_ID',
    dataset: 'production',
  },
})
