<script setup lang="ts">
import MimorHeadProgram from './MimorHeadProgram.vue'
import { Program } from './Program'
import { State } from './State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
    <MimorHeadProgram :state :program />
  </div>
</template>
