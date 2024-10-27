<script setup lang="ts">
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div>
    <div>Unknown content</div>
    <div>{{ entry.mimor['@path'] }}</div>
  </div>
</template>
