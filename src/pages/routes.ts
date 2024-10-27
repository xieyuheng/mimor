import type { RouteRecordRaw } from 'vue-router'
import Author from './author/Author.vue'
import CreateMimor from './create-mimor/CreateMimor.vue'
import Editor from './editor/Editor.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Login from './login/Login.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import Mimor from './mimor/Mimor.vue'
import Play from './play/Play.vue'
import Register from './register/Register.vue'
import Settings from './settings/Settings.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/play', component: Play },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:src(.*)', component: Mimor },
  { path: '/create', component: CreateMimor },
  { path: '/editor', component: Editor },
  { path: '/@:username', component: Author },
  { path: '/settings', component: Settings },
  { path: '/:path(.*)', component: PageNotFound },
]
