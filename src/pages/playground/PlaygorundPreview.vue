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
    :src="`data:text/plain;base64,${Base64.encode(state.editor.content)}`"
    :text="state.editor.content"
    :reduced-motion="true"
    :lang-tag="lang.tag"
    :theme-name="theme.name"
  />
</template>
