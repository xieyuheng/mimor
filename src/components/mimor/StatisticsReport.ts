import { z, type ZodType } from 'zod'
import { Trace, TraceSchema } from './Trace'

// `StatisticsReport` must be accumulative to keep backward compatibility.

export type StatisticsReport = {
  startedAt?: number
  endedAt?: number
  duration?: number
  trace: Trace
  forgettingRate: number
}

export const StatisticsReportSchema: ZodType<StatisticsReport> = z.object({
  startedAt: z.optional(z.number()),
  endedAt: z.optional(z.number()),
  duration: z.optional(z.number()),
  trace: TraceSchema,
  forgettingRate: z.number(),
})
