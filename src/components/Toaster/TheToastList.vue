<template>
  <div class="toast-list">
    <TheToast v-for="toast in toasts" :type="toast.type" :message="toast.message" :key="toast.id"
      class="toast-list__item" />
  </div>
</template>

<script>
import TheToast from './TheToast'

export default {
  name: 'TheToastList',

  components: { TheToast },

  props: {
    toasts: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.toast-list {
  --margin: 8px;

  position: fixed;
  bottom: var(--margin);
  right: var(--margin);
  width: calc(100% - var(--margin) * 2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 540px) {
  .toast-list {
    width: auto;
  }
}

@media all and (min-width: 992px) {
  .toast-list {
    bottom: 72px;
    right: 112px;
  }
}

.toast-list__item {
  margin-top: 1.25rem;
}
</style>
