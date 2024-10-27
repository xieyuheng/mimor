<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import CreateMimorPreview from './CreateMimorPreview.vue'
import CreateMimorTextarea from './CreateMimorTextarea.vue'
import CreateMimorToolbar from './CreateMimorToolbar.vue'
import { State } from './State'

const state = ref<State | undefined>(undefined)
const router = useRouter()
const report = reactive({ errorMessage: '' })
</script>

<template>
  <PageLayout>
    <div class="flex h-full w-full flex-col p-3 sm:p-6">
      <form v-if="state" class="flex h-full flex-col overflow-y-auto">
        <div class="flex flex-col sm:h-full sm:flex-row">
          <div
            class="flex h-full min-h-[24rem] w-full flex-col border border-black dark:border-white sm:overflow-auto"
          >
            <CreateMimorToolbar
              class="border-b border-black dark:border-white"
              :state
            />
            <CreateMimorTextarea :state />
          </div>

          <div
            class="flex min-h-full w-full flex-col border-b border-l border-r border-black dark:border-white sm:overflow-auto sm:border-y sm:border-l-0"
          >
            <CreateMimorPreview class="h-full" :state />
          </div>
        </div>
      </form>
    </div>
  </PageLayout>
</template>
