<script setup lang="ts">
import { ParsingError } from '@xieyuheng/x-node'
import Lang from '../../components/lang/Lang.vue'
import MimorHeadError from './MimorHeadError.vue'
import { State } from './State'

defineProps<{
  state: State
  error: Error
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <MimorHeadError :state />

    <div class="h-full space-y-2 px-3 py-2">
      <Lang
        v-if="error instanceof ParsingError"
        class="text-xl font-bold text-orange-500"
      >
        <template #zh>语法错误</template>
        <template #en>ParsingError</template>
      </Lang>

      <Lang v-else class="text-xl font-bold text-red-500">
        <template #zh>错误</template>
        <template #en>Error</template>
      </Lang>

      <div class="overflow-auto whitespace-pre-wrap font-mono">
        {{ error.message }}
      </div>
    </div>
  </div>
</template>
