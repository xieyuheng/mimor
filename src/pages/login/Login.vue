<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalAuth } from '../../models/auth'
import { loginByPassword } from '../../models/auth/loginByPassword'

const router = useRouter()
const auth = useGlobalAuth()
const lang = useGlobalLang()

const form = useForm({
  username: '',
  password: '',
})

const report = reactive({
  errorMessage: '',
})

watch(
  () => auth.user,
  (value) => {
    if (value !== undefined) {
      router.replace({ path: '/' })
    }
  },
  { immediate: true },
)
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">登录 | 谜墨</title>
    <title v-else>Login | Mimor</title>
  </Head>

  <PageLayout>
    <div class="flex w-full flex-col items-center sm:pr-28">
      <div
        class="flex w-full max-w-[32rem] flex-col space-y-3 p-3 text-xl sm:p-6"
      >
        <div class="flex items-baseline">
          <div class="text-2xl">
            <Lang>
              <template #zh> 登录 </template>
              <template #en> Login </template>
            </Lang>
          </div>
        </div>

        <form
          class="flex w-auto flex-col space-y-2 text-xl"
          @submit.prevent="
            formSubmit(form, $event, async () => {
              await loginByPassword(form.values, report)
              if (report.errorMessage) return

              $router.replace({ path: `/` })
            })
          "
        >
          <FormInput name="username" autocomplete="name" required>
            <template #label>
              <Lang>
                <template #zh>用户名</template>
                <template #en>Username</template>
              </Lang>
            </template>
          </FormInput>

          <FormInput
            name="password"
            type="password"
            autocomplete="new-password"
            required
          >
            <template #label>
              <Lang>
                <template #zh>密码</template>
                <template #en>Password</template>
              </Lang>
            </template>
          </FormInput>

          <div v-if="report.errorMessage">
            <div class="mt-3 border-2 border-red-300 p-2 text-base">
              {{ report.errorMessage }}
            </div>
          </div>

          <FormDivider />

          <FormButton :disabled="form.processing">
            <Lang>
              <template #zh>登录</template>
              <template #en>Login</template>
            </Lang>
          </FormButton>

          <div class="flex justify-end">
            <div class="text-xl">
              <Lang>
                <template #zh>
                  尚未
                  <Hyperlink href="/register" class="underline">注册</Hyperlink
                  >？
                </template>
                <template #en>
                  Not yet
                  <Hyperlink href="/register" class="underline"
                    >registered</Hyperlink
                  >
                  ?
                </template>
              </Lang>
            </div>
          </div>
        </form>
      </div>
    </div>
  </PageLayout>
</template>
