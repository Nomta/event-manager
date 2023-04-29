<template>
  <ul class="event-list">
    <li v-for="event in events" :key="event.id" class="event-list__item">
      <a :href="`/events/${event.id}`" class="event-list__item-link" tabindex="0">
        <EventCard :event="event" />
      </a>
    </li>
  </ul>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  name: 'EventList',

  components: {
    EventCard,
  },

  props: {
    events: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.event-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.event-list__item {
  margin: 0 0 32px 0;
}

.event-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.event-list__item {
  margin: 0 0 32px 0;
  text-decoration: none;
}

.event-list__item-link {
  text-decoration: none;
  color: inherit;
}

.event-card {
  position: relative;
}

.event-card__badge {
  position: absolute;
  top: 0;
  right: 0;
}
</style>