import { State } from './State'

export async function stateEditorOpen(
  state: State,
  options: {
    fromKind: string
  },
): Promise<void> {
  state.kind = 'Editor'
  state.fromKind = options.fromKind
}
