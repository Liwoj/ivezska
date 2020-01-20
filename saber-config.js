// @ts-check
/** @type {import('saber').SaberConfig} */

const config = {
  siteConfig: {
    title: 'Iveta semorádová',
    description: 'Iveta semorádová',
    lang: 'en',
    author: 'Iveta Semorádová'
  },
  theme: './theme',
  themeConfig: {
  },
  permalinks: {
    page: '/:slug.html'
  },
  build: {
    extractCSS: true
  },
  plugins: [
    {
      resolve: './plugins/criticalCSS.js'
    }
  ]
}

module.exports = config
