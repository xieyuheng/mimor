<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { Head } from '@vueuse/head'
import { Pane, Splitpanes } from 'splitpanes'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import EditorEchoarea from './EditorEchoarea.vue'
import EditorHead from './EditorHead.vue'
import EditorTab from './EditorTab.vue'
import EditorTabbar from './EditorTabbar.vue'
import EditorToolbar from './EditorToolbar.vue'
import EditorWelcome from './EditorWelcome.vue'
import EditorWelcomeWorkspace from './EditorWelcomeWorkspace.vue'
import EditorWorkspace from './EditorWorkspace.vue'
import { State } from './State'

defineProps<{ state: State }>()

const splitpanesSize = useLocalStorage('EditorLayout.splitpanesSize', 24)

const lang = useGlobalLang()
</script>

<template>
  <div
    class="h-screen-dynamic flex w-screen flex-col bg-white text-lg text-black dark:bg-stone-900 dark:text-white"
  >
    <Head>
      <title v-if="lang.isZh()">谜墨编辑器</title>
      <title v-else>Mimor Editor</title>
    </Head>

    <EditorHead
      :class="{
        'border-b border-black dark:border-white':
          state.tabs.length > 0 || state.currentWorkspace,
      }"
      :state
    />

    <Splitpanes
      class="splitter-6 sm:splitter-3 flex h-full w-full overflow-auto"
      @resized="splitpanesSize = $event[0].size"
    >
      <Pane
        v-if="state.currentWorkspace"
        class="flex h-full w-full flex-col overflow-auto"
        min-size="8"
        :size="splitpanesSize"
      >
        <EditorWorkspace :state :workspace="state.currentWorkspace" />
      </Pane>

      <Pane class="flex h-full w-full flex-col overflow-auto">
        <EditorTabbar :state />
        <EditorToolbar :state />
        <EditorTab v-if="state.currentTab" :state :tab="state.currentTab" />
        <EditorWelcomeWorkspace v-else-if="state.currentWorkspace" :state />
        <EditorWelcome v-else :state />
      </Pane>
    </Splitpanes>

    <EditorEchoarea :state />
  </div>
</template>
