<script setup lang="ts">
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
  PlayIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
import { stateEditorOpen } from './stateEditorOpen'

const props = defineProps<{
  state: State
}>()

const lang = useGlobalLang()

function fullscreenSupported() {
  return document.fullscreenEnabled
}
</script>

<template>
  <div class="flex w-full justify-between px-3 py-2 text-xl">
    <div></div>

    <div class="flex items-center space-x-4" :class="[state.theme.text(800)]">
      <button
        v-if="state.kind === 'Error'"
        @click="stateEditorOpen(state, { fromKind: 'Error' })"
        :title="lang.isZh() ? '查看源代码' : 'View source'"
      >
        <CodeBracketIcon class="h-5 w-5" />
      </button>

      <button
        v-if="state.kind === 'Editor'"
        @click="state.kind = 'Error'"
        :title="lang.isZh() ? '回到卡片程序' : 'Back to the program'"
      >
        <PlayIcon class="h-5 w-5" />
      </button>

      <template v-if="fullscreenSupported()">
        <button
          v-if="!state.isFullscreen"
          :title="lang.isZh() ? '进入全屏' : 'Enter fullscreen'"
          @click="state.isFullscreen = true"
        >
          <ArrowsPointingOutIcon class="h-5 w-5" />
        </button>

        <button
          v-else
          :title="lang.isZh() ? '退出全屏' : 'Exit fullscreen'"
          @click="state.isFullscreen = false"
        >
          <ArrowsPointingInIcon class="h-5 w-5" />
        </button>
      </template>

      <div>
        <Lang class="whitespace-pre font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </div>
    </div>
  </div>
</template>
