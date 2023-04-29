<template>
  <div class="event-calendar">Календарь</div>
</template>

<script>
export default {
  name: 'EventCalendar',

  props: {
    events: {
      type: Array,
      required: true,
    },
  },

}
</script>