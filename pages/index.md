---
layout: default
heroTitle: "Hello, my name is Iveta Semorádová"
heroSubtitle: "I ❤️ math! Welcome to the site devoted to my scientific activities..."
heroSize: "is-medium"
showHeroImage: true
---
<!-- <template v-slot:hero> -->
<!-- </template> -->

<section class="hero is-small is-light">
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

<div class="container content section">

## Scientific interests

* Non-self-adjoint operators in quantum mechanics
* Spectral approximation
* PT symmetry
* Mathematical foundations of quantum theory

## Hobbies

* Fireshow 🔥
* Hiking ⛰️ and travel ✈️
* Classical guitar 🎸
* Dance 💃

<!-- <logo/> -->
</div>

<script>
  import logo from './logo.vue'

  export default {
    components: {
      logo: logo
    },
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
        ]
      }
    },
  }
</script>
