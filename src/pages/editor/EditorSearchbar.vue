<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import Popup from '../../components/utils/Popup.vue'
import EditorSearchMenu from './EditorSearchMenu.vue'
import { State } from './State'
import { Workspace } from './Workspace'

defineProps<{
  state: State
  workspace: Workspace
}>()
</script>

<template>
  <Popup class="relative">
    <template #button>
      <div
        class="flex w-[30rem] items-center justify-center rounded border border-stone-500 bg-stone-100 dark:border-stone-400 dark:bg-stone-700"
      >
        <MagnifyingGlassIcon
          class="h-5 w-5 text-stone-500 dark:text-stone-300"
        />
        <div>&nbsp;</div>
        <div class="text-stone-500 dark:text-stone-300">
          {{ workspace.root.handle.name }}
        </div>
      </div>
    </template>

    <template #panel="{ popup }">
      <EditorSearchMenu
        v-if="popup.open"
        class="absolute top-0 z-30"
        :state
        :workspace="workspace"
        @exit="popup.open = false"
      />
    </template>
  </Popup>
</template>
