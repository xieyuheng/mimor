export class State {
  content: string
  isFocused = false

  constructor(options: { content: string }) {
    this.content = options.content
  }
}
