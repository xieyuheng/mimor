---
title: <问>
---

问答卡片的语法是 `<问>` 里面一个 `<答>`。

- 注意，第一行使用了 `<元数据>` 来设置 [`主题色`](../metadata/theme-color.md)。

比如：

```xml
<元数据 主题色="红" />

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

<问>
  下面这首诗，是哪首唐诗的英文翻译？

  I asked the boy beneath the pines;
  He said: the Master's gone alone;
  herb-gathering somewhere on the mount;
  cloud-hidden, whereabouts unknown.

  <答>
    《寻隐者不遇》贾岛，译者林语堂。
  </答>
</问>
```

效果如下：

- 点击 `</>` 按钮可以查看源代码。

<mimor src="question-example-1.mimor" />
