<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Program } from './Program'
import { State } from './State'
import { programPointer } from './programPointer'
import { programRemembered } from './programRemembered'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="w-full text-xl font-bold">
    <button
      class="flex w-full flex-col items-start p-3"
      :class="[state.theme.bg(400)]"
      @click="
        () => {
          if (!program.statistics.startedAt) {
            program.statistics.startedAt = Date.now()
          }

          const pointer = programPointer(program)
          if (pointer !== undefined) {
            program.statistics.trace.push({
              kind: 'Start',
              index: pointer,
              time: Date.now(),
            })
          }

          programRemembered(program)
        }
      "
    >
      <PlayIcon
        class="h-6 w-6"
        :class="[
          state.theme.name === 'yellow' ? 'text-purple-400' : 'text-yellow-400',
        ]"
      />
      <Lang :class="[state.theme.name !== 'white' && 'text-white']">
        <template #zh>开始</template>
        <template #en>Start</template>
      </Lang>
    </button>
  </div>
</template>
