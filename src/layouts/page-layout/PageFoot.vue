<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
</script>

<template>
  <div class="flex justify-between">
    <div></div>

    <div class="text-sm text-stone-600 dark:text-stone-400">
      <Lang>
        <template #zh>
          <a
            href="https://xieyuheng.com"
            class="hover:underline"
            target="_blank"
          >
            谢宇恒软件工作室
          </a>
        </template>
        <template #en>
          <a
            href="https://xieyuheng.com"
            class="hover:underline"
            target="_blank"
          >
            Xie Yuheng Software Studio
          </a>
        </template>
      </Lang>
    </div>
  </div>
</template>
