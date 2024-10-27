<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="mx-3 mb-1 flex items-center space-x-1 border-b border-black pb-1 pt-2 dark:border-white"
    :class="{
      'border-orange-500 dark:border-orange-300': state.isFocused,
    }"
  >
    <input
      class="w-full font-mono text-base focus:outline-none dark:bg-stone-900"
      id="searchText"
      name="searchText"
      type="text"
      v-model="state.text"
      :placeholder="lang.isZh() ? '搜索' : 'Search'"
    />

    <label for="searchText">
      <MagnifyingGlassIcon
        class="h-5 w-5"
        :class="{
          'text-orange-500 dark:text-orange-300': state.text,
        }"
      />
    </label>
  </div>
</template>
