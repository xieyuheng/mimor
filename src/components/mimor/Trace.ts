export type TraceEntryKind = 'Start' | 'Forgotten' | 'Remembered'

export type TraceEntry = {
  kind: TraceEntryKind
  index: number
  time: number
}

export type Trace = Array<TraceEntry>
