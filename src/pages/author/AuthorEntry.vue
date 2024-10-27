<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import SearchResult from '../../components/search/SearchResult.vue'
import { wait } from '../../utils/wait'
import AuthorEntryContent from './AuthorEntryContent.vue'
import AuthorEntryInfo from './AuthorEntryInfo.vue'
import AuthorEntryToolbar from './AuthorEntryToolbar.vue'
import { Entry } from './Entry'
import { State } from './State'

const props = defineProps<{
  state: State
  entry: Entry
}>()

const containerElement = ref<HTMLElement | undefined>(undefined)

async function maybeScrollIntoView(): Promise<void> {
  if (props.state.focusedSrc === props.entry.mimor['@path']) {
    if (containerElement.value) {
      await nextTick()
      await wait(200)
      containerElement.value.scrollIntoView()
      props.state.focusedSrc = undefined
    }
  }
}

onMounted(maybeScrollIntoView)

watch(() => props.state.focusedSrc, maybeScrollIntoView)
</script>

<template>
  <div ref="containerElement" class="flex flex-col">
    <div
      v-if="
        state.isSearching && state.searchState.results[entry.mimor['@path']]
      "
      class="px-3 pb-1"
    >
      <SearchResult
        :state="state.searchState"
        :result="state.searchState.results[entry.mimor['@path']]"
      />
    </div>

    <AuthorEntryContent :state :entry />

    <div class="flex flex-col space-y-1 px-3 py-2">
      <AuthorEntryToolbar :state :entry />
      <AuthorEntryInfo :state :entry />
    </div>
  </div>
</template>
