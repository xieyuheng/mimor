import { markRaw } from 'vue'
import { Route } from './Route'
import { Router } from './Router'

export type RouterOptions = {
  routes: Array<Route>
}

export function routerCreate(options: RouterOptions): Router {
  const routes = options.routes.map((route) => ({
    ...route,
    component: markRaw(route.component),
  }))

  return { routes }
}
