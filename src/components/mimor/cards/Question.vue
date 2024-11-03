<script setup lang="ts">
import { XElement, isElement } from '@xieyuheng/x-node'
import { reactive } from 'vue'
import TransitionReveal from '../../transitions/TransitionReveal.vue'
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
      <div v-for="(child, index) of element.children" :key="index">
        <div v-if="isElement(child) && child.tag === 'answer'" class="py-2">
          <TransitionReveal>
            <Nodes
              v-if="remembering.revealed"
              :state
              :program
              :nodes="child.children"
              class="py-3 text-3xl"
            />
          </TransitionReveal>
        </div>
        <Node
          v-else
          :state
          :program
          :node="child"
          :class="[
            remembering.revealed ? 'text-xl' : 'text-2xl',
            remembering.revealed && 'text-stone-700 dark:text-stone-200',
          ]"
        />
      </div>
    </MimorTransitionCard>

    <div class="flex w-full pb-1.5">
      <MimorInputRemembering :state :program :remembering />
    </div>
  </div>
</template>
