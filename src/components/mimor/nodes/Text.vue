<script setup lang="ts">
import { computed } from 'vue'
import { Program } from '../Program'
import { State } from '../State'

const props = defineProps<{
  state: State
  program: Program
  text: string
}>()

const lines = computed(() => props.text.split('\n'))

function isNewline(line: string): boolean {
  return line.trim() === ''
}
</script>

<template>
  <span>
    <span v-for="(line, index) of lines" :key="index">
      <div v-if="isNewline(line)" class="py-1.5"></div>
      <span v-else>{{ line }}</span>
    </span>
  </span>
</template>
