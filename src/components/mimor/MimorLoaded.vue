<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { ref, watch } from 'vue'
import Init from '../utils/Init.vue'
import Scope from '../utils/Scope.vue'
import MimorKindEditor from './MimorKindEditor.vue'
import MimorKindError from './MimorKindError.vue'
import MimorKindProgram from './MimorKindProgram.vue'
import MimorKindProgramEmpty from './MimorKindProgramEmpty.vue'
import { State } from './State'
import { StatisticsReport } from './StatisticsReport'
import { programCurrentElement } from './programCurrentElement'
import { programPointer } from './programPointer'
import { stateWatch } from './stateWatch'
import { statisticsReportCreate } from './statisticsReportCreate'

const props = defineProps<{ state: State }>()

const emit = defineEmits<{
  loaded: []
  update: [value: State]
  finish: [value: { statistics: StatisticsReport }]
}>()

const rootElement = ref<HTMLElement | undefined>(undefined)

stateWatch(props.state)

const who = 'MimorLoaded'

async function fullscreenEnter() {
  try {
    await rootElement.value?.requestFullscreen()
  } catch (error) {
    console.error({ who, error })
  }
}

async function fullscreenExit() {
  try {
    await document.exitFullscreen()
  } catch (error) {
    console.error({ who, error })
  }
}

watch(
  () => props.state.isFullscreen,
  (value) => {
    if (value) {
      fullscreenEnter()
    } else {
      fullscreenExit()
    }
  },
)

watch(
  () => props.state.isFinished,
  (value) => {
    if (props.state.program && value) {
      emit('finish', {
        statistics: statisticsReportCreate(props.state.program.statistics),
      })
    }
  },
)

useEventListener(document, 'fullscreenchange', () => {
  if (document.fullscreenElement) {
    props.state.isFullscreen = true
  } else {
    props.state.isFullscreen = false
  }
})
</script>

<template>
  <div
    ref="rootElement"
    class="flex h-full flex-col"
    :class="{
      'border border-black bg-white dark:border-white dark:bg-stone-900 dark:text-white':
        props.state.theme.name === 'white',
    }"
  >
    <Init
      :action="
        () => {
          if (!props.state.isTextGiven) {
            $emit('loaded')
          }
        }
      "
    />

    <template v-if="state.kind === 'Editor'">
      <MimorKindEditor
        class="h-full"
        :class="[state.theme.bg(300)]"
        :state
        @update="$emit('update', state)"
      />
    </template>

    <template v-else-if="state.kind === 'Error' && state.error">
      <MimorKindError :state :error="state.error" />
    </template>

    <template v-else-if="state.kind === 'Program' && state.program">
      <Scope
        :scope="{
          element:
            programCurrentElement(state.program) ||
            state.program.backCoverElement,
        }"
        v-slot="{ scope }"
      >
        <MimorKindProgramEmpty
          v-if="state.program.elements.length === 0"
          class="h-full"
          :class="[state.theme.bg(300)]"
          :state
          :program="state.program"
        />

        <MimorKindProgram
          v-else
          class="h-full"
          :key="programPointer(state.program)"
          :state
          :program="state.program"
          :element="scope.element"
          @finish="(value) => $emit('finish', value)"
        />
      </Scope>
    </template>
  </div>
</template>
