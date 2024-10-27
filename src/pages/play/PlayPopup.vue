<script setup lang="ts">
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import Popup from '../../components/utils/Popup.vue'
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div class="text-2xl">Popup</div>

    <Popup class="relative">
      <template #button>
        <div
          class="max-w-fit border border-black p-3 text-xl dark:border-white"
        >
          Click to toggle Popup
        </div>
      </template>

      <template #panel="{ popup }">
        <TransitionPop>
          <div
            v-show="popup.open"
            class="absolute top-[4rem] z-10 flex flex-col space-y-3 border border-black bg-white p-3 text-xl dark:border-white dark:bg-stone-900 dark:text-white"
          >
            <div>Hello from Popup</div>

            <button
              @click="popup.open = false"
              class="max-w-fit border border-black px-2 py-1 dark:border-white"
            >
              OK
            </button>
          </div>
        </TransitionPop>
      </template>
    </Popup>
  </div>
</template>
