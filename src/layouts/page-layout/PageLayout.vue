<script setup lang="ts">
import PageFoot from './PageFoot.vue'
import PageHead from './PageHead.vue'
</script>

<template>
  <div>
    <div class="fixed left-0 top-0 z-10 w-full sm:block">
      <div
        class="flex h-16 items-center border-b border-stone-600 dark:border-stone-400"
      >
        <PageHead
          class="bg-white px-3 shadow-sm sm:px-6 dark:bg-stone-900 dark:text-white"
        />
      </div>
    </div>

    <div
      class="h-screen-dynamic flex flex-col pt-12 sm:pt-16 dark:bg-stone-900 dark:text-white"
    >
      <div class="flex h-full w-full flex-col overflow-auto">
        <slot />
      </div>

      <div class="flex justify-end px-6 pb-4">
        <PageFoot />
      </div>
    </div>
  </div>
</template>
