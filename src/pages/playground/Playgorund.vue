<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '../../components/layout/Layout.vue'
import PlaygorundPreview from './PlaygorundPreview.vue'
import PlaygorundTextarea from './PlaygorundTextarea.vue'
import { State } from './State'

const state = reactive(new State())
</script>

<template>
  <Layout>
    <div class="flex h-full w-full flex-col p-3 sm:p-6">
      <form class="flex h-full flex-col overflow-y-auto">
        <div class="flex flex-col sm:h-full sm:flex-row">
          <div
            class="flex h-full min-h-[24rem] w-full flex-col border border-black sm:min-h-[1rem] sm:overflow-auto dark:border-white"
          >
            <PlaygorundTextarea :state />
          </div>

          <div
            class="flex min-h-full w-full flex-col border-b border-l border-r border-black sm:min-h-[1rem] sm:overflow-auto sm:border-y sm:border-l-0 dark:border-white"
          >
            <PlaygorundPreview class="h-full" :state />
          </div>
        </div>
      </form>
    </div>
  </Layout>
</template>
