<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageUserMenu from '../../layouts/page-layout/PageUserMenu.vue'
import { useGlobalAuth } from '../../models/auth'
import EditorSearchbar from './EditorSearchbar.vue'

import { State } from './State'

defineProps<{ state: State }>()

const auth = useGlobalAuth()
</script>

<template>
  <div class="flex justify-between px-3 py-1">
    <div class="flex">
      <Hyperlink href="/" class="font-light decoration-1 hover:underline">
        <Lang>
          <template #zh> 谜墨 </template>
          <template #en> Mimor </template>
        </Lang>
      </Hyperlink>
    </div>

    <div v-if="state.currentWorkspace">
      <EditorSearchbar :state :workspace="state.currentWorkspace" />
    </div>

    <div class="flex space-x-3">
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

      <PageUserMenu v-if="auth.user" class="font-base" />
    </div>
  </div>
</template>
