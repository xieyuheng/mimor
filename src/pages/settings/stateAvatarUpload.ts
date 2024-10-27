import { State } from './State'

export function stateAvatarUpload(
  state: State,
  inputElement: HTMLInputElement,
): void {
  const who = 'stateAvatarUpload'

  const files = inputElement.files
  if (files) {
    const file = files[0]
    if (file) {
      state.avatarFile = file

      console.log(
        `[${who}] avatar file uploaded: ${file.name}, size: ${file.size}`,
      )
    }
  }
}
