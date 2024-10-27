import { userPatch } from '../../models/user'
import { State } from './State'

export async function stateSave(
  state: State,
  report: { errorMessage: string },
): Promise<void> {
  const { user } = state

  if (!user) return

  if (user && state.avatarFile) {
    try {
      const bytes = new Uint8Array(await state.avatarFile.arrayBuffer())
      // await userAvatarPut(user, bytes)
    } catch (error) {
      report.errorMessage =
        error instanceof Error ? error.message : String(error)
    }
  }

  if (user) {
    try {
      state.user = await userPatch(user.username, user)
    } catch (error) {
      report.errorMessage =
        error instanceof Error ? error.message : String(error)
    }
  }
}
