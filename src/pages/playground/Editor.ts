export type Editor = {
  content: string
  isFocused: boolean
}

export function editorCreate(): Editor {
  return {
    content: '',
    isFocused: false,
  }
}
