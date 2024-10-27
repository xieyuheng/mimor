import { mimorCreate } from '../../models/mimor'
import { editorCreate } from './Editor'
import { State } from './State'

export async function stateEditorSave(
  state: State,
  report: {
    errorMessage: string
  },
): Promise<void> {
  report.errorMessage = ''

  try {
    await mimorCreate(state.editor.content)
    state.editor = editorCreate()
  } catch (error) {
    report.errorMessage = error instanceof Error ? error.message : String(error)
  }
}
