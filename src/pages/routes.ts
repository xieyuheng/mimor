import type { RouteRecordRaw } from 'vue-router'
import CreateMimor from './create-mimor/CreateMimor.vue'
import PageNotFound from './errors/PageNotFound.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import Mimor from './mimor/Mimor.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: CreateMimor },
  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:src(.*)', component: Mimor },
  { path: '/:path(.*)', component: PageNotFound },
]
