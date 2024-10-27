import { useClientContext } from '../../clients/mimor'
import { User, UserSchema } from './User'

export async function userPatch(username: string, user: User): Promise<User> {
  const ctx = useClientContext()
  const data = await fetch(`${ctx.api}/users/${username}`, {
    method: 'PATCH',
    body: JSON.stringify(UserSchema.parse(user)),
  })
  return UserSchema.parse(data)
}
