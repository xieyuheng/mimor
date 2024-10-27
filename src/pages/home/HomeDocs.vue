<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { currentOrigin } from '../../utils/currentOrigin'

const origin = currentOrigin()
</script>

<template>
  <div class="flex">
    <a
      :href="`https://readonly.link/manuals/${origin}/contents/manual/zh.json`"
      target="_blank"
    >
      <button
        class="border-4 border-sky-200 bg-sky-300 px-3 py-2 text-3xl font-bold text-sky-50 dark:border-sky-600 dark:bg-sky-500"
      >
        <Lang>
          <template #zh>
            <span class="whitespace-pre">文档</span>
          </template>

          <template #en>
            <span class="whitespace-pre">Docs</span>
          </template>
        </Lang>
      </button>
    </a>
  </div>
</template>
