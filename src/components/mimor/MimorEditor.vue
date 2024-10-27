<script setup lang="ts">
import MimorEditorTextarea from './MimorEditorTextarea.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <form
    tabindex="-1"
    class="flex h-full flex-col overflow-y-auto"
    :class="{
      [`border ${state.theme.border(300)}`]: state.theme.name !== 'white',
    }"
  >
    <MimorEditorTextarea :state />
  </form>
</template>
