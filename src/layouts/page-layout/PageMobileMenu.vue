<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import TransitionRotateInSlideOut from '../../components/transitions/TransitionRotateInSlideOut.vue'
import Popup from '../../components/utils/Popup.vue'
import RouteSyncWithQuery from '../../components/utils/RouteSyncWithQuery.vue'
import { useGlobalAuth } from '../../models/auth'
import { logout } from '../../models/auth/logout'
import { useGlobalTheme } from '../../models/theme'
import PageLogo from './PageLogo.vue'

const auth = useGlobalAuth()
const router = useRouter()
const lang = useGlobalLang()
const theme = useGlobalTheme()

async function logoutAfterConfirming() {
  const message = lang.isZh() ? '确定要退出吗？' : 'Are you sure to logout?'

  if (window.confirm(message)) {
    await logout()
    router.replace('/')
  }
}
</script>

<template>
  <Popup>
    <template #button>
      <div class="flex border border-black p-2 dark:border-white">
        <Bars3Icon class="h-7 w-7" />
      </div>
    </template>

    <template #panel="{ popup }">
      <TransitionRotateInSlideOut>
        <div
          v-show="popup.open"
          class="h-screen-dynamic fixed left-0 top-0 z-40 flex w-full flex-col justify-between overflow-auto bg-white p-3 dark:bg-stone-900 dark:text-white"
        >
          <RouteSyncWithQuery :state="popup" name="mobile-menu" />

          <div class="flex justify-between">
            <PageLogo class="font-bold" />

            <button @click.stop="popup.open = false">
              <XMarkIcon class="h-10 w-10 stroke-1" />
            </button>
          </div>

          <div class="flex flex-col items-start space-y-2 overflow-auto">
            <button class="hover:underline" @click.stop="$router.replace('/')">
              <Lang>
                <template #zh>首页</template>
                <template #en>Home</template>
              </Lang>
            </button>

            <button
              v-if="auth.user"
              class="hover:underline"
              @click.stop="$router.replace(`/@${auth.user.username}`)"
            >
              <Lang>
                <template #zh>我的</template>
                <template #en>Mine</template>
              </Lang>
            </button>

            <button
              v-if="auth.user"
              class="hover:underline"
              @click.stop="$router.replace('/settings')"
            >
              <Lang>
                <template #zh>设置</template>
                <template #en>Settings</template>
              </Lang>
            </button>

            <button
              class="hover:underline"
              @click.stop="
                theme.name !== 'dark'
                  ? (theme.name = 'dark')
                  : (theme.name = 'light')
              "
            >
              <Lang>
                <template #zh>
                  <span v-if="theme.name === 'dark'">深色/浅色</span>
                  <span v-else>浅色/深色</span>
                </template>
                <template #en>
                  <span v-if="theme.name === 'dark'">Dark/Light</span>
                  <span v-else>Light/Dark</span>
                </template>
              </Lang>
            </button>

            <button
              class="hover:underline"
              @click.stop="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
            >
              <Lang>
                <template #zh>中文/English</template>
                <template #en>English/中文</template>
              </Lang>
            </button>

            <div class="w-full border-t border-black dark:border-white"></div>

            <button v-if="!auth.user" @click.stop="$router.replace('/login')">
              <Lang>
                <template #zh>登录</template>
                <template #en>Login</template>
              </Lang>
            </button>

            <button
              v-if="!auth.user"
              @click.stop="$router.replace('/register')"
            >
              <Lang>
                <template #zh>注册</template>
                <template #en>Register</template>
              </Lang>
            </button>

            <div v-if="auth.user" class="whitespace-pre font-bold">
              {{ auth.user.name }}
            </div>

            <button v-if="auth.user" @click.stop="logoutAfterConfirming()">
              <Lang class="whitespace-pre">
                <template #zh>退出</template>
                <template #en>Logout</template>
              </Lang>
            </button>
          </div>

          <div class="flex justify-start">
            <button @click.stop="popup.open = false">
              <XMarkIcon class="h-10 w-10 stroke-1" />
            </button>
          </div>
        </div>
      </TransitionRotateInSlideOut>
    </template>
  </Popup>
</template>
