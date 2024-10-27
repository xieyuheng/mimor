<script setup lang="ts">
import { isElement, XNode } from '@xieyuheng/x-node'
import { Program } from '../Program'
import { routerFind } from '../routerFind'
import { State } from '../State'
import Text from './Text.vue'

const props = defineProps<{
  state: State
  program: Program
  node: XNode
}>()

const route = isElement(props.node)
  ? routerFind(props.program.router, props.node)
  : undefined
</script>

<template>
  <Text v-if="typeof node === 'string'" :state :program :text="node" />

  <div v-else-if="route === undefined">
    <div class="text-xl font-bold text-red-500">Unknown node:</div>
    <pre class="overflow-auto text-base text-red-500">{{ node }}</pre>
  </div>

  <component
    v-else-if="route.kind === 'Element'"
    :is="route.component"
    :state
    :program
    :element="node"
  />
</template>
