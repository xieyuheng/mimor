import { Trace } from './Trace'

export function traceForgettingRate(trace: Trace): number {
  const forgotten = trace.filter((entry) => entry.kind === 'Forgotten').length
  const remembered = trace.filter((entry) => entry.kind === 'Remembered').length
  const forgettingRate = forgotten / remembered
  return forgettingRate
}
