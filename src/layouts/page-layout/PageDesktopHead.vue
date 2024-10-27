<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageLogo from './PageLogo.vue'
import PageUserMenu from './PageUserMenu.vue'

const lang = useGlobalLang()
const router = useRouter()
</script>

<template>
  <div class="flex w-full items-baseline justify-between">
    <div class="flex">
      <PageLogo class="text-2xl" />
    </div>

    <div class="flex space-x-3 text-xl">
      <Hyperlink
        href="/create"
        class="flex items-center border border-stone-300 px-3 py-1 dark:border-stone-600"
      >
        <PlusIcon class="h-5 w-5" />
        <div class="px-1"></div>
        <Lang>
          <template #zh> 创作 </template>
          <template #en> Create </template>
        </Lang>
      </Hyperlink>

      <PageUserMenu />
    </div>
  </div>
</template>
