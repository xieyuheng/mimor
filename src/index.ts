import { createHead } from '@vueuse/head'
import { defineCustomElement } from 'vue'
import MimorComponent from './components/mimor/Mimor.ce.vue'

export { mimorKeywords } from './components/mimor/mimorKeywords'

export const Mimor = defineCustomElement(MimorComponent, {
  configureApp(app) {
    app.use(createHead())
  },
})
