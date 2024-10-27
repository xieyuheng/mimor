<script setup lang="ts">
import { FolderIcon, HashtagIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
import { stateKeywordFurtherResults } from './stateKeywordFurtherResults'
import { stateKnownKeywords } from './stateKnownKeywords'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="mx-3 flex flex-wrap py-2">
    <button
      v-for="keyword of stateKnownKeywords(state)"
      :key="keyword"
      :disabled="
        !state.keywords[keyword] &&
        Object.keys(stateKeywordFurtherResults(state, keyword)).length === 0
      "
      class="my-1 mr-3 flex items-center px-1 disabled:border-stone-400 disabled:text-stone-400"
      :class="{
        'border border-dashed border-black': !state.keywords[keyword],
        'border border-orange-500 text-orange-500 dark:border-orange-300 dark:text-orange-300':
          state.keywords[keyword],
      }"
      @click="
        state.keywords[keyword]
          ? delete state.keywords[keyword]
          : (state.keywords[keyword] = true)
      "
    >
      <FolderIcon v-if="keyword.endsWith('/')" class="mr-1 h-5 w-5" />
      <HashtagIcon v-else class="mr-0.5 h-4 w-4" />
      <span class="text-lg font-bold">{{ keyword }}</span>
      <span
        class="pl-1 text-lg text-stone-500 dark:text-stone-300"
        v-if="
          !state.keywords[keyword] &&
          Object.keys(stateKeywordFurtherResults(state, keyword)).length !== 0
        "
        >({{
          Object.keys(stateKeywordFurtherResults(state, keyword)).length
        }})</span
      >
    </button>
  </div>
</template>
