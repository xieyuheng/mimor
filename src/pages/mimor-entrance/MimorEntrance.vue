<script setup lang="ts">
import { PlayIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = { url: '' }
const lang = useGlobalLang()
const router = useRouter()
const origin = window.location.origin

async function submit() {
  router.push({ path: `/mimors/${form.url}` })
}
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谜墨链接</title>
    <title v-else>Mimor Link</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full w-full flex-col items-center sm:px-16 md:px-24 lg:px-36"
    >
      <div class="flex h-full w-full flex-col justify-center p-3">
        <form @submit.prevent="submit">
          <FormInput name="url" type="url" v-model="form.url">
            <template #label>
              <div class="flex items-end justify-between" title="Docs">
                <Lang class="text-3xl">
                  <template #zh> 谜墨链接 </template>
                  <template #en> Mimor Link </template>
                </Lang>
                <a
                  target="_blank"
                  :href="
                    lang.isZh()
                      ? `https://readonly.link/manuals/${origin}/contents/manual/zh.json/-/usages/mimorlink.md`
                      : `https://readonly.link/manuals/${origin}/contents/manual/en.json/-/usages/mimorlink.md`
                  "
                >
                  <QuestionMarkCircleIcon class="h-6 w-6" />
                </a>
              </div>
            </template>

            <template #input-end>
              <button class="px-4">
                <PlayIcon class="w-6" />
              </button>
            </template>
          </FormInput>
        </form>

        <div class="py-6"></div>
      </div>
    </div>
  </PageLayout>
</template>
