import { stateCreate as createSearchState } from '../../components/search/stateCreate'
import { useGlobalAuth } from '../../models/auth'
import { userGet, userMimors } from '../../models/user'
import { State } from './State'

export type StateOptions = {
  username: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { username } = options

  const auth = useGlobalAuth()
  const user = await userGet(username)
  const mimors = await userMimors(username)
  const entries = mimors.map((mimor) => ({ mimor }))

  return {
    username,
    user,
    isSelf: auth.username === username,
    searchState: createSearchState({ targets: {} }),
    entries,
    lastRefreshedAt: Date.now(),
  }
}
