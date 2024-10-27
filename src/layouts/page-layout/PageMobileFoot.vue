<script setup lang="ts">
import {
  Cog8ToothIcon,
  HomeIcon,
  PencilIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalAuth } from '../../models/auth'
import PageMobileMenu from './PageMobileMenu.vue'

const auth = useGlobalAuth()
</script>

<template>
  <div
    class="flex w-full justify-between bg-white py-1 dark:bg-stone-900 dark:text-white"
  >
    <Hyperlink
      href="/"
      :class="{
        'animate-jump-sm text-orange-500 dark:text-orange-300':
          $route.path === '/',
      }"
      class="flex w-full flex-col items-center space-y-1"
    >
      <HomeIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </Hyperlink>

    <Hyperlink
      v-if="auth.user"
      :href="`/@${auth.user.username}`"
      :class="{
        'animate-jump-sm text-orange-500 dark:text-orange-300':
          $route.path === `/@${auth.user.username}`,
      }"
      class="flex w-full flex-col items-center space-y-1"
    >
      <PencilIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>我的</template>
        <template #en>Mine</template>
      </Lang>
    </Hyperlink>

    <div class="flex w-full justify-center">
      <PageMobileMenu />
    </div>

    <Hyperlink
      v-if="!auth.user"
      href="/login"
      :class="{
        'animate-jump-sm text-orange-500 dark:text-orange-300':
          $route.path === '/login',
      }"
      class="flex w-full flex-col items-center space-y-1"
    >
      <UserIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>登录</template>
        <template #en>Login</template>
      </Lang>
    </Hyperlink>

    <Hyperlink
      v-if="auth.user"
      href="/settings"
      :class="{
        'animate-jump-sm text-orange-500 dark:text-orange-300':
          $route.path === '/settings',
      }"
      class="flex w-full flex-col items-center space-y-1"
    >
      <Cog8ToothIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>设置</template>
        <template #en>Settings</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
