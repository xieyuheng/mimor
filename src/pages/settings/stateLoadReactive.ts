import { reactive } from 'vue'
import { useGlobalAuth } from '../../models/auth'
import { State } from './State'
import { StateOptions, stateLoad } from './stateLoad'

let cache: Record<string, State> = {}

export async function stateLoadReactive(options: StateOptions): Promise<State> {
  const auth = useGlobalAuth()

  if (auth.username && cache[auth.username]) {
    return cache[auth.username]
  }

  const state = reactive(await stateLoad(options))

  if (auth.username) {
    cache[auth.username] = state
  }

  return state
}
