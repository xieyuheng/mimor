import { basename } from 'path-browserify'
import { mimorPatch } from '../../models/mimor'
import { Entry } from './Entry'
import { State } from './State'

export async function stateEntrySaveNewText(
  state: State,
  entry: Entry,
): Promise<void> {
  const who = 'stateEntrySaveNewText'

  if (entry.newText === undefined) return

  // Should only save modified.

  if (
    entry.newText === entry.mimor.content &&
    !entry.isNotInTheCloud &&
    !entry.isModifiedByUploading
  ) {
    return
  }

  entry.isSaving = true

  console.log({ who, entry })

  await mimorPatch(basename(entry.mimor['@path']), entry.newText)

  entry.mimor.content = entry.newText
  entry.isSaving = false
  entry.isModifiedByUploading = false
  entry.isNotInTheCloud = false
}
