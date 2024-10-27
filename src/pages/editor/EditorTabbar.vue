<script setup lang="ts">
import EditorTabbarTab from './EditorTabbarTab.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full items-center">
    <EditorTabbarTab
      class="shrink grow basis-0"
      :key="index"
      v-for="(tab, index) of state.tabs"
      :state
      :tab
    />
  </div>
</template>
