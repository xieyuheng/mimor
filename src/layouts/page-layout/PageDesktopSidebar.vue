<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalAuth } from '../../models/auth'
import { useGlobalTheme } from '../../models/theme'

const lang = useGlobalLang()
const theme = useGlobalTheme()
const auth = useGlobalAuth()

const isFileSystemAccessSupported =
  typeof window.showOpenFilePicker === 'function'
</script>

<template>
  <div
    class="flex h-full flex-col justify-between border-r border-stone-300 dark:border-stone-600"
  >
    <div class="flex flex-col items-start space-y-3">
      <Hyperlink href="/" class="hover:underline">
        <Lang>
          <template #zh>首页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        v-if="auth.user"
        :href="`/@${auth.user.username}`"
        class="hover:underline"
      >
        <Lang>
          <template #zh>我的</template>
          <template #en>Mine</template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        v-if="isFileSystemAccessSupported"
        href="/editor"
        class="hover:underline"
      >
        <Lang>
          <template #zh>编辑器</template>
          <template #en>Editor</template>
        </Lang>
      </Hyperlink>

      <button
        class="flex items-center whitespace-nowrap hover:underline"
        @click="
          theme.name !== 'dark' ? (theme.name = 'dark') : (theme.name = 'light')
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
        class="flex items-center whitespace-nowrap hover:underline"
        @click="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
      >
        <Lang>
          <template #zh>中文/English</template>
          <template #en>English/中文</template>
        </Lang>
      </button>
    </div>

    <div class="flex flex-col">
      <div class="py-3"></div>

      <div class="text-sm text-stone-600 dark:text-stone-400">
        <Lang>
          <template #zh>
            <a
              href="https://xieyuheng.com"
              class="hover:underline"
              target="_blank"
            >
              谢宇恒软件工作室
            </a>
          </template>
          <template #en>
            <a
              href="https://xieyuheng.com"
              class="hover:underline"
              target="_blank"
            >
              Xie Yuheng Software Studio
            </a>
          </template>
        </Lang>
      </div>
    </div>
  </div>
</template>
