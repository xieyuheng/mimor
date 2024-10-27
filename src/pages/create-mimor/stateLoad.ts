import { userGet } from '../../models/user'
import { editorCreate } from './Editor'
import { State } from './State'

export type StateOptions = {
  username: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { username } = options

  const user = await userGet(username)
  if (!user) {
    throw new Error(`can not get user: ${username}`)
  }

  return {
    username,
    user,
    editor: editorCreate(),
  }
}
