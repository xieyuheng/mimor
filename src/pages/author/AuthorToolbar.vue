<script setup lang="ts">
import {
  ArrowUturnUpIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex max-w-[47rem] flex-wrap justify-between text-base">
    <div class="flex flex-wrap text-base"></div>

    <div class="flex flex-wrap text-base">
      <button
        v-if="!state.isAtTheTop"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `回到顶部` : `Back to top`"
        @click="
          state.scrollToTopTick = state.scrollToTopTick
            ? state.scrollToTopTick + 10
            : 10
        "
      >
        <ArrowUturnUpIcon class="h-5 w-5" />
      </button>

      <button
        v-if="!state.isSearching"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `开始搜索` : `Start searching`"
        @click="
          () => {
            state.isSearching = true
            state.scrollToTopTick = 1
          }
        "
      >
        <MagnifyingGlassIcon class="h-5 w-5" />

        <Lang>
          <template #zh>搜索</template>
          <template #en>Search</template>
        </Lang>
      </button>

      <button
        v-if="state.isSearching"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `退出搜索` : `Exit searching`"
        @click="
          () => {
            state.isSearching = false
            state.scrollToTopTick = 0
          }
        "
      >
        <XMarkIcon class="h-5 w-5" />

        <Lang>
          <template #zh>搜索</template>
          <template #en>Search</template>
        </Lang>
      </button>

      <div class="flex min-w-max items-center space-x-1">
        <ListBulletIcon class="h-5 w-5" />

        <Lang>
          <template #zh>
            <span>内容：</span>
            <span class="font-bold">{{ state.entries.length }}</span>
          </template>
          <template #en>
            <span>Contents: </span>
            <span class="font-bold">{{ state.entries.length }}</span>
          </template>
        </Lang>
      </div>
    </div>
  </div>
</template>
