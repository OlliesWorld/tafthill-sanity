import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dashboardTool, 
  projectUsersWidget,
  projectInfoWidget} from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";


export default defineConfig({
  name: 'default',
  title: 'taft-hill',

  projectId: import.meta.env.SANITY_STUDIO_PROJECTID,
  dataset: 'production',

  plugins: [
    dashboardTool({ 
      widgets: [ 
        documentListWidget({title: 'Last edited page', order: '_updatedAt desc'}),
        projectInfoWidget(),
        projectUsersWidget(),
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: import.meta.env.SANITY_STUDIO_APIID,
              buildHookId: import.meta.env.SANITY_STUDIO_BUILDHOOK,
              name: 'tafthill-studio',
            },
            {
              title: 'Taft Hill',
              apiId: import.meta.env.SANITY_STUDIO_APIID,
              buildHookId: import.meta.env.SANITY_STUDIO_BUILDHOOK,
              name: 'tafthill-studio',
              url: import.meta.env.SANITY_STUDIO_BUILDHOOK,
            }
          ]
      })
      ]
      }), 
    deskTool(), visionTool({
    defaultApiVersion: 'v2023-01-20',
    defaultDataset: 'production',
  })],

  schema: {
    types: schemaTypes,
  },
})
