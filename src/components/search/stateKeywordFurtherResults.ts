import { SearchResult, State } from './State'
import { stateFilterResultsByKeywords } from './stateFilterResultsByKeywords'

export function stateKeywordFurtherResults(
  state: State,
  keyword: string,
): Record<string, SearchResult> {
  return stateFilterResultsByKeywords(state, state.results, {
    ...state.keywords,
    [keyword]: true,
  })
}
