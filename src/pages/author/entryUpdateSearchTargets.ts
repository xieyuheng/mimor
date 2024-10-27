import { mimorKeywords } from '../../models/mimor'
import { Entry } from './Entry'
import { State } from './State'

export function entryUpdateSearchTargets(entry: Entry, state: State): void {
  state.searchState.targets[entry.mimor['@path']] = {
    keywords: mimorKeywords(entry.mimor),
    text: entry.newText || entry.mimor.content || '',
  }
}
