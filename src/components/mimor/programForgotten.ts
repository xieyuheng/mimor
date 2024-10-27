import { Program } from './Program'

export function programForgotten(program: Program): void {
  const pointer = program.remainingIndexes.shift()
  if (pointer === undefined) {
    return
  }

  program.remainingIndexes.push(pointer)
}
