<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import Popup from '../../components/utils/Popup.vue'
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
