<script setup lang="ts">
import { Base64 } from 'js-base64'
import Mimor from '../../components/mimor/Mimor.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <Mimor
    :isRecall="true"
    :reducedMotion="true"
    :src="`data:text/plain;base64,${Base64.encode(state.editor.content)}`"
    :text="state.editor.content"
  />
</template>
