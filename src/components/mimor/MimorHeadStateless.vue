<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../lang/useGlobalLang'
import { StateOptions } from './stateLoad'

const props = defineProps<{ options: StateOptions }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex w-full justify-between px-3 py-2 text-xl">
    <div></div>

    <div class="flex items-center space-x-4">
      <div>
        <Lang class="whitespace-pre font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </div>
    </div>
  </div>
</template>
