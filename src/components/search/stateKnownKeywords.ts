import { State } from './State'

export function stateKnownKeywords(state: State): Array<string> {
  const knownKeywords = Object.values(state.targets).flatMap(
    (target) => target.keywords,
  )

  return Array.from(new Set(knownKeywords)).sort()
}
