import { State } from './State'
import { stateFilterResultsByKeywords } from './stateFilterResultsByKeywords'
import { targetMatchText } from './targetMatchText'

export function stateSearch(state: State): void {
  if (state.text) {
    stateFilterByText(state)
  } else {
    stateShowAllTarget(state)
  }

  state.results = stateFilterResultsByKeywords(
    state,
    state.results,
    state.keywords,
  )
}

function stateFilterByText(state: State): void {
  for (const [key, target] of Object.entries(state.targets)) {
    const result = targetMatchText(target, state.text)
    if (result) {
      state.results[key] = result
    } else {
      delete state.results[key]
    }
  }
}

function stateShowAllTarget(state: State): void {
  for (const key of Object.keys(state.targets)) {
    state.results[key] = {}
  }
}
