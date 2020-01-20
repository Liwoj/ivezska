import './css/index.scss'
import './css/nprogress.scss'
import '@fortawesome/fontawesome-free/css/all.css'


export default ({ router, setHead }) => {
  setHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/'
      }
    ]
  })

  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require('nprogress')
    nprogress.configure({ showSpinner: false })

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }

      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      // Stop progress bar after entering page
      nprogress.done()
    })
  }
}
