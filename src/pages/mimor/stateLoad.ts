import { State } from './State'

export type StateOptions = {
  src: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { src } = options

  return {
    src,
  }
}
