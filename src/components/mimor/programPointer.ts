import { Program } from './Program'

export function programPointer(program: Program): number | undefined {
  return program.remainingIndexes[0]
}
