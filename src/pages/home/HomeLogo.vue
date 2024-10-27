<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'

const lang = useGlobalLang()
</script>

<template>
  <Hyperlink href="/" class="whitespace-pre text-2xl font-bold">
    <div>{{ lang.isZh() ? '谜墨' : 'Mimor' }}</div>
  </Hyperlink>
</template>
