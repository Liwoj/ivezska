<template>
  <section class="hero" :class="heroClass" :style="heroStyle">
    <div class="hero-body">
      <div class="container">
        <slot>
          <h2 v-if="title" class="title">{{ title }}</h2>
          <h3 v-if="subtitle" class="subtitle">{{ subtitle }}</h3>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-hero',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    size: {
      type: String
    },
    additionalClasses: {
      type: Array,
      default: function() {
        return ['is-primary', 'is-bold']
      }
    },
    image: {
      type: String
    }
  },
  computed: {
    heroStyle() {
      return this.image ? `background: url('${require('@/images/'+ this.image)}') no-repeat center center; background-size: cover;` : ''
    },
    heroClass() {
      return [
        this.size,
        ...(this.additionalClasses || [])
      ]
    }
  }
};
</script>
