import { z, type ZodType } from 'zod'

export type TraceEntryKind = 'Start' | 'Forgotten' | 'Remembered'

export const TraceEntryKindSchema: ZodType<TraceEntryKind> = z.union([
  z.literal('Start'),
  z.literal('Forgotten'),
  z.literal('Remembered'),
])

export type TraceEntry = {
  kind: TraceEntryKind
  index: number
  time: number
}

export const TraceEntrySchema: ZodType<TraceEntry> = z.object({
  kind: TraceEntryKindSchema,
  index: z.number(),
  time: z.number(),
})

export type Trace = Array<TraceEntry>

export const TraceSchema: ZodType<Trace> = z.array(TraceEntrySchema)
