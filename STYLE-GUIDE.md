---
title: Style Guide
---

**In general, observe the style of existing code and respect it.**

# No shallow abstraction

No abstraction over `fetch`, just use `fetch`.

# Call watch in async function

We should not call `watch` in async function,
unless the target is a global variable,
otherwise memory leak.

- See: https://vuejs.org/guide/essentials/watchers.html#stopping-a-watcher
