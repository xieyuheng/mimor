import { State } from './State'
import { stateReactivelyUpdateThemeColor } from './stateReactivelyUpdateThemeColor'

export function stateWatch(state: State): void {
  stateReactivelyUpdateThemeColor(state)
}
