<script setup lang="ts">
import { useClientContext } from '../../clients/mimor'
import { currentOrigin } from '../../utils/currentOrigin'
import { State } from './State'

defineProps<{ state: State }>()

const origin = currentOrigin()
</script>

<template>
  <div class="flex space-x-2">
    <img
      class="h-[5.4rem] w-[5.4rem]"
      :alt="`Avatar of ${state.username}`"
      :src="`${useClientContext().api}/users/${
        state.username
      }/public/assets/avatar`"
      :onerror="`this.onerror=null; this.src = '${origin}/contents/assets/images/user-icon.svg'`"
    />

    <div class="flex flex-col">
      <div class="text-2xl font-bold">{{ state.user?.name }}</div>
      <div class="text-xl">{{ state.username }}</div>
    </div>
  </div>
</template>
