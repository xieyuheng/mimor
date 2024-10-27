extract Mimor component to be a web component

rename MimorData to Mimor
remove editor -- let x-editor support mimor
fix user avatar
fix `AuthorInfo` -- img src

# layout

改善巡航方式 -- 为左边显示所有 mimor 的列表做准备
左边显示所有 mimor 的列表，右边显示一个 mimor -- 不再显示列表

# create

[create-mimor] feedback about successfully created
- just jump to author page -- need cache layer
using the create page to also edit existing content

# performance

rate limit on register

# bug

[author] fix contents jump -- `scrollIntoView` should not use `wait` -- `AuthorEntry`

# editor

[editor] handle json file
[editor] EditorSearchMenu -- highlight matching file
[editor] EditorSearchMenu -- up and down to selecte file

# home

改善首页
