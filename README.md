# @goto-bus-stop/hexo-renderer-postcss

Minimalist Hexo plugin for rendering PostCSS

## Installation

```
npm install @goto-bus-stop/hexo-renderer-postcss
```

## Usage

Hexo will auto-detect this plugin.

It uses [`postcss-load-config`](https://www.npmjs.com/package/postcss-load-config).
Create a `postcss.config.js` file to configure plugins et cetera.

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {}
  }
}
```

## License

[MIT](./LICENSE)
