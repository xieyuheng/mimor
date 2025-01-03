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
  program?: Program
  error?: Error
  isFullscreen: boolean
  isFinished?: boolean
  reducedMotion?: boolean
}
