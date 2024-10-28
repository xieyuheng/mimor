<script setup lang="ts">
import { reactive } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../models/theme'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)

const lang = useGlobalLang()
const theme = useGlobalTheme()
</script>

<template>
  <x-mimor
    class="h-screen-dynamic w-screen"
    :src="state.src"
    :withMetaThemeColor="true"
    :lang="lang"
    :theme="theme"
  />
</template>
