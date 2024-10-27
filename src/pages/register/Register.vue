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
import { register } from '../../models/auth/register'

const router = useRouter()
const lang = useGlobalLang()
const auth = useGlobalAuth()

const form = useForm({
  username: '',
  name: '',
  password: '',
  passwordRepeated: '',
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
    <title v-if="lang.isZh()">注册 | 谜墨</title>
    <title v-else>Register | Mimor</title>
  </Head>

  <PageLayout>
    <div class="flex w-full flex-col items-center sm:pr-28">
      <div
        class="flex w-full max-w-[32rem] flex-col space-y-3 p-3 text-xl sm:p-6"
      >
        <div class="flex items-baseline">
          <div class="text-2xl">
            <Lang>
              <template #zh> 注册 </template>
              <template #en> Register </template>
            </Lang>
          </div>
        </div>

        <form
          class="flex w-auto flex-col space-y-2 text-xl"
          @submit.prevent="
            formSubmit(form, $event, async () => {
              if (form.values.passwordRepeated !== form.values.password) {
                report.errorMessage = lang.isZh()
                  ? '所重复的密码与原密码不匹配。'
                  : 'The repeated password does not mismatch the password.'
                return
              }

              await register(form.values, report)
              if (report.errorMessage) return

              await loginByPassword(form.values, report)
              if (report.errorMessage) return

              $router.replace({ path: `/` })
            })
          "
        >
          <FormInput name="username" autocomplete="username" required>
            <template #label>
              <Lang>
                <template #zh>用户名</template>
                <template #en>Username</template>
              </Lang>
            </template>
          </FormInput>

          <FormInput name="name" autocomplete="name" required>
            <template #label>
              <Lang>
                <template #zh>名字</template>
                <template #en>Name</template>
              </Lang>
            </template>
          </FormInput>

          <FormInput name="password" type="password" required>
            <template #label>
              <Lang>
                <template #zh>密码</template>
                <template #en>Password</template>
              </Lang>
            </template>
          </FormInput>

          <FormInput name="passwordRepeated" type="password" required>
            <template #label>
              <Lang>
                <template #zh>重复密码</template>
                <template #en>Repeat Password</template>
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
              <template #zh>注册</template>
              <template #en>Register</template>
            </Lang>
          </FormButton>

          <div class="flex justify-end">
            <Lang class="text-xl">
              <template #zh>
                已注册？
                <Hyperlink href="/login" class="underline"> 登录 </Hyperlink>
              </template>
              <template #en>
                Already registered?
                <Hyperlink href="/login" class="underline"> Login</Hyperlink>
              </template>
            </Lang>
          </div>
        </form>
      </div>
    </div>
  </PageLayout>
</template>
