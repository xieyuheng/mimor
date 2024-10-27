import { State } from './State'
import { StateOptions, stateLoad } from './stateLoad'

export async function stateReload(
  state: State,
  options: StateOptions,
): Promise<void> {
  // TODO Maybe We need `stateReactive`
  // to make nested objects reactive,
  // I am not sure.

  const newState = await stateLoad(options)
  const oldProgram = state.program
  Object.assign(state, newState)

  if (state.program && oldProgram) {
    const newIndexes = state.program.remainingIndexes
    state.program.remainingIndexes = oldProgram.remainingIndexes.filter(
      (index) => index < newIndexes.length,
    )
    state.program.rememberedIndexes = oldProgram.rememberedIndexes.filter(
      (index) => index < newIndexes.length,
    )

    for (const newIndex of newIndexes) {
      if (
        !state.program.remainingIndexes.includes(newIndex) &&
        !state.program.rememberedIndexes.includes(newIndex)
      ) {
        state.program.remainingIndexes.push(newIndex)
      }
    }
  }
}
