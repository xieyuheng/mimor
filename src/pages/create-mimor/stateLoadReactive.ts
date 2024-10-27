import { reactive } from 'vue'
import { State } from './State'
import { StateOptions, stateLoad } from './stateLoad'

let cache:
  | {
      state: State
      username: string
    }
  | undefined = undefined

export async function stateLoadReactive(options: StateOptions): Promise<State> {
  const { username } = options
  if (cache && cache.username === username) return cache.state

  const state = reactive(await stateLoad(options))
  cache = { state, username }
  return state
}
