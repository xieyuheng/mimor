<script setup lang="ts">
import MimorEditor from './MimorEditor.vue'
import MimorHeadError from './MimorHeadError.vue'
import MimorHeadProgram from './MimorHeadProgram.vue'
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <MimorHeadProgram v-if="state.program" :state :program="state.program" />
    <MimorHeadError v-if="state.error" :state />

    <MimorEditor :state />
  </div>
</template>
