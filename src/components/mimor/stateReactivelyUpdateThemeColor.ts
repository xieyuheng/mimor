import { watch } from 'vue'
import { State } from './State'

export function stateReactivelyUpdateThemeColor(state: State): void {
  watch(
    () => state.program?.metadata.themeColor,
    (value) => {
      if (value) {
        state.theme.name = value
      }
    },
    { immediate: true },
  )
}
