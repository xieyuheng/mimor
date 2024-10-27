import { useClientContext } from '../../clients/mimor'
import { useGlobalAuth } from '../../models/auth'

export async function register(
  options: {
    username: string
    name: string
    password: string
  },
  report: {
    errorMessage: string
  },
): Promise<void> {
  const ctx = useClientContext()

  report.errorMessage = ''

  try {
    const auth = useGlobalAuth()
    auth.user = await fetch(
      `${ctx.api}/password-register/${options.username}`,
      {
        method: 'POST',
        body: JSON.stringify({
          password: options.password,
          username: options.username,
          name: options.name,
        }),
      },
    ).then((response) => response.json())

    console.log(auth)
  } catch (error) {
    report.errorMessage = error instanceof Error ? error.message : String(error)
  }
}
