import { defineCustomElement } from 'vue'
import Mimor from './components/mimor/Mimor.ce.vue'

customElements.define('x-mimor', defineCustomElement(Mimor as any))
