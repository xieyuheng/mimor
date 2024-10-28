import { Trace } from './Trace'

// `StatisticsReport` must be accumulative to keep backward compatibility.

export type StatisticsReport = {
  startedAt?: number
  endedAt?: number
  duration?: number
  trace: Trace
  forgettingRate: number
}
