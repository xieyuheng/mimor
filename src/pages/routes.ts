import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import Mimor from './mimor/Mimor.vue'
import Playgorund from './playground/Playgorund.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Playgorund },
  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:src(.*)', component: Mimor },
  { path: '/:path(.*)', component: PageNotFound },
]
