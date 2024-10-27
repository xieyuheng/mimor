<script setup lang="ts">
import {
  ArrowTopRightOnSquareIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  BackspaceIcon,
  CodeBracketIcon,
  PencilIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { currentOrigin } from '../../utils/currentOrigin'
import { useGlobalLang } from '../lang/useGlobalLang'
import { Program } from './Program'
import { State } from './State'
import { programBack } from './programBack'
import { programFormatProgress } from './programFormatProgress'
import { stateEditorExit } from './stateEditorExit'
import { stateEditorOpen } from './stateEditorOpen'

const props = defineProps<{
  state: State
  program: Program
}>()

const lang = useGlobalLang()

const origin = props.state.isWebComponent
  ? 'https://mimor.app'
  : currentOrigin()

function fullscreenSupported() {
  return document.fullscreenEnabled
}
</script>

<template>
  <div class="flex w-full justify-between px-3 py-2 text-xl">
    <div
      class="whitespace-pre pr-2"
      :class="{
        'text-white': state.theme.name !== 'white',
      }"
      :title="lang.isZh() ? '进度' : 'Progress'"
    >
      {{ programFormatProgress(program) }}
    </div>

    <div class="flex items-center space-x-4" :class="[state.theme.text(800)]">
      <button
        @click="programBack(program)"
        :title="lang.isZh() ? '后退一张卡片' : 'Back a card'"
      >
        <BackspaceIcon class="h-5 w-5" />
      </button>

      <template v-if="state.isEditable">
        <button
          v-if="state.kind === 'Program'"
          :title="lang.isZh() ? '编辑' : 'Edit'"
          @click="stateEditorOpen(state, { fromKind: 'Program' })"
        >
          <PencilIcon class="h-5 w-5" />
        </button>

        <button
          v-if="state.kind === 'Editor'"
          @click="stateEditorExit(state)"
          :title="lang.isZh() ? '退出编辑' : 'Exit editor'"
        >
          <XMarkIcon class="h-5 w-5" />
        </button>
      </template>

      <template v-if="!state.isEditable">
        <button
          v-if="state.kind === 'Program'"
          @click="stateEditorOpen(state, { fromKind: 'Program' })"
          :title="lang.isZh() ? '查看源代码' : 'View source'"
        >
          <CodeBracketIcon class="h-5 w-5" />
        </button>

        <button
          v-if="state.kind === 'Editor'"
          @click="state.kind = 'Program'"
          :title="lang.isZh() ? '回到卡片程序' : 'Back to the program'"
        >
          <PlayIcon class="h-5 w-5" />
        </button>
      </template>

      <a
        :href="`${origin}/mimors/${state.src}`"
        target="_blank"
        :title="lang.isZh() ? '在新的标签中打开' : 'Open in new tab'"
      >
        <ArrowTopRightOnSquareIcon class="mb-0.5 h-5 w-5" />
      </a>

      <template v-if="fullscreenSupported()">
        <button
          v-if="!state.isFullscreen"
          :title="lang.isZh() ? '进入全屏' : 'Enter fullscreen'"
          @click="state.isFullscreen = true"
        >
          <ArrowsPointingOutIcon class="mb-0.5 h-5 w-5" />
        </button>

        <button
          v-else
          :title="lang.isZh() ? '退出全屏' : 'Exit fullscreen'"
          @click="state.isFullscreen = false"
        >
          <ArrowsPointingInIcon class="mb-0.5 h-5 w-5" />
        </button>
      </template>

      <a
        :href="origin"
        target="_blank"
        :title="lang.isZh() ? '打开 Mimor 主页' : 'Open Mimor homepage'"
      >
        <Lang class="whitespace-pre font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </a>
    </div>
  </div>
</template>
