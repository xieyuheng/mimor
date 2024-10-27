import { Translation } from './Translation'
import { translateColorName } from './translateColorName'

export const translations: Array<Translation> = [
  {
    tag: { from: '元数据', to: 'metadata' },
    attributes: [
      { from: '主题色', to: 'theme-color', value: translateColorName },
      { from: '关键词', to: 'keywords' },
    ],
  },

  { tag: { from: '封面', to: 'front-cover' } },

  { tag: { from: '封底', to: 'back-cover' } },

  { tag: { from: '问', to: 'question' } },

  { tag: { from: '答', to: 'answer' } },

  { tag: { from: '填空', to: 'cloze' } },

  { tag: { from: '空', to: 'blank' } },

  { tag: { from: '代码', to: 'code' } },
]
