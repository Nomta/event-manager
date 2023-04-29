<template>
  <div class="event-cover" :style="style">
    <h1 class="event-cover__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EventCover',

  props: {
    title: String,
    image: String,
  },

  computed: {
    style() {
      if (this.image) {
        return `--bg-url: url('${this.image}')`
      }
    }
  },
}
</script>

<style scoped>
.event-cover {
  --default-cover: url('@/assets/images/undraw_speaker.svg');
  --bg-url: var(--default-cover);

  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    var(--bg-url);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 410px;
  max-width: 1216px;
  margin: 0 auto;
}

.event-cover__title {
  color: var(--white);
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  padding: 0 16px;
  text-align: center;
}

@media all and (min-width: 992px) {
  .event-cover__title {
    font-size: 72px;
    line-height: 84px;
  }
}
</style>