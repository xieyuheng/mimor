<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'
import { stateReload } from './stateReload'

const props = defineProps<{
  src: string
  text?: string
  reducedMotion?: boolean
}>()

const state = ref<State | undefined>(undefined)

watchEffect(async () => {
  if (!state.value) {
    state.value = reactive(await stateLoad({ ...props }))
  } else {
    await stateReload(state.value, { ...props })
  }
})
</script>

<template>
  <div>
    <MimorLoaded v-if="state" :state />
    <MimorLoading v-else :options="{ src }" />
  </div>
</template>

<style>
@import url('../../styles/index.css');
</style>
