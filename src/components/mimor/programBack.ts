import { Program } from './Program'

export function programBack(program: Program): void {
  const pointer = program.rememberedIndexes.pop()
  if (pointer === undefined) {
    return
  }

  program.remainingIndexes.unshift(pointer)
}
