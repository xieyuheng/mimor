<script setup lang="ts">
import { CheckIcon, PlayIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { formatDuration, formatTime } from '../../utils/formatDate'
import { numberOmitAfterFloatPoint } from '../../utils/numberOmitAfterFloatPoint'
import { Program } from './Program'
import { State } from './State'
import { statisticsReportCreate } from './statisticsReportCreate'

const props = defineProps<{
  state: State
  program: Program
}>()

const statistics = computed(() =>
  statisticsReportCreate(props.program.statistics),
)
</script>

<template>
  <div
    class="w-full py-3 text-lg"
    :class="[
      state.theme.name === 'white'
        ? 'text-black dark:text-white'
        : 'text-white dark:text-white',
    ]"
  >
    <Lang v-if="statistics.startedAt" class="whitespace-pre">
      <template #zh>
        <span class="font-bold">开始时间：</span>
        <span>{{ formatTime(statistics.startedAt) }}</span>
      </template>
      <template #en>
        <span class="font-bold">Started at: </span>
        <span>{{ formatTime(statistics.startedAt) }}</span>
      </template>
    </Lang>

    <Lang v-if="statistics.endedAt" class="whitespace-pre">
      <template #zh>
        <span class="font-bold">结束时间：</span>
        <span>{{ formatTime(statistics.endedAt) }}</span>
      </template>
      <template #en>
        <span class="font-bold">Ended at: </span>
        <span>{{ formatTime(statistics.endedAt) }}</span>
      </template>
    </Lang>

    <Lang v-if="statistics.duration" class="whitespace-pre">
      <template #zh>
        <span class="font-bold">用时：</span>
        <span>{{ formatDuration(statistics.duration) }}</span>
      </template>
      <template #en>
        <span class="font-bold">Duration: </span>
        <span>{{ formatDuration(statistics.duration) }}</span>
      </template>
    </Lang>

    <Lang class="whitespace-pre">
      <template #zh>
        <span class="font-bold">忘记率：</span>
        <span>{{
          numberOmitAfterFloatPoint(statistics.forgettingRate, 0.001)
        }}</span>
      </template>
      <template #en>
        <span class="font-bold">Forgetting rate: </span>
        <span>{{
          numberOmitAfterFloatPoint(statistics.forgettingRate, 0.001)
        }}</span>
      </template>
    </Lang>

    <div class="flex items-center">
      <Lang>
        <template #zh>
          <span class="whitespace-pre font-bold">足迹：</span>
        </template>
        <template #en>
          <span class="whitespace-pre pr-1.5 font-bold">Trace: </span>
        </template>
      </Lang>

      <span class="flex flex-wrap">
        <span v-for="(entry, index) of statistics.trace" :key="index">
          <span v-if="entry.kind === 'Start'"
            ><PlayIcon class="h-4 w-4"
          /></span>
          <span v-if="entry.kind === 'Forgotten'"
            ><XMarkIcon class="h-4 w-4"
          /></span>
          <span v-if="entry.kind === 'Remembered'"
            ><CheckIcon class="h-4 w-4"
          /></span>
        </span>
      </span>
    </div>
  </div>
</template>
