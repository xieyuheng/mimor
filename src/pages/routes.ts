import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Playground from './playground/Playground.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/playground' },
  { path: '/playground', component: Playground },
  { path: '/playground/:encoded', component: Playground },
  { path: '/:path(.*)', component: PageNotFound },
]
