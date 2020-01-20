<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
          <div class="navbar-brand">
              <a href="/" class="navbar-item">
                  {{ $siteConfig.author }}
              </a>
              <a role="button" class="navbar-burger burger" :class="{ 'is-active': menuVisible }" aria-label="menu" aria-expanded="false" @click="menuVisible = !menuVisible">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>
          <div class="navbar-menu" :class="{ 'is-active': menuVisible }">
            <div class="navbar-start">
              <saber-link v-for="route in nav" :key="route.link" :to="route.link" class="navbar-item">
                <span>
                  <span class="icon" v-if="route.iconClass">
                    <i :class="route.iconClass"></i>
                  </span>
                  {{ route.title }}
                </span>
              </saber-link>
            </div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
      nav: [
        { title: 'Home', link: '/', iconClass: 'fas fa-home' },
        { title: 'Publications', link: '/publications.html', iconClass: 'fas fa-book' },
        { title: 'Conferences', link: '/conferences.html', iconClass: 'fas fa-comments' }
      ]
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
