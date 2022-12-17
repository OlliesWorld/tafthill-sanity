import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dashboardTool, 
  projectUsersWidget,
  projectInfoWidget} from "@sanity/dashboard";
  import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";


export default defineConfig({
  name: 'default',
  title: 'taft-hill',

  projectId: 'g22q29ty',
  dataset: 'production',

  plugins: [
    dashboardTool({ 
      widgets: [ 
        documentListWidget({title: 'Last edited page', order: '_updatedAt desc'}),
        projectInfoWidget(),
        projectUsersWidget(),
      ]
      }), 
    deskTool(), visionTool({
    defaultApiVersion: 'v2021-10-21',
    defaultDataset: 'production',
  })],

  schema: {
    types: schemaTypes,
  },
})
