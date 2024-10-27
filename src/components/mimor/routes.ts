import { Route } from './Route'
import BackCover from './cards/BackCover.vue'
import Cloze from './cards/Cloze.vue'
import FrontCover from './cards/FrontCover.vue'
import Question from './cards/Question.vue'
import Code from './elements/Code.vue'

export const routes: Array<Route> = [
  { tag: 'front-cover', kind: 'Card', component: FrontCover },
  { tag: 'back-cover', kind: 'Card', component: BackCover },
  { tag: 'question', kind: 'Card', component: Question },
  { tag: 'cloze', kind: 'Card', component: Cloze },
  { tag: 'code', kind: 'Element', component: Code },
]
