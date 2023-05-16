import {defineConfig, createAuthStore} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'online tutoring system',
  projectId: '3iouolde',
  dataset: 'production',
<<<<<<< HEAD
  plugins: [deskTool(), visionTool(),muxInput()],
=======
  plugins: [
     deskTool(),
     visionTool(),
     muxInput({mp4_support: 'standard'})],
>>>>>>> 210bb2801df6794157d5b94077db8ac21ca1ecfe
  schema: {
    types: schemaTypes,
  },
})
