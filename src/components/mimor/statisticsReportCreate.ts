import { Statistics } from './Statistics'
import { StatisticsReport } from './StatisticsReport'
import { traceForgettingRate } from './traceForgettingRate'

export function statisticsReportCreate(
  statistics: Statistics,
): StatisticsReport {
  const duration =
    statistics.startedAt && statistics.endedAt
      ? statistics.endedAt - statistics.startedAt
      : undefined

  const forgettingRate = traceForgettingRate(statistics.trace)

  return {
    ...statistics,
    duration,
    forgettingRate,
  }
}
