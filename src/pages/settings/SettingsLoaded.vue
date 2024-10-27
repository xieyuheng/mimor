<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import SettingsUserAvatar from './SettingsUserAvatar.vue'
import { State } from './State'
import { stateSave } from './stateSave'

defineProps<{
  state: State
}>()

const lang = useGlobalLang()

const form = useForm({
  name: '',
})

const report = reactive({
  errorMessage: '',
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">设置 | 谜墨</title>
      <title v-else>Settings | Mimor</title>
    </Head>

    <div class="flex w-full flex-col items-center sm:pr-28">
      <div
        class="flex w-full max-w-[32rem] flex-col space-y-6 p-3 text-xl sm:p-6"
      >
        <form
          v-if="state.user"
          class="flex flex-col space-y-2"
          @submit.prevent="
            formSubmit(form, $event, async () => {
              if (state.user) {
                state.user.name = form.values.name
                await stateSave(state, report)
              }
            })
          "
        >
          <div class="flex items-baseline">
            <div class="text-2xl">
              <Lang>
                <template #zh> 用户设置 </template>
                <template #en> User Settings </template>
              </Lang>
            </div>
          </div>

          <FormInput
            name="username"
            autocomplete="username"
            required
            disabled
            spellcheck="false"
            :value="state.user.username"
          >
            <template #label>
              <Lang>
                <template #zh>用户名</template>
                <template #en>Username</template>
              </Lang>
            </template>
          </FormInput>

          <FormInput
            name="name"
            autocomplete="name"
            required
            spellcheck="false"
            :value="state.user.name"
          >
            <template #label>
              <Lang>
                <template #zh>名字</template>
                <template #en>Name</template>
              </Lang>
            </template>
          </FormInput>

          <SettingsUserAvatar :state :username="state.user.username" />

          <div v-if="report.errorMessage">
            <div class="mt-3 border-2 border-red-300 p-2 text-base">
              {{ report.errorMessage }}
            </div>
          </div>

          <FormDivider />

          <FormButton :disabled="form.processing">
            <Lang>
              <template #zh>保存</template>
              <template #en>Save</template>
            </Lang>
          </FormButton>
        </form>
      </div>
    </div>
  </PageLayout>
</template>
