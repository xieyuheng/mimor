<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalTheme } from '../../models/theme'
import { State } from './State'

defineProps<{ state: State }>()

const theme = useGlobalTheme()
</script>

<template>
  <Head v-if="state.withMetaThemeColor">
    <meta
      v-if="state.themeColor"
      name="theme-color"
      :content="state.themeColor"
    />
    <template v-else>
      <meta v-if="theme.name === 'light'" name="theme-color" content="white" />
      <meta v-if="theme.name === 'dark'" name="theme-color" content="#1c1917" />
    </template>
  </Head>
</template>
