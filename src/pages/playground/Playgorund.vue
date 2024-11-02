<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '../../components/layout/Layout.vue'
import { useResponsive } from '../../models/responsive'
import PlaygorundPreview from './PlaygorundPreview.vue'
import PlaygorundTextarea from './PlaygorundTextarea.vue'
import { State } from './State'

const responsive = useResponsive()
const state = reactive(new State())
</script>

<template>
  <Layout>
    <form class="flex h-full flex-col p-3 sm:p-6">
      <div class="flex flex-col sm:h-full sm:flex-row">
        <div
          class="flex h-full min-h-[24rem] w-full flex-col border border-black sm:min-h-[1rem] sm:overflow-auto dark:border-white"
        >
          <PlaygorundTextarea :state />
        </div>

        <div v-show="responsive.isMobile()" class="pt-3"></div>

        <div
          class="flex min-h-full w-full flex-col border border-black sm:min-h-[1rem] sm:overflow-auto dark:border-white"
        >
          <PlaygorundPreview class="h-full" :state />
        </div>

        <div v-show="responsive.isMobile()" class="pt-3"></div>
      </div>
    </form>
  </Layout>
</template>
