<template>
  <div>
    <site-header />
    <!-- <slot name="hero"></slot> -->
    <section v-if="page.heroTitle" class="hero is-primary" :class="heroClass" :style="heroStyle">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">{{ page.heroTitle }}</h2>
          <h3 class="subtitle">{{ page.heroSubtitle }}</h3>
        </div>
      </div>
    </section>

    <slot name="default" />

    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
// import photo from './images/jaderka.jpg'
import photo from '@/pages/images/jaderka.jpg'

export default {
  name: 'default-layout',
  components: {
    SiteHeader,
    SiteFooter
  },
  props: ['page'],
  computed: {
    heroStyle() {
      return this.page.showHeroImage ? `background: url('${photo}') no-repeat center center; background-size: cover;` : ''
    },
    heroClass() {
      let cl = [];
      !this.page.showHeroImage && cl.push('is-bold');
      cl.push(this.page.heroSize ? this.page.heroSize : 'is-medium')
      return cl
    }
  },
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .05s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
