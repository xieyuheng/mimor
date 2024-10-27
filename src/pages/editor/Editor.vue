<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import EditorLoaded from './EditorLoaded.vue'
import EditorLoading from './EditorLoading.vue'
import { State } from './State'
import { stateLoadReactive } from './stateLoadReactive'

const state = ref<State | undefined>()

onMounted(async () => {
  state.value = reactive(await stateLoadReactive())
})
</script>

<template>
  <EditorLoaded v-if="state" :state />
  <EditorLoading v-else />
</template>
