<template>
  <ul class="event-info">
    <li class="event-info__item">
      <img class="icon event-info__icon" alt="icon" src="@/assets/icons/icon-user.svg" />
      {{ organizer }}
    </li>
    <li class="event-info__item">
      <img class="icon event-info__icon" alt="icon" src="@/assets/icons/icon-map.svg" />
      {{ place }}
    </li>
    <li class="event-info__item">
      <img class="icon event-info__icon" alt="icon" src="@/assets/icons/icon-calendar.svg" />
      <time datetime="2020-01-01">{{ localeDate }}</time>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'EventInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },

  computed: {
    localeDate() {
      return new Date(this.date).toLocaleDateString(navigator.language, { year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
}
</script>

<style scoped>
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