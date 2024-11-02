<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../models/theme'
import Logo from './Logo.vue'

const lang = useGlobalLang()
const theme = useGlobalTheme()
</script>

<template>
  <div class="flex w-full items-baseline justify-between">
    <div class="flex">
      <Logo />
    </div>

    <div class="flex space-x-3">
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

      <a
        target="_blank"
        href="https://github.com/xieyuheng/mimor"
        class="flex items-center whitespace-nowrap hover:underline"
      >
        <Lang>
          <template #zh>源代码</template>
          <template #en>Source Code</template>
        </Lang>
      </a>
    </div>
  </div>
</template>
