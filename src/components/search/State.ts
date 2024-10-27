export type SearchTarget = {
  keywords: Array<string>
  text: string
}

export type MatchedLinePart =
  | { kind: 'Matched'; text: string }
  | { kind: 'NotMatched'; text: string }

export type MatchedLine = {
  index: number
  line: string
  parts: Array<MatchedLinePart>
}

export type SearchResult = {
  matchedLines?: Array<MatchedLine>
}

export type State = {
  text: string
  keywords: Record<string, boolean>
  isFocused?: boolean
  targets: Record<string, SearchTarget>
  results: Record<string, SearchResult>
}
