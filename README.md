# Mimor

[ [Webwite](https://mimor.app)
| [Manual](https://readonly.link/manuals/https://mimor.app/contents/manual/en.json)
| [手册](https://readonly.link/manuals/https://mimor.app/contents/manual/zh.json) ]

Making memory a choice.

## Development

```sh
npm install     # Install dependencies
npm run dev     # Start the dev server
npm run check   # Type check
npm run format  # Format the code
```

We use [FiDB](https://github.com/fidb-official/fidb) for our backend API.

To start the HTTP API server using the example [`database`](database), run:

```sh
npm run api     # Start the backend server
```

Notes:

- Node.js version must
  be >= [20.1](https://nodejs.org/en/blog/release/v20.1.0)
  or >= [18.17.0](https://nodejs.org/en/blog/release/v18.17.0).
  - For the `recursive` option to `readdir` and `opendir`.
- To work with the frontend dev server, the backend API port should be `5108` (the default port of FiDB).
- The example username are `xieyuheng` and `cicada-lang`.
- The example passwords are all `123456`.

If you do not want to start local backend using `npm run api`,
you can use the production backend during development:

```sh
npm run dev:with-prod-backend  # Start the dev server with the production backend
```

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

## License

[GPLv3](LICENSE)
