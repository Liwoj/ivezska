---
title: Publications
layout: default
heroTitle: "My publications"
heroSize: is-small
---
<div class="container content">
  <ol reversed>
    <li v-for="pub in publications">
      <b>{{ pub.title }}</b>
        <ul>
          <li>Authors: {{ pub.authors }}</li>
          <li>{{ pub.issue }}</li>
          <li>arXiv: <a :href="'https://arxiv.org/abs/' + pub.arxiv">{{ pub.arxiv }}</a></li>
          <li>DOI: <a :href="'https://dx.doi.org/' + pub.doi">{{ pub.doi }}</a></li>
          <li v-if="pub.note" v-html="pub.note"></li>
        </ul>
    </li>
  </ol>

### Theses

* [Quantum Mechanics of Klein-Gordon equation](https://physics.fjfi.cvut.cz/publications/mf/2016/dp_mf_16_Semoradova.pdf)
  * Master Thesis, supervisor Miloslav Znojil
* [Two-dimensional Lie groups and their Poisson brackets](https://physics.fjfi.cvut.cz/publications/mf/2014/bp_mf_14_Semoradova.pdf)
  * Bachelor Thesis (in Czech only), supervisor Ladislav Hlavatý

</div>

<script>
import publications from './_publications.json'
export default {
  data() {
    return {
      publications: publications
    }
  }
}
</script>

<style scoped>
ol > li {
  margin-top: 1rem;
}

ul {
  margin-top: 0.25rem;
}
</style>
