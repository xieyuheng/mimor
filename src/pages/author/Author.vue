<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import AuthorLoaded from './AuthorLoaded.vue'
import AuthorLoading from './AuthorLoading.vue'
import AuthorNotFound from './AuthorNotFound.vue'
import { State } from './State'
import { stateLoadReactive } from './stateLoadReactive'

const state = ref<State | undefined>(undefined)
const route = useRoute()

watchEffect(async (value) => {
  state.value = undefined
  state.value = await stateLoadReactive({
    username: String(route.params.username),
  })
})
</script>

<template>
  <AuthorLoading
    v-if="!state"
    :options="{ username: String(route.params.username) }"
  />
  <AuthorNotFound
    v-else-if="!state.user"
    :options="{ username: String(route.params.username) }"
  />
  <AuthorLoaded v-else :state :key="state.username" />
</template>
