<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <textarea
    ref="textareaElement"
    class="h-full w-full resize-none px-3 py-2 font-mono text-base focus:outline-none dark:bg-stone-900 dark:text-white"
    name="text"
    spellcheck="false"
    rows="1"
    v-model="state.editor.content"
    :placeholder="lang.isZh() ? '创作谜墨卡片 *^-^*' : 'Create mimor cards :)'"
  ></textarea>
</template>
