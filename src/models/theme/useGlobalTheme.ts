import { Theme } from './Theme'
import { globalTheme } from './globalTheme'
import { initialThemeName } from './initialThemeName'

let initialized = false

export function useGlobalTheme(name?: string): Theme {
  if (initialized) return globalTheme

  globalTheme.name = name || initialThemeName()
  initialized = true
  return globalTheme
}
