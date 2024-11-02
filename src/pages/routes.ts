import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Playgorund from './playground/Playgorund.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/playgorund' },
  { path: '/playgorund', component: Playgorund },
  { path: '/:path(.*)', component: PageNotFound },
]
