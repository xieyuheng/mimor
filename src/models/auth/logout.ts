import { useClientContext } from '../../clients/mimor'
import { useGlobalAuth } from '../../models/auth'

export async function logout(): Promise<void> {
  const ctx = useClientContext()
  ctx.token = ''

  const auth = useGlobalAuth()

  console.log({ who: 'logout', properties: { username: auth.username } })

  auth.username = undefined
  auth.user = undefined
}
