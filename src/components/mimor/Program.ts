import { XElement } from '@xieyuheng/x-node'
import { Metadata } from './Metadata'
import { Router } from './Router'
import { Statistics } from './Statistics'

export type Program = {
  metadata: Metadata
  elements: Array<XElement>
  backCoverElement: XElement
  router: Router
  remainingIndexes: Array<number>
  rememberedIndexes: Array<number>
  statistics: Statistics
}
