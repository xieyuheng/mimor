import { User } from '../../models/user/User'
import { Editor } from './Editor'

export type State = {
  username: string
  user: User
  editor: Editor
}
