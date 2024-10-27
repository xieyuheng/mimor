<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    :disabled="!state.isEditable"
    name="text"
    spellcheck="false"
    class="h-full w-full resize-none bg-white px-3 py-2 font-mono text-base focus:outline-none disabled:bg-white dark:bg-stone-900 dark:disabled:bg-stone-900"
    v-model="state.text"
  />
</template>
