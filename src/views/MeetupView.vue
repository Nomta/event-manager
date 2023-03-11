<template>
  <div class="page-meetup">
    <div v-if="meetup">{{ meetup.title }}</div>
    <UiContainer v-else-if="loading">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>
    <UiContainer v-else-if="error">
      <UiAlert>{{ error }}</UiAlert>
    </UiContainer>
  </div>
</template>

<script>
import UiContainer from '@/components/ui/UiContainer'
import UiAlert from '@/components/ui/UiAlert'

const meetups = [
  { id: 2, title: 'Демо-Митап', },
  { id: 1, title: 'MSK VUE.JS MEETUP #1', },
]

const TESTING_TIMEOUT = 500

export default {
  name: 'MeetupView',

  props: {
    meetupId: {
      type: Number,
      default: 1
    },
  },

  data() {
    return {
      meetup: null,
      error: null,
      loading: false,
    }
  },

  mounted() {
    this.meetup = null
    this.error = null
    this.loading = true

    fetchMeetupById(this.meetupId)
      .then((meetup) => this.meetup = meetup)
      .catch((error) => this.error = error)
      .finally(() => this.loading = false)
  }
}

/**
 * Получение данных митапа по Meetup ID с API
 * @param {Number} meetupId
 * @return {Promise<Object>} - Данные митапа
 * @throws {Error} - Ошибка получения данных митапа
 */
function fetchMeetupById(meetupId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const meetup = meetups.find((meetup) => meetup.id === meetupId)
      if (!meetup) {
        reject(new Error('Not found'))
      }
      resolve(meetup)
    }, TESTING_TIMEOUT)
  })
}
</script>

<style scoped>
.page-meetup {
  background-color: var(--white);
}
</style>