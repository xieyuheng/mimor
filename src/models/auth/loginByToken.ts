import { useClientContext } from '../../clients/mimor'
import { useGlobalAuth } from '../../models/auth'
import { UserSchema } from '../user'

export async function loginByToken(
  options: {
    username: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const ctx = useClientContext()

  const { username } = options

  report.errorMessage = ''

  try {
    const auth = useGlobalAuth()
    const data = await fetch(`${ctx.api}/users/${username}`).then((response) =>
      response.json(),
    )
    auth.user = UserSchema.parse(data)
    console.log({ who: 'loginByToken', properties: { username } })
  } catch (error) {
    report.errorMessage = error instanceof Error ? error.message : String(error)
    console.log({
      who: 'loginByToken',
      kind: 'Error',
      message: report.errorMessage,
      properties: { username },
    })
  }
}
