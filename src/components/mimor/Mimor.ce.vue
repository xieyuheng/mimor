<script setup lang="ts">
import { onMounted, reactive, ref, watch, watchEffect } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import MimorMeta from './MimorMeta.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'
import { stateReload } from './stateReload'

const props = defineProps<{
  src: string
  text?: string
  withMetaThemeColor?: boolean
  reducedMotion?: boolean
  langTag?: string
  themeName?: string
}>()

const state = ref<State>()
const rootElement = ref<HTMLElement>()

const lang = useGlobalLang()

watchEffect(() => {
  if (props.langTag) {
    lang.tag = props.langTag
  }
})

onMounted(() => {
  if (props.themeName) {
    rootElement.value?.classList.add(props.themeName)
  }
})

watch(
  () => props.themeName,
  (value, oldValue) => {
    if (oldValue) {
      rootElement.value?.classList.remove(oldValue)
    }

    if (value) {
      rootElement.value?.classList.add(value)
    }
  },
)

watchEffect(async () => {
  if (!state.value) {
    state.value = reactive(await stateLoad(props))
  } else {
    await stateReload(state.value, props)
  }
})
</script>

<template>
  <div ref="rootElement">
    <MimorMeta v-if="state" :state />
    <MimorLoaded v-if="state" :state />
    <MimorLoading v-else :options="{ src }" />
  </div>
</template>

<style>
@import url('../../styles/index.css');
</style>
