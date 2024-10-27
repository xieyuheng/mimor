<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeDefinition from './HomeDefinition.vue'
import HomePlayground from './HomePlayground.vue'
</script>

<template>
  <PageLayout>
    <div class="px-3 sm:pl-6 sm:pr-10">
      <div class="py-3"></div>
      <HomeDefinition class="text-3xl font-bold" />
      <div class="py-6"></div>
      <HomePlayground />
      <div class="py-3"></div>
    </div>
  </PageLayout>
</template>
