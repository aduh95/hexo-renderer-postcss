const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

function renderPostCSS (data) {
  return postcssrc({})
    .then(({ plugins, options }) => postcss(plugins).process(data, options))
    .then((result) => result.css)
}

hexo.extend.filter.register('after_render:css', renderPostCSS)
