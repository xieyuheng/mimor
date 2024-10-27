<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()

const who = 'AuthorEntryMimor'

const { console } = window
</script>

<template>
  <Mimor
    class="h-[32rem] shrink-0 sm:px-3"
    :key="`${entry.mimor['@path']}+${entry.mimor['@updatedAt']}`"
    :src="entry.mimor['@path']"
    :isEditable="state.isSelf"
    :text="entry.newText || entry.mimor.content"
    @update="
      ({ text }) => {
        entry.mimor['@updatedAt'] = Date.now()
        entry.mimor.content = text

        console.log({
          who,
          message: 'update',
          entry,
        })
      }
    "
  />
</template>
