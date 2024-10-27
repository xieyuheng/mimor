<script setup lang="ts">
import { Base64 } from 'js-base64'
import Mimor from '../../components/mimor/Mimor.vue'
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <Mimor
    class="h-full"
    :isRecall="true"
    :reducedMotion="true"
    :src="`data:text/plain;base64,${Base64.encode(tab.text)}`"
    :text="tab.text"
  />
</template>
