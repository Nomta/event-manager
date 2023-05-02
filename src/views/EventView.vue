<template>
  <div class="page-event">
    <EventViewComponent v-if="event" :event="event" />
    <UiContainer v-else-if="loading">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>
    <UiContainer v-else-if="error">
      <UiAlert>{{ error }}</UiAlert>
    </UiContainer>
  </div>
</template>

<script>
import EventViewComponent from '@/components/EventView'
import events from '@/api/events'

const TESTING_TIMEOUT = 500

export default {
  name: 'EventView',

  components: {
    EventViewComponent,
  },

  props: {
    eventId: {
      type: Number,
      default: 1
    },
  },

  data() {
    return {
      event: null,
      error: null,
      loading: false,
    }
  },

  mounted() {
    this.event = null
    this.error = null
    this.loading = true

    fetchEventById(this.eventId)
      .then((event) => this.event = event)
      .catch((error) => this.error = error)
      .finally(() => this.loading = false)
  }
}

/**
 * Получение данных события по Event ID с API
 * @param {Number} eventId
 * @return {Promise<Object>} - Данные события
 * @throws {Error} - Ошибка получения данных события
 */
function fetchEventById(eventId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = events.find((event) => event.id === eventId)
      if (!event) {
        reject(new Error('Not found'))
      }
      resolve(event)
    }, TESTING_TIMEOUT)
  })
}
</script>

<style scoped>
.page-event {
  background-color: var(--white);
}
</style>