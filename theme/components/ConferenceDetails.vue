<template>
  <div class="column is-12-tablet">
      <div class="card">
        <div class="card-content">
          <p class="title is-5">
            <a :href="conference.link">
              {{ conference.title }}
            </a>
          </p>
          <div class="subtitle is-5">
            <div></div>
            <div v-if="conference.talk" class="subtitle is-5">
              <span class="tag is-primary">
                Talk
              </span>
              <a :href="conference.talkLink" v-if="conference.talkLink">{{ conference.talk }}</a>
              <span v-else> {{ conference.talk }}</span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item" style="flex-wrap: wrap">
            {{ date }}
            <span class="tag is-danger has-margin-left-7" v-if="isUpcoming">
              Upcoming {{ distanace }}
            </span>
            <template v-else>
              ({{ distanace }})
            </template>
          </div>
          <p class="card-footer-item">
            {{ conference.place }}
          </p>
        </footer>
      </div>
  </div>
</template>

<script>
import format from 'date-fns/format';
import isSameMonth from 'date-fns/isSameMonth'
import isSameYear from 'date-fns/isSameYear'
import isFuture from 'date-fns/isFuture'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default {
  data() {
    return {
    }
  },
  props: {
    conference: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      if(this.conference.dateEnd) {
        let startFormat = 'MMMM do'
        let endFormat = 'do yyyy'

        !isSameMonth(this.conference.dateStart, this.conference.dateEnd) && (endFormat = 'MMMM ' + endFormat)
        !isSameYear(this.conference.dateStart, this.conference.dateEnd) && (startFormat = startFormat + ' yyyy')

        return `${format(this.conference.dateStart, startFormat)} - ${format(this.conference.dateEnd, endFormat)}`
      } else {
        return format(this.conference.dateStart, 'MMMM do yyyy')
      }
    },
    isUpcoming() {
      return isFuture(this.conference.dateStart)
    },
    distanace() {
      return formatDistanceToNow(this.conference.dateStart, { addSuffix: true })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
