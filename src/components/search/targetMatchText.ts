import {
  MatchedLine,
  MatchedLinePart,
  SearchResult,
  SearchTarget,
} from './State'

export function targetMatchText(
  target: SearchTarget,
  input: string,
): SearchResult | undefined {
  const matchedLines: Array<MatchedLine> = []

  const lines = target.text.split('\n')
  for (const [index, line] of lines.entries()) {
    const matched = line.includes(input)
    if (matched) {
      const parts: Array<MatchedLinePart> = []
      const notMatchedTexts = line.split(input)
      for (const [index, text] of notMatchedTexts.entries()) {
        parts.push({ kind: 'NotMatched', text })

        if (index !== notMatchedTexts.length - 1) {
          parts.push({ kind: 'Matched', text: input })
        }
      }

      matchedLines.push({ index, line, parts })
    }
  }

  if (matchedLines.length > 0) {
    return {
      matchedLines,
    }
  }
}
