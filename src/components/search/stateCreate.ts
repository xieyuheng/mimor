import { SearchTarget, State } from './State'

export function stateCreate(options: {
  targets: Record<string, SearchTarget>
}): State {
  const { targets } = options

  return {
    keywords: {},
    text: '',
    targets,
    results: {},
  }
}
