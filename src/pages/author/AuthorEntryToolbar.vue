<script setup lang="ts">
import { CloudArrowUpIcon, TrashIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { asyncRun } from '../../utils/asyncRun'
import { currentOrigin } from '../../utils/currentOrigin'
import { Entry } from './Entry'
import { State } from './State'
import { stateEntryDeleteAfterConfirming } from './stateEntryDeleteAfterConfirming'
import { stateEntrySaveNewText } from './stateEntrySaveNewText'

defineProps<{
  state: State
  entry: Entry
}>()

const origin = currentOrigin()
</script>

<template>
  <div class="flex flex-wrap text-base">
    <button
      v-if="state.isSelf"
      class="flex max-w-fit space-x-1 whitespace-pre pr-3 disabled:text-stone-500"
      :disabled="entry.isDeleting"
      @click="stateEntryDeleteAfterConfirming(state, entry)"
    >
      <TrashIcon
        class="h-5 w-5"
        :class="{
          'animate-shake': entry.isDeleting,
        }"
      />

      <Lang>
        <template #zh>删除</template>
        <template #en>Delete</template>
      </Lang>
    </button>

    <button
      v-if="
        state.isSelf && (entry.isModifiedByUploading || entry.isNotInTheCloud)
      "
      class="flex max-w-fit space-x-1 whitespace-pre pr-3 disabled:text-stone-500"
      :disabled="entry.isSaving"
      @click="
        asyncRun(async () => {
          await stateEntrySaveNewText(state, entry)
        })
      "
    >
      <CloudArrowUpIcon
        class="h-5 w-5"
        :class="{
          'animate-shake': entry.isSaving,
        }"
      />

      <Lang>
        <template #zh>保存</template>
        <template #en>Save</template>
      </Lang>
    </button>
  </div>
</template>
