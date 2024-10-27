<script setup lang="ts">
import PageDesktopHead from './PageDesktopHead.vue'
import PageDesktopSidebar from './PageDesktopSidebar.vue'
import PageMobileFoot from './PageMobileFoot.vue'
import PageMobileHead from './PageMobileHead.vue'

defineProps<{
  noMobileHead?: boolean
}>()
</script>

<template>
  <div>
    <PageMobileHead
      v-if="!noMobileHead"
      class="fixed left-0 top-0 z-10 border-b border-stone-300 bg-white dark:border-stone-600 dark:bg-stone-900 dark:text-white sm:hidden"
    />

    <div class="fixed left-0 top-0 z-10 hidden w-full sm:block">
      <div
        class="flex h-16 items-center border-b border-stone-300 dark:border-stone-600"
      >
        <PageDesktopHead
          class="bg-white px-3 shadow-sm dark:bg-stone-900 dark:text-white sm:px-6"
        />
      </div>
    </div>

    <div
      class="h-screen-dynamic flex pb-14 dark:bg-stone-900 dark:text-white sm:pb-0 sm:pt-16"
      :class="{
        'pt-12': !noMobileHead,
      }"
    >
      <div class="hidden h-full flex-col sm:flex">
        <PageDesktopSidebar
          class="p-6 text-xl sm:w-[14rem] md:w-[16rem] lg:w-[18rem]"
        />
      </div>

      <div class="flex h-full w-full flex-col overflow-auto">
        <slot />
      </div>
    </div>

    <div
      class="fixed bottom-0 right-0 z-10 w-full border-t border-stone-300 bg-white px-3 dark:border-stone-600 dark:bg-stone-900 dark:text-white sm:hidden"
    >
      <PageMobileFoot />
    </div>
  </div>
</template>
