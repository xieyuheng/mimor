---
title: 嵌入 HTML
---

mimor 也可以以 `<iframe>` 的方式嵌入在 HTML 中。

格式如下：

```html
<iframe src="https://mimor.app/mimors/:link"></iframe>
```

其中 `:link` 是一个 `.mimor` 文件链接。

比如我们测试用的一个谜墨链接是：

`https://mimor.app/contents/examples/sisuo.mimor`

那么 `<iframe>` 可以写成：

```html
<iframe
  src="https://mimor.app/mimors/https://mimor.app/contents/examples/sisuo.mimor"
  style="width: 36rem; height: 36rem;"
  allowfullscreen
></iframe>
```
