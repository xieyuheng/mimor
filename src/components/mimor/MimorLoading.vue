<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import MimorHeadStateless from './MimorHeadStateless.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div
    class="flex h-full flex-col border border-black bg-white dark:border-white dark:bg-stone-900"
  >
    <MimorHeadStateless :options="options" />

    <div
      class="space-y-3 bg-white p-3 text-xl text-stone-500 dark:bg-stone-900 dark:text-stone-300"
    >
      <Lang>
        <template #zh> 谜墨加载中⋯⋯ </template>
        <template #en> Loading mimor... </template>
      </Lang>

      <div>
        <Lang>
          <template #zh>
            <div>来源：{{ options.src }}</div>
          </template>
          <template #en>
            <div>Source: {{ options.src }}</div>
          </template>
        </Lang>
      </div>
    </div>
  </div>
</template>
