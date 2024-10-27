<script setup lang="ts">
import { XNode } from '@xieyuheng/x-node'
import { Program } from '../Program'
import { State } from '../State'
import Node from './Node.vue'

defineProps<{
  state: State
  program: Program
  nodes: Array<XNode>
}>()
</script>

<template>
  <span
    ><span v-for="(node, index) of nodes" :key="index"
      ><Node :state :program :node /></span
  ></span>
</template>
