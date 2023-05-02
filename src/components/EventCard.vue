<template>
  <UiCard :cover="event.image" :title="event.title" class="event-card">

    <UiBadge v-if="event.organizing" type="success" class="event-card__badge">Организую</UiBadge>
    <UiBadge v-else-if="event.attending" type="primary" class="event-card__badge">Участвую</UiBadge>

    <ul class="event-info">
      <li class="event-info__item">
        <UiIcon name="user" class="event-info__icon" alt="user" />
        {{ event.organizer }}
      </li>
      <li class="event-info__item">
        <UiIcon name="map" class="event-info__icon" alt="map" />
        {{ event.place }}
      </li>
      <li class="event-info__item">
        <UiIcon name="calendar" class="event-info__icon" alt="calendar" />
        <time :datetime="isoDate">{{ localDate }}</time>
      </li>
    </ul>

  </UiCard>
</template>

<script>
export default {
  name: 'EventCard',

  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isoDate() {
      return new Date(this.event.date).toISOString().split('T')[0]
    },

    localDate() {
      return new Date(this.event.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

}
</script>

<style scoped>
.event-card__badge {
  position: absolute;
  top: 0;
  right: 0;
}

.event-info {
  margin: 0;
  padding: 0;
}

.event-info__item {
  list-style-type: none;
  position: relative;
  padding-left: 36px;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 8px;
}

.event-info__item:last-child {
  margin: 0;
}

.event-info__icon {
  position: absolute;
  left: 0;
  top: 0;
}
</style>