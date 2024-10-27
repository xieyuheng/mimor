import { editorCreate } from './Editor'
import { State } from './State'

export async function stateLoad(): Promise<State> {
  return {
    editor: editorCreate(),
  }
}
