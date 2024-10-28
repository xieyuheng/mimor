<script setup lang="ts">
import { Base64 } from 'js-base64'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../models/theme'
import { State } from './State'

const lang = useGlobalLang()
const theme = useGlobalTheme()

defineProps<{ state: State }>()
</script>

<template>
  <x-mimor
    :reducedMotion="true"
    :src="`data:text/plain;base64,${Base64.encode(state.editor.content)}`"
    :text="state.editor.content"
    :langTag="lang.tag"
    :themeName="theme.name"
  />
</template>
