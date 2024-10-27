import type { RouteRecordRaw } from 'vue-router'
import CreateMimor from './create-mimor/CreateMimor.vue'
import PageNotFound from './errors/PageNotFound.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import Mimor from './mimor/Mimor.vue'
import Play from './play/Play.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/play', component: Play },
  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:src(.*)', component: Mimor },
  { path: '/create', component: CreateMimor },
  { path: '/:path(.*)', component: PageNotFound },
]
