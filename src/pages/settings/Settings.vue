<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SettingsLoaded from './SettingsLoaded.vue'
import SettingsLoading from './SettingsLoading.vue'
import { State } from './State'
import { stateLoadReactive } from './stateLoadReactive'

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await stateLoadReactive({})
})
</script>

<template>
  <SettingsLoaded v-if="state" :state />
  <SettingsLoading v-else />
</template>
