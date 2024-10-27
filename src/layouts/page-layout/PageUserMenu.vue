<script setup lang="ts">
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import Popup from '../../components/utils/Popup.vue'
import { useGlobalAuth } from '../../models/auth'
import { logout } from '../../models/auth/logout'

const auth = useGlobalAuth()
const lang = useGlobalLang()
const router = useRouter()

const isFileSystemAccessSupported =
  typeof window.showOpenFilePicker === 'function'

async function logoutAfterConfirming() {
  const message = lang.isZh() ? '确定要退出吗？' : 'Are you sure to logout?'

  if (window.confirm(message)) {
    await logout()
    router.replace('/')
  }
}
</script>

<template>
  <Popup class="relative flex">
    <template #button>
      <button v-if="auth.user" class="text-xl font-bold">
        {{ auth.user.name }}
      </button>
    </template>

    <template #panel="{ popup }">
      <TransitionPop>
        <div
          v-show="popup.open"
          class="absolute right-0 top-10 z-10 flex flex-col items-start space-y-3 border border-stone-300 bg-white py-3 shadow dark:border-stone-600 dark:bg-stone-900"
        >
          <Hyperlink
            v-if="auth.user"
            href="/settings"
            class="px-3 hover:underline"
          >
            <Lang>
              <template #zh>设置</template>
              <template #en>Settings</template>
            </Lang>
          </Hyperlink>

          <div
            class="w-full border-t border-stone-300 dark:border-stone-600"
          ></div>

          <button
            v-if="auth.user"
            class="px-3 hover:underline"
            @click="logoutAfterConfirming()"
          >
            <Lang>
              <template #zh>退出</template>
              <template #en>Logout</template>
            </Lang>
          </button>
        </div>
      </TransitionPop>
    </template>
  </Popup>
</template>
