<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const route = useRoute()

const state = ref<State | undefined>(undefined)

const options = reactive({
  src: String(route.params.src),
})

watch(
  () => route.params.src,
  async () => {
    state.value = await stateLoad(options)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <MimorLoaded v-if="state" :state />
  <MimorLoading v-else :options="options" />
</template>
