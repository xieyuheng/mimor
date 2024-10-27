---
title: Embed in HTML
---

We can embed mimor in HTML by `<iframe>`.

Format:

```html
<iframe src="https://mimor.app/mimors/:link"></iframe>
```

Where `:link` is a link to a `.mimor` file.

Take our testing mimorlink as example:

`https://mimor.app/contents/examples/debug.mimor`

The `<iframe>` can be:

```html
<iframe
  src="https://mimor.app/mimors/https://mimor.app/contents/examples/debug.mimor"
  style="width: 36rem; height: 36rem;"
  allowfullscreen
></iframe>
```
