<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalAuth } from '../../models/auth'
import { logout } from '../../models/auth/logout'
import PageLogo from './PageLogo.vue'
import PageUserMenu from './PageUserMenu.vue'

const auth = useGlobalAuth()
const lang = useGlobalLang()
const router = useRouter()

async function logoutAfterConfirming() {
  const message = lang.isZh() ? '确定要退出吗？' : 'Are you sure to logout?'

  if (window.confirm(message)) {
    await logout()
    router.replace('/')
  }
}
</script>

<template>
  <div class="flex w-full items-baseline justify-between">
    <div class="flex">
      <PageLogo class="text-2xl" />
    </div>

    <div class="flex space-x-3 text-xl">
      <Hyperlink v-if="!auth.user" href="/login" class="hover:underline">
        <Lang>
          <template #zh>登录</template>
          <template #en>Login</template>
        </Lang>
      </Hyperlink>

      <Hyperlink v-if="!auth.user" href="/register" class="hover:underline">
        <Lang>
          <template #zh>注册</template>
          <template #en>Register</template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        v-if="auth.user"
        href="/create"
        class="flex items-center border border-stone-300 px-3 py-1 dark:border-stone-600"
      >
        <PlusIcon class="h-5 w-5" />
        <div class="px-1"></div>
        <Lang>
          <template #zh> 创作 </template>
          <template #en> Create </template>
        </Lang>
      </Hyperlink>

      <PageUserMenu />
    </div>
  </div>
</template>
