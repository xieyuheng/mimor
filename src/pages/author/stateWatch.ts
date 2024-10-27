import { watch } from 'vue'
import { State } from './State'
import { entryUpdateSearchTargets } from './entryUpdateSearchTargets'

export function stateWatch(state: State): void {
  for (const entry of state.entries) {
    watch(
      () => entry,
      () => entryUpdateSearchTargets(entry, state),
      { immediate: true, deep: true },
    )
  }
}
