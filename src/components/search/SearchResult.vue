<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { SearchResult, State } from './State'
import { leftPadLineNumber } from './leftPadLineNumber'

defineProps<{
  state: State
  result: SearchResult
}>()
</script>

<template>
  <div v-if="result.matchedLines" class="flex flex-col">
    <div>
      <Lang class="text-lg text-orange-500 dark:text-orange-300">
        <template #zh>匹配的行：</template>
        <template #en>Matched lines:</template>
      </Lang>
    </div>

    <div
      v-for="(matchedLine, index) of result.matchedLines"
      :key="index"
      class="flex space-x-2 py-0.5 font-mono text-sm"
    >
      <span class="whitespace-pre text-orange-500 dark:text-orange-300">{{
        leftPadLineNumber(
          Math.max(
            ...result.matchedLines.map((matchedLine) => matchedLine.index + 1),
          ),
          matchedLine.index + 1,
        )
      }}</span>

      <span class="overflow-x-auto hyphens-auto whitespace-pre-line"
        ><span
          v-for="(part, index) of matchedLine.parts"
          :key="index"
          :class="{
            'text-orange-500 underline dark:text-orange-300':
              part.kind === 'Matched',
          }"
          >{{ part.text }}</span
        ></span
      >
    </div>
  </div>
</template>
