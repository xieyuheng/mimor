# Mimor Web Component

[ [Website](https://mimor.xieyuheng.com)
| [Manual](https://readonly.link/manuals/https://mimor.app/contents/manual/en.json)
| [手册](https://readonly.link/manuals/https://mimor.app/contents/manual/zh.json) ]

> Making memory a choice.

## Usage

### Install

#### Using CDN

```html
<script src="https://unpkg.com/mimor"></script>
```

#### Using npm

```shell
npm install mimor
```

And:

```js
import 'mimor'
```

### Web Component

A web component call "x-mimor" will be defined:

```html
<x-mimor
  style="height: 36rem; width: 36rem"
  src="https://mimor.xieyuheng.com/contents/example.mimor"
  theme-name="light"
></x-mimor>
```

Use the following `Props` to config the component:

```typescript
type Props = {
  src: string
  text?: string
  langTag?: 'en' | 'zh'
  themeName?: 'dark' | 'light'
  reducedMotion?: boolean
}
```

It is ok to use lisp-case naming convention in html:

```html
<x-mimor
  src="https://..."
  text="..."
  lang-tag="en"
  theme-name="light"
></x-mimor>
```

## Development

```sh
npm install     # Install dependencies
npm run dev     # Start the dev server
npm run check   # Type check
npm run build   # Build the lib/ and dist/
npm run format  # Format the code
```

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

## License

[GPLv3](LICENSE)
