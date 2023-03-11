<template>
  <UiCard :cover="meetup.image" :title="meetup.title" class="meetup-card">

    <UiBadge v-if="meetup.organizing" type="success" class="meetup-card__badge">Организую</UiBadge>
    <UiBadge v-else-if="meetup.attending" type="primary" class="meetup-card__badge">Участвую</UiBadge>

    <ul class="meetup-info">
      <li class="meetup-info__item">
        <UiIcon name="user" class="meetup-info__icon" alt="user" />
        {{ meetup.organizer }}
      </li>
      <li class="meetup-info__item">
        <UiIcon name="map" class="meetup-info__icon" alt="map" />
        {{ meetup.place }}
      </li>
      <li class="meetup-info__item">
        <UiIcon name="calendar" class="meetup-info__icon" alt="calendar" />
        <time :datetime="isoDate">{{ localDate }}</time>
      </li>
    </ul>

  </UiCard>
</template>

<script>import UiBadge from '@/components/ui/UiBadge'
import UiCard from '@/components/ui/UiCard'
import UiIcon from '@/components/ui/UiIcon'

export default {
  name: 'MeetupCard',

  components: {
    UiBadge,
    UiCard,
    UiIcon,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isoDate() {
      return new Date(this.meetup.date).toISOString().split('T')[0];
    },

    localDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

}
</script>

<style scoped>
.meetup-card__badge {
  position: absolute;
  top: 0;
  right: 0;
}

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