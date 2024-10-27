<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="mx-3 flex justify-between pb-2 pt-1 text-base">
    <div class="flex items-center">
      <button @click="$emit('close')">
        <XMarkIcon class="h-6 w-6" />
      </button>
    </div>

    <div>
      <Lang>
        <template #zh
          >结果：<span class="font-bold">{{
            Object.keys(state.results).length
          }}</span></template
        >
        <template #en
          >Results:
          <span class="font-bold">{{
            Object.keys(state.results).length
          }}</span></template
        >
      </Lang>
    </div>
  </div>
</template>
