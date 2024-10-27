<script setup lang="ts">
import { Base64 } from 'js-base64'
import { reactive } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Mimor from '../../components/mimor/Mimor.vue'

const lang = useGlobalLang()

const texts = reactive({
  zh: `\
<元数据 主题色="橙" />

<问>
  二次方程 a⋅x⋅x + b⋅x + c 的求根公式是什么？

  <答>
    2⋅a 分之 -b 加减根号下的 b 方减 4⋅a⋅c。

    <代码>
      -b ± √(b⋅b - 4⋅a⋅c)
     --------------------
             2⋅a
    </代码>
  </答>
</问>

<填空>
  君不见，黄河之水天上来，<空>奔流到海不复回</空>。
</填空>

<填空>
  君不见，高堂明镜悲白发，<空>朝如青丝暮成雪</空>。
</填空>
`,
  en: `\
<metadata theme-color="orange" />

<question>
  What is a bug?

  <answer>
    A bug is the difference between
    the expected behavior of the program
    and the observed behavior of the program.
  </answer>
</question>

<question>
  How to debug?

  <answer>
    (1) Clearly express the observed behavior.

    (2) Clearly express the expected behavior.

    (3) Guess what causes the difference and put the guess into test.

    Don't panic. Be a scientist. Use logic.
  </answer>
</question>
`,
})
</script>

<template>
  <div
    class="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-3 sm:space-y-0"
  >
    <div class="flex flex-col space-y-2 sm:w-1/2">
      <Lang class="text-balance text-xl">
        <template #zh>用 &lt;问&gt; 与 &lt;答&gt; 的形式来记笔记。</template>
        <template #en
          >Taking notes in the form of &lt;question&gt; and
          &lt;answer&gt;.</template
        >
      </Lang>

      <Lang class="text-xl">
        <template #zh>
          <textarea
            class="h-[30rem] w-full border border-black p-3 font-mono text-lg ring-orange-500 focus:border-orange-500 focus:outline-none focus:ring-1 dark:border-white dark:bg-stone-900 dark:text-white sm:h-[32rem]"
            v-model="texts.zh"
          ></textarea>
        </template>
        <template #en>
          <textarea
            class="h-[30rem] w-full border border-black p-3 font-mono text-lg ring-orange-500 focus:border-orange-500 focus:outline-none focus:ring-1 dark:border-white dark:bg-stone-900 dark:text-white sm:h-[32rem]"
            v-model="texts.en"
          ></textarea>
        </template>
      </Lang>
    </div>

    <div class="flex flex-col space-y-2 sm:w-1/2">
      <Lang class="text-balance text-xl">
        <template #zh>渲染成卡片来回顾所记。</template>
        <template #en>Rendering to cards to recall your memory.</template>
      </Lang>

      <Mimor
        class="h-[30rem] sm:h-[32rem]"
        :isRecall="true"
        :reducedMotion="true"
        :src="`data:text/plain;base64,${Base64.encode(
          lang.isZh() ? texts.zh : texts.en,
        )}`"
        :text="lang.isZh() ? texts.zh : texts.en"
      />
    </div>
  </div>
</template>
