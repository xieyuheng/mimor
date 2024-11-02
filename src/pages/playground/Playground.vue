<script setup lang="ts">
import { Base64 } from 'js-base64'
import debounce from 'lodash/debounce'
import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Layout from '../../components/layout/Layout.vue'
import { useResponsive } from '../../models/responsive'
import PlaygroundPreview from './PlaygroundPreview.vue'
import PlaygroundTextarea from './PlaygroundTextarea.vue'
import { State } from './State'

const route = useRoute()
const router = useRouter()
const responsive = useResponsive()
const content =
  typeof route.params.encoded === 'string'
    ? Base64.decode(route.params.encoded)
    : ''

const state = reactive(new State({ content }))

watch(
  () => state.content,
  debounce((value: string) => {
    router.replace({ path: `/playground/${Base64.encodeURI(value)}` })
  }, 300),
)
</script>

<template>
  <Layout>
    <div class="flex flex-col p-3 sm:h-full sm:flex-row sm:space-x-4 sm:p-6">
      <div
        class="flex h-full min-h-[24rem] w-full flex-col border border-black sm:min-h-[1rem] sm:overflow-auto dark:border-white"
      >
        <PlaygroundTextarea :state />
      </div>

      <div v-show="responsive.isMobile()" class="pt-3"></div>

      <div
        class="flex min-h-full w-full flex-col sm:min-h-[1rem] sm:overflow-auto"
      >
        <PlaygroundPreview class="h-full" :state />
      </div>

      <div v-show="responsive.isMobile()" class="pt-3"></div>
    </div>
  </Layout>
</template>
