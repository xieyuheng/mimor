<script setup lang="ts">
import Foot from './Foot.vue'
import Head from './Head.vue'
</script>

<template>
  <div class="bg-white dark:bg-stone-900 dark:text-white">
    <div class="fixed left-0 top-0 z-10 w-full">
      <div
        class="flex h-12 items-center border-b border-stone-600 sm:h-16 dark:border-stone-400"
      >
        <Head class="px-3 shadow-sm sm:px-6" />
      </div>
    </div>

    <div class="h-screen-dynamic flex flex-col pt-12 sm:pt-16">
      <div class="flex h-full w-full flex-col overflow-auto">
        <slot />
      </div>

      <div class="flex justify-end px-3 pb-4 sm:px-6">
        <Foot />
      </div>
    </div>
  </div>
</template>
