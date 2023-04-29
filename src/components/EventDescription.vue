<template>
  <p class="event-description">{{ description }}</p>
</template>

<script>
export default {
  name: 'EventDescription',

  props: {
    description: String,
  }
}
</script>

<style scoped>
.event-description {
  padding-top: 33px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-wrap;
}
</style>