import { createHead } from '@vueuse/head'
import { defineCustomElement } from 'vue'
import Mimor from './components/mimor/Mimor.ce.vue'

export { mimorKeywords } from './components/mimor/mimorKeywords'

export const MimorElement = defineCustomElement(Mimor, {
  configureApp(app) {
    app.use(createHead())
  },
})
