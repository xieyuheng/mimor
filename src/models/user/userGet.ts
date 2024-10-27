import { useClientContext } from '../../clients/mimor'
import { User, UserSchema } from './User'

export async function userGet(username: string): Promise<User | undefined> {
  const ctx = useClientContext()
  const response = await fetch(`${ctx.api}/users/${username}`)
  if (!response.ok) return undefined

  const data = await fetch(`${ctx.api}/users/${username}`).then((response) =>
    response.json(),
  )

  return UserSchema.parse({ ...data, username })
}
