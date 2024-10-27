<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { Program } from './Program'
import { State } from './State'
import { routerFind } from './routerFind'

const props = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

const route = routerFind(props.program.router, props.element)
</script>

<template>
  <div v-if="route === undefined">
    <div class="text-xl font-bold text-red-500">Unknown statement:</div>
    <pre class="overflow-auto text-base text-red-500">{{ element }}</pre>
  </div>

  <component
    v-else-if="route.kind === 'Card'"
    :is="route.component"
    :state
    :program
    :element
  />
</template>
