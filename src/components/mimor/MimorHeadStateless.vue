<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { currentOrigin } from '../../utils/currentOrigin'
import { useGlobalLang } from '../lang/useGlobalLang'
import { StateOptions } from './stateLoad'

const props = defineProps<{ options: StateOptions }>()

const lang = useGlobalLang()
const origin = props.options.isWebComponent
  ? 'https://mimor.app'
  : currentOrigin()
</script>

<template>
  <div class="flex w-full justify-between px-3 py-2 text-xl">
    <div></div>

    <div class="flex items-center space-x-4">
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
