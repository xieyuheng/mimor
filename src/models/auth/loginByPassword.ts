import { useClientContext } from '../../clients/mimor'
import { loginByToken } from './loginByToken'

export async function loginByPassword(
  options: {
    username: string
    password: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const ctx = useClientContext()
  const { username, password } = options
  report.errorMessage = ''

  try {
    const data = await fetch(`${ctx.api}/password-login/${username}`, {
      method: 'POST',
      body: JSON.stringify({
        password,
      }),
    }).then((response) => response.json())
    console.log({ who: 'loginByPassword', properties: { username } })
    ctx.token = data.token
    await loginByToken(options, report)
  } catch (error) {
    report.errorMessage = error instanceof Error ? error.message : String(error)
    console.log({
      who: 'loginByPassword',
      kind: 'Error',
      message: report.errorMessage,
      properties: { username },
    })
  }
}
