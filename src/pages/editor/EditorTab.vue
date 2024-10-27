<script setup lang="ts">
import EditorTabAudio from './EditorTabAudio.vue'
import EditorTabImage from './EditorTabImage.vue'
import EditorTabMarkdown from './EditorTabMarkdown.vue'
import EditorTabMimor from './EditorTabMimor.vue'
import EditorTabPlaintext from './EditorTabPlaintext.vue'
import EditorTabUnknown from './EditorTabUnknown.vue'
import EditorTabVideo from './EditorTabVideo.vue'
import { State } from './State'
import { Tab } from './Tab'
import { tabMediaType } from './tabMediaType'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <EditorTabMimor v-if="tab.file.name.endsWith('.mimor')" :state :tab />

  <EditorTabImage
    v-else-if="tabMediaType(tab).startsWith('image/')"
    :state
    :tab
  />

  <EditorTabAudio
    v-else-if="tabMediaType(tab).startsWith('audio/')"
    :state
    :tab
  />

  <EditorTabVideo
    v-else-if="tabMediaType(tab).startsWith('video/')"
    :state
    :tab
  />

  <EditorTabMarkdown
    v-else-if="tabMediaType(tab) === 'text/markdown'"
    :state
    :tab
  />

  <EditorTabPlaintext
    v-else-if="tabMediaType(tab).startsWith('text/')"
    :state
    :tab
  />

  <EditorTabUnknown v-else :state :tab />
</template>
