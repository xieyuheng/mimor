<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorInputStart from '../MimorInputStart.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import CoverInfo from './CoverInfo.vue'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between"
    :class="[state.theme.bg(400)]"
  >
    <MimorHeadProgram :state :program />

    <CoverInfo :state :program />

    <div
      class="h-full overflow-y-auto p-3 font-bold"
      :class="[
        state.theme.name === 'white'
          ? 'text-black dark:text-white'
          : 'text-white dark:text-white',
      ]"
    >
      <div class="flex h-full flex-col justify-center text-2xl">
        <div v-for="(child, index) of element.children" :key="index">
          <Node :state :program :node="child" />
        </div>
      </div>
    </div>

    <div class="flex w-full pb-1.5">
      <MimorInputStart
        class="hover:ring-1"
        :class="[state.theme.ring(300)]"
        :state
        :program
      />
    </div>
  </div>
</template>
