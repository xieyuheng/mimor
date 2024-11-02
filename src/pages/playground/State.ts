export type State = {
  content: string
  isFocused: boolean
}

export function editorCreate(): State {
  return {
    content: '',
    isFocused: false,
  }
}
