const { join } = require('path')

const plugins = [
  require('autoprefixer')()
]

 // inspiration: https://github.com/saberland/saber-theme-tailsaw/blob/master/postcss.config.js
 // using PurgeCSS only in production is risky but using it on DEV is terrible
if(process.env.NODE_ENV === 'production'){
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: [
        join(__dirname, 'theme/**/*.vue'),
        join(__dirname, 'pages/**/*.vue'),
        join(__dirname, 'pages/**/*.js'),
        join(__dirname, 'pages/**/*.md')
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ''
        )
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        )
      },
      whitelist: ['blockquote', 'body', 'html'],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    })
  )
}

module.exports = {
  plugins: plugins
}
