<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <div class="p-3 text-xl text-stone-500 dark:text-stone-300 sm:p-6">
      <Lang>
        <template #zh> 设置加载中⋯⋯ </template>
        <template #en> Loading settings... </template>
      </Lang>
    </div>
  </PageLayout>
</template>
