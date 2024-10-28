<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <PageLayout>
    <div class="p-3 text-xl text-stone-500 sm:p-6 dark:text-stone-300">
      <Lang>
        <template #zh>谜墨加载中⋯⋯</template>
        <template #en>Loading mimor ...</template>
      </Lang>

      <div class="py-3">
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
  </PageLayout>
</template>
