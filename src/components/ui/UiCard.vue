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
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  transition: box-shadow ease 0.2s;
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
  --bg-url: ;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 36px;
  /* 40px */
  line-height: 44px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  color: white;
  overflow: hidden;
  position: relative;
  min-height: 218px;
}

.card__content {
  padding: 50px;
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
    padding: 40px 24px 32px;
  }
}
</style>