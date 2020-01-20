<template>
  <div class="container section">
    <div class="columns is-multiline">
      <ConferenceDetails v-for="conference in upcoming" :conference="conference" :key="conference.title" />
    </div>
    <hr class="has-margin-1">
    <div class="columns is-multiline">
      <ConferenceDetails v-for="conference in attended" :conference="conference" :key="conference.title" />
    </div>
    <a @click.stop.prevent="showMore = !showMore" class="button is-secondary">Show {{ showMore ? 'less...' : 'more...' }}</a>
  </div>
</template>
<script>
import isFuture from 'date-fns/isFuture'
import compareAsc from 'date-fns/compareAsc'
import differenceInYears from 'date-fns/differenceInYears'

import conferencesData from './_conferences.json'
import ConferenceDetails from '../theme/components/ConferenceDetails'

export const data = {
  title: 'Conferences and schools',
  layout: 'default',
  heroTitle: "Conferences and schools",
  heroSize: 'is-small'
}

export default {
  components: {
    ConferenceDetails
  },
  data() {
    return {
      conferences: [],
      showMore: false
    }
  },
  created() {
    this.conferences = conferencesData.map(c => {
      c.dateStart = new Date(c.dateStart)
      c.dateEnd = c.dateEnd ? new Date(c.dateEnd) : null
      return c
    })
  },
  computed: {
    upcoming() {
      return this.conferences.filter(c => isFuture(c.dateStart)).sort((x, y) => compareAsc(x.dateStart, y.dateStart))
    },
    attended() {
      return this.conferences.filter(c => !isFuture(c.dateStart) && (this.showMore || differenceInYears(Date.now(), c.dateStart) <= 1))
        .sort((x, y) => compareAsc(y.dateStart, x.dateStart))
    }
  }
}
</script>
