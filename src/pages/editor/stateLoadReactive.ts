import { State } from './State'
import { stateLoad } from './stateLoad'

let cache: State | undefined = undefined

export async function stateLoadReactive(): Promise<State> {
  if (cache) return cache

  const state = await stateLoad()
  cache = state
  return state
}
