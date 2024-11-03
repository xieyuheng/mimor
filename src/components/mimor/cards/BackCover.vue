<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { onMounted } from 'vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorInputReplay from '../MimorInputReplay.vue'
import MimorStatistics from '../MimorStatistics.vue'
import Node from '../nodes/Node.vue'
import { Program } from '../Program'
import { State } from '../State'
import CoverInfo from './CoverInfo.vue'

const props = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

onMounted(() => {
  props.program.statistics.endedAt = Date.now()
  props.state.isFinished = true
})
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between"
    :class="[state.theme.bg(400)]"
  >
    <MimorHeadProgram :state :program />

    <CoverInfo :state :program />

    <div
      class="flex h-full flex-col overflow-y-auto p-3"
      :class="[
        state.theme.name === 'white'
          ? 'text-black dark:text-white'
          : 'text-white dark:text-white',
      ]"
    >
      <MimorStatistics :state :program />

      <div class="flex flex-col justify-center text-2xl font-bold">
        <div v-for="(child, index) of element.children" :key="index">
          <Node :state :program :node="child" />
        </div>
      </div>
    </div>

    <div class="flex w-full justify-between space-x-1 pb-1.5">
      <MimorInputReplay
        class="hover:ring-1"
        :class="[state.theme.ring(300)]"
        :state
        :program
      />
    </div>
  </div>
</template>
