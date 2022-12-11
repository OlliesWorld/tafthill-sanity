import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'taft-hill',

  projectId: 'g22q29ty',
  dataset: 'production',

  plugins: [deskTool(), visionTool({
    defaultApiVersion: 'v2021-10-21',
    defaultDataset: 'production',
  })],

  schema: {
    types: schemaTypes,
  },
})
