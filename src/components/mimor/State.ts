import { Program } from './Program'
import { Theme } from './Theme'

export type State = {
  kind: string
  fromKind?: string
  src: string
  text: string
  originalText: string
  isTextGiven?: boolean
  theme: Theme
  withMetaThemeColor?: boolean
  themeColor?: string
  program?: Program
  error?: Error
  isFullscreen: boolean
  isEditable?: boolean
  isFinished?: boolean
  isWebComponent?: boolean
  reducedMotion?: boolean
}
