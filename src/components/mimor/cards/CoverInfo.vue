<script setup lang="ts">
import { Program } from '../Program'
import { State } from '../State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex flex-col">
    <div
      class="scrollbar-hide mx-3 flex overflow-x-auto overflow-y-hidden whitespace-pre pb-1 font-mono text-sm text-white"
    >
      {{ state.src }}
    </div>

    <div class="mx-3 flex flex-wrap text-lg font-bold text-white">
      <div
        v-for="(keyword, index) of program.metadata.keywords"
        :key="index"
        class="mr-3"
      >
        {{ keyword }}
      </div>
    </div>
  </div>
</template>
