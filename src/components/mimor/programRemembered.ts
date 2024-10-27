import { Program } from './Program'

export function programRemembered(program: Program): void {
  const pointer = program.remainingIndexes.shift()
  if (pointer === undefined) {
    return
  }

  program.rememberedIndexes.push(pointer)
}
