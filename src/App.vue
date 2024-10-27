<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from './components/lang/useGlobalLang'
import { useGlobalTheme } from './models/theme'

const lang = useGlobalLang()
const theme = useGlobalTheme()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谜墨</title>
    <title v-else>Mimor</title>

    <meta v-if="theme.name === 'light'" name="theme-color" content="white" />
    <meta v-if="theme.name === 'dark'" name="theme-color" content="#1c1917" />
  </Head>

  <RouterView />
</template>
