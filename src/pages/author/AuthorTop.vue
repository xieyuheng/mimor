<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { onNotVisible } from '../../utils/browser/onNotVisible'
import { onVisible } from '../../utils/browser/onVisible'
import { State } from './State'

const props = defineProps<{ state: State }>()

const containerElement = ref<HTMLElement | undefined>(undefined)

async function maybeScrollIntoView(): Promise<void> {
  if (containerElement.value) {
    await nextTick()
    containerElement.value.scrollIntoView()
  }
}

watch(() => props.state.scrollToTopTick, maybeScrollIntoView)

props.state.isAtTheTop = true

onMounted(() => {
  if (containerElement.value) {
    onVisible(containerElement.value, () => {
      props.state.isAtTheTop = true
    })

    onNotVisible(containerElement.value, () => {
      props.state.isAtTheTop = false
    })
  }
})
</script>

<template>
  <div ref="containerElement"></div>
</template>
