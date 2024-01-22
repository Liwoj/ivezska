## Tools in use

- [Saber](https://saber.land) for static HTML generation, Markdown integration and more...
- [Vue](https://vuejs.org/) as view layer...
- [Bulma](https://bulma.io/) for styling...

### Minor tools

- using [postcss-purgecss](https://github.com/FullHuman/postcss-purgecss) to strip down unused CSS (especially Bulma and FontAwesome)
- using [saber-plugin-critical](https://github.com/egoist/saber-plugin-critical) to inline critical-path CSS into HTML pages (so the browser can render page without waiting for CSS bundle download)
  - plugin is outdated so i'm using local version - see `/plugins/criticalCSS.js` (my PR will be hopefully merged soon...)
- using [nprogress](https://github.com/rstacruz/nprogress) to show loading progress on route change

## Scripts

### `yarn run dev`

Run dev server at `http://localhost:3000`

### `yarn run build`

Build your website to `public` folder which you can deploy to GitHub Pages, Netlify or wherever you want.

### `yarn run serve`

Serve builded site (`public` folder created by `npm run build`) at `http://localhost:3030`
