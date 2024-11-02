import { defineCustomElement } from 'vue'
import MimorComponent from './components/mimor/Mimor.ce.vue'
export { mimorKeywords } from './components/mimor/mimorKeywords'

export const Mimor = defineCustomElement(MimorComponent)

customElements.define('x-mimor', Mimor)
