// @ts-check
/** @type {import('saber').SaberConfig} */

const config = {
  siteConfig: {
    title: 'Iveta Semorádová',
    description: 'Iveta Semorádová',
    lang: 'en',
    author: 'Iveta Semorádová',
    url: 'https://ivezska.netlify.com/'

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
    },
    {
      resolve: 'saber-plugin-sitemap'
    }
  ]
}

module.exports = config
