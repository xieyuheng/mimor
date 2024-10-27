<script setup lang="ts">
import { XElement, isElement } from '@xieyuheng/x-node'
import { Program } from '../Program'
import { State } from '../State'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()

function trimCodeBlock(code: string): string {
  const lines = code.split('\n')
  const count = blockIndentationSize(lines)
  return lines.map((line) => (line ? line.slice(count) : line)).join('\n')
}

function blockIndentationSize(lines: Array<string>): number {
  lines = lines.filter((line) => line.trim())
  if (lines.length === 0) return 0
  return Math.min(...lines.map(lineIndentationSize))
}

function lineIndentationSize(line: string): number {
  return line.length - line.trimStart().length
}
</script>

<template>
  <div>
    <div v-for="(child, index) of element.children" :key="index">
      <div v-if="!isElement(child)">
        <pre
          class="whitespace-pre px-4 py-2 text-2xl"
        ><code class="whitespace-pre">{{ trimCodeBlock(child) }}</code></pre>
      </div>
    </div>
  </div>
</template>
