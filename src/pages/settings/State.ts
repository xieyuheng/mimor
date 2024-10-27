import { User } from '../../models/user/User'

export type State = {
  user?: User
  avatarURL?: URL
  avatarFile?: File
}
