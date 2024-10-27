<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import SearchInput from '../../components/search/SearchInput.vue'
import ListLazyScroll from '../../components/utils/ListLazyScroll.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorEntry from './AuthorEntry.vue'
import AuthorInfo from './AuthorInfo.vue'
import AuthorToolbar from './AuthorToolbar.vue'
import AuthorTop from './AuthorTop.vue'
import { State } from './State'
import { stateEntriesFiltered } from './stateEntriesFiltered'
import { stateEntriesSorted } from './stateEntriesSorted'
import { stateWatch } from './stateWatch'

const props = defineProps<{ state: State }>()

stateWatch(props.state)

const lang = useGlobalLang()
</script>

<template>
  <PageLayout :noMobileHead="true">
    <Head>
      <title v-if="lang.isZh()">{{ state.username }} | 谜墨</title>
      <title v-else>{{ state.username }} | Mimor</title>
    </Head>

    <div class="flex h-full w-full flex-col items-center sm:pr-28">
      <div class="flex h-full w-full max-w-[47rem] flex-col py-3 sm:py-6">
        <AuthorTop :state />

        <div class="flex flex-col px-3 pb-3">
          <AuthorInfo :state />
        </div>

        <div class="flex flex-col px-3 pb-3">
          <AuthorToolbar :state />
        </div>

        <div v-show="state.isSearching" class="flex w-full px-3 py-1 text-xl">
          <SearchInput
            class="w-full"
            :state="state.searchState"
            @close="state.isSearching = false"
          />
        </div>

        <ListLazyScroll
          v-show="!state.isSearching"
          class="flex flex-col space-y-6 py-3"
          :entries="stateEntriesSorted(state)"
          :chunkSize="3"
          :eagerLoadAll="state.eagerLoadAll"
        >
          <template #entry="{ entry }">
            <AuthorEntry :state :entry />
          </template>

          <template #bottom="{ isFinished }">
            <div
              class="py-px"
              :class="{
                'animate-pulse border-t border-orange-500 dark:border-orange-300':
                  !isFinished,
              }"
            ></div>
          </template>
        </ListLazyScroll>

        <ListLazyScroll
          v-show="state.isSearching"
          class="flex flex-col space-y-6 py-3"
          :entries="stateEntriesFiltered(state)"
          :chunkSize="3"
          :eagerLoadAll="state.eagerLoadAll"
        >
          <template #entry="{ entry }">
            <AuthorEntry :state :entry />
          </template>

          <template #bottom="{ isFinished }">
            <div
              class="py-px"
              :class="{
                'animate-pulse border-t border-orange-500 dark:border-orange-300':
                  !isFinished,
              }"
            ></div>
          </template>
        </ListLazyScroll>
      </div>
    </div>
  </PageLayout>
</template>
