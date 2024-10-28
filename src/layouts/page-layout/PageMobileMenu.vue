<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import TransitionRotateInSlideOut from '../../components/transitions/TransitionRotateInSlideOut.vue'
import Popup from '../../components/utils/Popup.vue'
import { useGlobalTheme } from '../../models/theme'
import PageLogo from './PageLogo.vue'

const lang = useGlobalLang()
const theme = useGlobalTheme()
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
