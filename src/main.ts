import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import App from './App.vue'
import { Mimor } from './index'
import router from './router'
import './styles/index.css'

const app = createApp(App)

app.use(router)
app.use(createHead())

customElements.define('x-mimor', Mimor)

app.mount('#app')
