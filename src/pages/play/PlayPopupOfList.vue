<script setup lang="ts">
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import ListFocusKeyboardUpAndDown from '../../components/utils/ListFocusKeyboardUpAndDown.vue'
import Popup from '../../components/utils/Popup.vue'
import Scope from '../../components/utils/Scope.vue'
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div class="text-2xl">Popup of List</div>

    <Scope :scope="{ tag: 'en' }" v-slot="{ scope }">
      <Popup class="relative">
        <template #button>
          <div
            class="max-w-fit border border-black p-3 text-xl dark:border-white"
          >
            <span v-if="scope.tag === 'en'">Lang</span>
            <span v-if="scope.tag === 'zh'">语言</span>
          </div>
        </template>

        <template #panel="{ popup }">
          <TransitionPop>
            <ListFocusKeyboardUpAndDown
              v-show="popup.open"
              class="absolute top-[4rem] z-10 flex flex-col border border-black bg-white text-xl dark:border-white dark:bg-stone-900 dark:text-white"
              :entries="[
                { tag: 'zh', text: '中文' },
                { tag: 'en', text: 'English' },
              ]"
            >
              <template #entry="{ entry }">
                <button
                  class="flex w-full p-3"
                  @click="
                    () => {
                      scope.tag = entry.tag
                      popup.open = false
                    }
                  "
                >
                  {{ entry.text }}
                </button>
              </template>
            </ListFocusKeyboardUpAndDown>
          </TransitionPop>
        </template>
      </Popup>
    </Scope>
  </div>
</template>
