---
layout: default
---
<main-hero
  title="Hello, my name is Iveta Semorádová"
  subtitle="I ❤️ math! Welcome to the site devoted to my scientific activities..."
/>

<section class="hero">
  <div class="hero-body">
    <div class="container">
      <div class="title is-4 has-text-centered">Currently, I am...</div>
      <div class="columns is-multiline is-centered">
        <div v-for="i in iam" :key="i.text" class="column is-4 has-text-centered">
          <div class="icon is-large">
            <i class="fas fa-3x" :class="i.icon"></i>
          </div>
          <p v-html="i.text"></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <div class="title is-4 has-text-centered">Scientific interests</div>
      <div class="columns is-multiline is-centered">
        <div v-for="i in sciInterests" :key="i.text" class="column is-3 has-text-centered">
          <div class="icon">
            <i class="fas fa-2x" :class="i.icon"></i>
          </div>
          <p v-html="i.text"></p>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
export default {
  data() {
    return {
      iam: [
        {
          text: 'Doctoral student of Mathematical Engineering at <a href="http://www.fjfi.cvut.cz/en/">Faculty of Nuclear Sciences and Physical Engineering</a> at Czech Technical University in Prague',
          icon: 'fa-university'
        },
        {
          text: 'Spending last year of my PhD at <a href="http://web.am.qub.ac.uk/wp/msrc/">Mathematical Science research centre</a>, Queens University Belfast, United Kingdom',
          icon: 'fa-crown'
        },
        {
          text: 'Research assistant at <a href="http://gemma.ujf.cas.cz/">Department of Theoretical Physics, Nuclear Physics Institute, The Academy of Sciences of the Czech Republic</a>',
          icon: 'fa-flask'
        }
      ],
      sciInterests: [
        {
          text: 'Non-self-adjoint operators in quantum mechanics',
          icon: 'fa-square-root-alt'
        },
        {
          text: 'Spectral approximation',
          icon: 'fa-calculator'
        },
        {
          text: 'PT symmetry',
          icon: 'fa-yin-yang'
        },
        {
          text: 'Mathematical foundations of quantum theory',
          icon: 'fa-atom'
        }
      ]
    }
  },
}
</script>
