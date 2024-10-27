import { basename } from 'path-browserify'
import { mimorDelete } from '../../models/mimor'
import { removeFirst } from '../../utils/removeFirst'
import { Entry } from './Entry'
import { State } from './State'

export async function stateEntryDelete(
  state: State,
  entry: Entry,
): Promise<void> {
  await mimorDelete(basename(entry.mimor['@path']))

  removeFirst(
    state.entries,
    ({ mimor }) => mimor['@path'] === entry.mimor['@path'],
  )
}
