<script setup lang="ts">
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import Popup from '../../components/utils/Popup.vue'

const lang = useGlobalLang()
const router = useRouter()

const isFileSystemAccessSupported =
  typeof window.showOpenFilePicker === 'function'
</script>

<template>
  <Popup class="relative flex">
    <template #panel="{ popup }">
      <TransitionPop>
        <div
          v-show="popup.open"
          class="absolute right-0 top-10 z-10 flex flex-col items-start space-y-3 border border-stone-300 bg-white py-3 shadow dark:border-stone-600 dark:bg-stone-900"
        >
          <Hyperlink href="/settings" class="px-3 hover:underline">
            <Lang>
              <template #zh>设置</template>
              <template #en>Settings</template>
            </Lang>
          </Hyperlink>
        </div>
      </TransitionPop>
    </template>
  </Popup>
</template>
