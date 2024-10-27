import { Entry } from './Entry'
import { State } from './State'
import { entryCompare } from './entryCompare'

export function stateEntriesFiltered(state: State): Array<Entry> {
  return state.entries
    .filter((entry) => state.searchState.results[entry.mimor['@path']])
    .sort(entryCompare)
}
