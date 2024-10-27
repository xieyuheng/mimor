<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()

const route = useRoute()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">404 | 谜墨</title>
      <title v-else>404 | Mimor</title>
    </Head>

    <template #title>
      <div class="">404</div>
    </template>

    <div class="flex flex-col space-y-3 p-3 sm:p-6">
      <div class="text-2xl">
        <Lang>
          <template #zh>没有这个页面</template>
          <template #en>Page Not Found</template>
        </Lang>
      </div>

      <div class="overflow-x-auto font-mono text-sm">{{ route.fullPath }}</div>
    </div>
  </PageLayout>
</template>
