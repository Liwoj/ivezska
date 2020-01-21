<template>
  <div>
    <site-header />
    <slot name="default" />
    <site-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import MainHero from '../components/MainHero'

import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'

Vue.component('main-hero', MainHero)

export default {
  name: 'default-layout',
  components: {
    SiteHeader,
    SiteFooter
  },
  props: ['page'],
  head() {
    return {
      title: this.page.title
        ? `${this.page.title} - ${this.$siteConfig.title}`
        : this.$siteConfig.title,
      meta: [
        {
          name: 'description',
          content: this.$siteConfig.description
        }
      ]
    }
  }
}
</script>
