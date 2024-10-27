import { useClientContext } from '../../clients/mimor'
import { useGlobalAuth } from '../../models/auth'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { State } from './State'

export type StateOptions = {}

export async function stateLoad(options: StateOptions): Promise<State> {
  const {} = options

  const ctx = useClientContext()
  await loginByTokenIfNotAlready()
  const auth = useGlobalAuth()

  const state: State = { user: auth.user }

  // if (state.user && (await userAvatarHas(state.user))) {
  //   state.avatarURL = userAvatarURL(state.user)
  // }

  return state
}
