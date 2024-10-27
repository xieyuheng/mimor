---
title: <question>
---

The syntax of question and answer card is a `<question>` with a `<answer>` inside.

- Note that, in the first line we used `<metadata>` to set the [`theme-color`](../metadata/theme-color.md).

For example:

```xml
<metadata theme-color="red" />

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
```

Result:

- Click the `</>` button can view source code.

<mimor src="question-example-1.mimor" />
