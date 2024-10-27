<script setup lang="ts">
import { reactive } from 'vue'
import FormRadio from '../../components/form/FormRadio.vue'

const state = reactive({
  lang: 'zh',
})
</script>

<template>
  <div class="flex max-w-md flex-col space-y-3">
    <div class="text-2xl">Form</div>

    <form>
      <FormRadio
        name="lang"
        v-model="state.lang"
        class="text-xl"
        :entries="[
          { value: 'zh', label: '中文' },
          { value: 'en', label: 'English' },
        ]"
      >
        <template #label>
          <span>Lang: </span>
          <span>{{ state.lang }}</span>
        </template>
      </FormRadio>
    </form>
  </div>
</template>
