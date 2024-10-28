import { parse } from '@xieyuheng/x-node'
import { State } from './State'
import { Theme } from './Theme'
import { programCreate } from './programCreate'

export function stateCreate(options: {
  src: string
  withMetaThemeColor?: boolean
  text: string
  isTextGiven?: boolean
  reducedMotion?: boolean
}): State {
  const { src, withMetaThemeColor, text, isTextGiven, reducedMotion } = options

  const theme = new Theme('white')
  const metadata = { keywords: [] }

  const properties = {
    src,
    text,
    isTextGiven,
    originalText: text,
    theme,
    metadata,
    withMetaThemeColor,
    isFullscreen: false,
    reducedMotion,
  }

  try {
    const nodes = parse(text)
    const program = programCreate({ nodes })

    if (program.metadata.themeColor) {
      theme.name = program.metadata.themeColor
    }

    return { kind: 'Program', ...properties, program }
  } catch (error) {
    if (error instanceof Error) {
      return { kind: 'Error', ...properties, error }
    } else {
      throw error
    }
  }
}
