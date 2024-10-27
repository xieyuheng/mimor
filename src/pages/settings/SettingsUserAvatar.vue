<script setup lang="ts">
import { onUnmounted, ref, watchEffect } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'
import { stateAvatarUpload } from './stateAvatarUpload'

const props = defineProps<{
  state: State
  username: string
}>()

const avatarInputElement = ref<HTMLInputElement | undefined>(undefined)
const avatarImageSrc = ref<string | undefined>(undefined)

watchEffect(() => {
  if (!props.state.avatarFile) return
  avatarImageSrc.value = URL.createObjectURL(props.state.avatarFile)
})

onUnmounted(() => {
  if (avatarImageSrc.value) {
    URL.revokeObjectURL(avatarImageSrc.value)
  }
})
</script>

<template>
  <div class="flex flex-col">
    <label for="avatar" class="py-2">
      <Lang>
        <template #zh>头像</template>
        <template #en>Avatar</template>
      </Lang>
    </label>

    <input
      class="hidden"
      id="avatar"
      name="avatar"
      ref="avatarInputElement"
      autocomplete="avatar"
      accept="image/png, image/jpeg"
      type="file"
      @change="
        () => {
          if (avatarInputElement) {
            stateAvatarUpload(state, avatarInputElement)
          }
        }
      "
    />

    <label
      for="avatar"
      class="flex h-[16rem] w-[16rem] items-center justify-center overflow-hidden border border-black dark:border-white"
    >
      <img
        v-if="avatarImageSrc"
        :src="avatarImageSrc"
        :alt="`Avatar of ${username}`"
      />
      <img
        v-else-if="state.avatarURL"
        :src="state.avatarURL.href"
        :alt="`Avatar of ${username}`"
      />
      <div v-else class="p-3 text-stone-500">
        <Lang>
          <template #zh>上传图片</template>
          <template #en>Upload image</template>
        </Lang>
      </div>
    </label>
  </div>
</template>
