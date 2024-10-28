<script setup lang="ts">
import PageHead from './PageHead.vue'
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div>
    <div class="fixed left-0 top-0 z-10 w-full sm:block">
      <div
        class="flex h-16 items-center border-b border-stone-300 dark:border-stone-600"
      >
        <PageHead
          class="bg-white px-3 shadow-sm sm:px-6 dark:bg-stone-900 dark:text-white"
        />
      </div>
    </div>

    <div
      class="h-screen-dynamic flex pb-14 pt-12 sm:pb-0 sm:pt-16 dark:bg-stone-900 dark:text-white"
    >
      <div class="h-full flex-col sm:flex">
        <PageSidebar
          class="p-6 text-xl sm:w-[14rem] md:w-[16rem] lg:w-[18rem]"
        />
      </div>

      <div class="flex h-full w-full flex-col overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
