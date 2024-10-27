import { Component } from 'vue'

export type Route =
  | { tag: string; kind: 'Card'; component: Component }
  | { tag: string; kind: 'Element'; component: Component }
