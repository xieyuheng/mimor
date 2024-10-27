<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between">
    <div></div>

    <div class="flex">
      <button
        :disabled="state.editor.content.length === 0"
        class="border-l border-black px-3 py-2 disabled:text-stone-400 dark:border-white"
      >
        <Lang>
          <template #zh> 创建 </template>
          <template #en> Create </template>
        </Lang>
      </button>
    </div>
  </div>
</template>
