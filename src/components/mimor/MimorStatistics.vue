<script setup lang="ts">
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

    <Lang class="flex items-baseline whitespace-pre">
      <template #zh>
        <span class="whitespace-pre font-bold">足迹：</span>
        <div class="flex flex-wrap text-base">
          <div
            v-for="(entry, index) of statistics.trace"
            :key="index"
            class="pr-1"
          >
            <div v-if="entry.kind === 'Start'">始</div>
            <div v-if="entry.kind === 'Forgotten'">忘</div>
            <div v-if="entry.kind === 'Remembered'">记</div>
          </div>
        </div>
      </template>
      <template #en>
        <span class="whitespace-pre pr-1.5 font-bold">Trace: </span>
        <div class="flex flex-wrap text-base">
          <div
            v-for="(entry, index) of statistics.trace"
            :key="index"
            class="pr-1"
          >
            <div v-if="entry.kind === 'Start'">S</div>
            <div v-if="entry.kind === 'Forgotten'">F</div>
            <div v-if="entry.kind === 'Remembered'">R</div>
          </div>
        </div>
      </template>
    </Lang>
  </div>
</template>
