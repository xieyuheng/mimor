import { XElement } from '@xieyuheng/x-node'
import { Program } from './Program'
import { programPointer } from './programPointer'

export function programCurrentElement(program: Program): XElement | undefined {
  const pointer = programPointer(program)
  if (pointer === undefined) {
    return undefined
  }

  return program.elements[pointer]
}
