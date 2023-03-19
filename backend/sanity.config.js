import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dashboardTool, 
  projectUsersWidget,
  projectInfoWidget} from "@sanity/dashboard";
  import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
  import {media, mediaAssetSource} from 'sanity-plugin-media'
  import * as dotenv from 'dotenv'
  
  let projectId = import.meta.env?.SANITY_STUDIO_PROJECT_ID
  let dataset = import.meta.env?.SANITY_STUDIO_DATASET

  if (!projectId || !dataset ) {
    dotenv.config({
      path: `.env`,
    })
    projectId = process.env?.SANITY_STUDIO_PROJECT_ID
    dataset = process.env?.SANITY_STUDIO_DATASET
  }

  export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId,
  dataset,

  plugins: [
    dashboardTool({ 
    widgets: [ 
      documentListWidget({title: 'Last edited page', order: '_updatedAt desc'}),
      projectInfoWidget(),
      projectUsersWidget(),
      
    ]
    }), deskTool(), visionTool(), media()],
    form: {
      // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
      file: {
        assetSources: previousAssetSources => {
          return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
        }
      }
    },
  schema: {
    types: schemaTypes,
  },
})
