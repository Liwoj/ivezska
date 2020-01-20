// Source https://github.com/egoist/saber-plugin-critical - updated for current Saber version
const path = require('path')

const ID = 'critical'
exports.name = ID

exports.apply = api => {
  if (api.dev) return

  api.hooks.beforeRun.tap(ID, () => {
    api.log.info(
      '[critical] Setting `build.extractCSS` to true in Saber config'
    )
    api.config.build.extractCSS = true
  })

  api.hooks.afterGenerate.tapPromise(ID, async () => {
    const critical = require('critical')

    const files = await api.utils.glob('**/*.html', {
      cwd: api.resolveOutDir(),
      absolute: false
    })

    await Promise.all(
      files.map(file => {
        api.log.info(`Critical CSS - Transforming '${file}'`)
        return critical
          .generate({
            inline: true,
            src: file,
            base: api.resolveOutDir()
          })
          .then(html => {
            return api.utils.fs.outputFile(path.join(api.resolveOutDir(), file), html)
          })
      })
    )
  })
}
