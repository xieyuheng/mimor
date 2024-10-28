<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../models/theme'
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
  lang?: { tag: string }
  theme?: { name: string }
}>()

const state = ref<State>()
const rootElement = ref<HTMLElement>()

const lang = useGlobalLang()
const theme = useGlobalTheme()

watchEffect(() => {
  rootElement.value?.classList.add(theme.name)
})

watch(
  () => theme.name,
  (value, oldValue) => {
    if (oldValue) {
      rootElement.value?.classList.remove(oldValue)
    }

    rootElement.value?.classList.add(value)
  },
)

watchEffect(async () => {
  if (props.lang?.tag) lang.tag = props.lang.tag
  if (props.theme?.name) theme.name = props.theme.name

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
