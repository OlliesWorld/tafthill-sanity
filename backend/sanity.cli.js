import {defineCliConfig} from 'sanity/cli'

// import * as dotenv from 'dotenv'
// let projectId = import.meta.env?.SANITY_STUDIO_PROJECT_ID
// let dataset = import.meta.env?.SANITY_STUDIO_DATASET

// if (!projectId || !dataset ) {
//   dotenv.config({
//     path: `.env`,
//   })
//   projectId = process.env?.SANITY_STUDIO_PROJECT_ID
//   dataset = process.env?.SANITY_STUDIO_DATASET
// }


export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  },
  
})
