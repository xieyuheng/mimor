import { useClientContext } from '../../clients/mimor'
import { useGlobalAuth } from '../../models/auth'
import { loginByToken } from './loginByToken'
import { logout } from './logout'

export async function loginByTokenIfNotAlready(): Promise<void> {
  const who = 'loginByTokenIfNotAlready'
  const report = { errorMessage: '' }

  const ctx = useClientContext()

  if (!ctx.token) {
    console.log({ who, message: 'No token in context.' })
    return
  }

  const auth = useGlobalAuth()

  if (auth.user !== undefined) {
    return
  }

  if (auth.username) {
    try {
      await loginByToken({ username: auth.username }, report)
    } catch (error) {
      console.log({ who, message: 'fail to login by token', error })
      await logout()
    }
  }
}
