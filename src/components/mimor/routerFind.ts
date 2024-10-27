import { XElement } from '@xieyuheng/x-node'
import { Route } from './Route'
import { Router } from './Router'

export function routerFind(
  router: Router,
  element: XElement,
): Route | undefined {
  return router.routes.find((route) => route.tag === element.tag)
}
