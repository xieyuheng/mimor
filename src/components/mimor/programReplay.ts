import { rangeArray } from '../../utils/rangeArray'
import { Program } from './Program'
import { statisticsCreate } from './statisticsCreate'

export function programReplay(program: Program): void {
  program.rememberedIndexes = []
  program.remainingIndexes = rangeArray(0, program.elements.length)

  program.statistics = statisticsCreate()
}
