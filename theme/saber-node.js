exports.chainWebpack = function (config) {

  // use "vue-svg-inline-loader" (https://github.com/oliverfindl/vue-svg-inline-loade) to inline SVG's
  config.module
    .rule("vue")
    .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({ addTitle: true })
}
