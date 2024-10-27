<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

defineProps<{
  options: {
    username: string
  }
}>()
</script>

<template>
  <PageLayout>
    <div class="p-3 text-xl text-stone-500 dark:text-stone-300 sm:p-6">
      <Lang>
        <template #zh>
          <div>没有这位作者。</div>
        </template>
        <template #en>
          <div>No such author.</div>
        </template>
      </Lang>

      <div class="py-3">
        <Lang>
          <template #zh>
            <div>用户名：{{ options.username }}</div>
          </template>
          <template #en>
            <div>Username: {{ options.username }}</div>
          </template>
        </Lang>
      </div>
    </div>
  </PageLayout>
</template>
