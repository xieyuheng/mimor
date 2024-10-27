<script setup lang="ts">
import Modal from '../../components/utils/Modal.vue'
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div class="text-2xl">Modal</div>

    <Modal>
      <template #button>
        <div
          class="w-fit border border-black bg-white p-3 text-xl dark:border-white dark:bg-stone-900 dark:text-white"
        >
          Open Modal
        </div>
      </template>

      <template #panel>
        <div
          class="m-3 overflow-y-auto border border-black bg-white p-6 dark:border-white dark:bg-stone-900 dark:text-white sm:p-10"
        >
          <h2 class="text-3xl font-bold">Launch nuclear ballistic missile</h2>

          <p class="mt-2 text-stone-600 dark:text-stone-300">
            Are you sure you want to do this?
          </p>

          <div class="mt-8 flex space-x-2">
            <button
              type="button"
              class="border border-black p-3 dark:border-white"
            >
              Confirm
            </button>

            <button
              type="button"
              class="border border-black p-3 dark:border-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
