<script setup lang="ts">
import { XElement, isElement } from '@xieyuheng/x-node'
import { reactive } from 'vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorInputRemembering from '../MimorInputRemembering.vue'
import MimorTransitionCard from '../MimorTransitionCard.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import Nodes from '../nodes/Nodes.vue'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()

const remembering = reactive({ revealed: false })
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between text-black dark:text-white"
    :class="[state.theme.bg(300)]"
  >
    <MimorHeadProgram :state :program />

    <MimorTransitionCard :state :program>
      <span
        v-for="(child, index) of element.children"
        :key="index"
        class="text-2xl"
      >
        <!-- the x spacing is needed for english text -->
        <span
          v-if="isElement(child) && child.tag === 'blank'"
          :class="[
            state.theme.name === 'yellow'
              ? 'text-purple-600 dark:text-purple-300'
              : state.theme.name === 'white'
                ? 'text-yellow-600 dark:text-yellow-300'
                : state.theme.name === 'stone'
                  ? 'text-yellow-500 dark:text-yellow-400'
                  : state.theme.name === 'red'
                    ? 'text-sky-500 dark:text-sky-300'
                    : state.theme.name === 'orange'
                      ? 'text-indigo-500 dark:text-indigo-300'
                      : state.theme.name === 'green'
                        ? 'text-purple-500 dark:text-purple-300'
                        : 'text-yellow-200',
          ]"
        >
          <Nodes
            v-if="remembering.revealed"
            :state
            :program
            :nodes="child.children"
            class="font-bold"
          />
          <span v-else class="font-bold">____</span>
        </span>

        <Node v-else :state :program :node="child" />
      </span>
    </MimorTransitionCard>

    <div class="flex w-full pb-1.5">
      <MimorInputRemembering :state :program :remembering />
    </div>
  </div>
</template>
