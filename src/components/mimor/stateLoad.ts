import { State } from './State'
import { stateCreate } from './stateCreate'

export interface StateOptions {
  src: string
  text?: string
  withMetaThemeColor?: boolean
  isWebComponent?: boolean
}

export async function stateLoad(options: StateOptions): Promise<State> {
  if (options.text !== undefined) {
    return stateCreate({ ...options, text: options.text, isTextGiven: true })
  }

  const text = await fetch(options.src).then((response) => response.text())
  return stateCreate({ ...options, text })
}
