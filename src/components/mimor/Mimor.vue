<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import MimorMeta from './MimorMeta.vue'
import { State } from './State'
import { StatisticsReport } from './StatisticsReport'
import { stateLoad } from './stateLoad'
import { stateReload } from './stateReload'

const props = defineProps<{
  src: string
  text?: string
  withMetaThemeColor?: boolean
  isEditable?: boolean
  reducedMotion?: boolean
}>()

defineEmits<{
  loaded: [value: State]
  update: [value: State]
  finish: [value: { statistics: StatisticsReport }]
}>()

const state = ref<State | undefined>(undefined)

watchEffect(async () => {
  if (!state.value) {
    state.value = reactive(await stateLoad(props))
  } else {
    await stateReload(state.value, props)
  }
})
</script>

<template>
  <div>
    <MimorMeta v-if="state" :state />
    <MimorLoaded
      v-if="state"
      :state
      @update="$emit('update', state)"
      @loaded="$emit('loaded', state)"
      @finish="(value) => $emit('finish', value)"
    />
    <MimorLoading v-else :options="{ src, isEditable }" />
  </div>
</template>
