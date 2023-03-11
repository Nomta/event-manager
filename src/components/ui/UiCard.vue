<template>
  <article class="card">
    <div class="card__col">
      <div class="card__cover" :style="style">
        <header>
          <slot name="title">{{ title }}</slot>
        </header>
      </div>
    </div>
    <div class="card__col">
      <div class="card__content">
        <slot />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'UiCard',

  props: {
    title: String,
    cover: String,
  },

  computed: {
    style() {
      if (this.cover) {
        return `--bg-url: url('${this.cover}')`
      }
    }
  },
}
</script>

<style scoped>
.card {
  --default-cover: url('@/assets/images/undraw_speaker.svg');
  --bg-url: var(--default-cover);

  display: flex;
  flex-direction: row;
  background-color: var(--white);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  transition: box-shadow ease var(--transition-duration);
}

.card:hover {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.24);
}

.card__col {
  flex: 1 0 50%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card__cover {
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    var(--bg-url);
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 1.2;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  color: var(--white);
  overflow: hidden;
  position: relative;
  min-height: 13.625rem;
}

.card__content {
  padding: 3.125rem;
  border-left: 5px solid var(--main-color);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media all and (max-width: 992px) {
  .card {
    flex-direction: column;
  }

  .card__col {
    flex: 1 0 100%;
  }

  .card__content {
    padding: 2.5rem 1.5rem 2rem;
  }
}
</style>