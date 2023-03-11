<template>
  <ul class="meetup-info">
    <li class="meetup-info__item">
      <img class="icon meetup-info__icon" alt="icon" src="@/assets/icons/icon-user.svg" />
      {{ organizer }}
    </li>
    <li class="meetup-info__item">
      <img class="icon meetup-info__icon" alt="icon" src="@/assets/icons/icon-map.svg" />
      {{ place }}
    </li>
    <li class="meetup-info__item">
      <img class="icon meetup-info__icon" alt="icon" src="@/assets/icons/icon-calendar.svg" />
      <time datetime="2020-01-01">{{ localeDate }}</time>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MeetupInfo',

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
.meetup-info {
  margin: 0;
  padding: 0;
}

.meetup-info__item {
  list-style-type: none;
  position: relative;
  padding-left: 36px;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 8px;
}

.meetup-info__item:last-child {
  margin: 0;
}

.meetup-info__icon {
  position: absolute;
  left: 0;
  top: 0;
}
</style>