import { Entry } from './Entry'
import { State } from './State'
import { entryCompare } from './entryCompare'

export function stateEntriesSorted(state: State): Array<Entry> {
  return [...state.entries.sort(entryCompare)]
}
