<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { workspaceFileFindAll } from './workspaceFileFindAll'

const props = defineProps<{
  state: State
  workspace: Workspace
}>()

const inputText = ref<string | undefined>()
const allNodes = ref<Array<WorkspaceNodeFile> | undefined>()
const inputElement = ref<HTMLInputElement | undefined>()

onMounted(() => {
  if (inputElement.value) {
    inputElement.value.focus()
  }
})

onMounted(async () => {
  allNodes.value = await workspaceFileFindAll(props.workspace, {
    showDotFiles: props.state.showDotFiles,
  })
})

const nodes = computed(
  () =>
    allNodes.value &&
    allNodes.value.filter(
      (node) => !inputText.value || node.relativePath.includes(inputText.value),
    ),
)
</script>

<template>
  <div
    class="w-[40rem] rounded border border-stone-500 bg-stone-100 p-2 dark:border-stone-400 dark:bg-stone-700 dark:text-white"
  >
    <input
      ref="inputElement"
      class="w-full border border-stone-600 bg-stone-100 px-2 focus:outline-none dark:border-stone-200 dark:bg-stone-700 dark:text-white"
      type="text"
      v-model="inputText"
      placeholder="Search by file name."
    />

    <div
      v-if="nodes"
      class="my-1 flex h-[26rem] w-full flex-col overflow-auto px-1.5"
    >
      <div v-for="node of nodes" :key="node.relativePath" class="flex">
        <button
          class="w-full text-start hover:underline"
          @click="
            async () => {
              await stateWorkspaceNodeFileOpen(state, node)
              $emit('exit')
            }
          "
        >
          {{ node.relativePath }}
        </button>
      </div>
    </div>
  </div>
</template>
