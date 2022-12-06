<template>
  <div class="alert" :class="alertClass">
    <slot>No data...</slot>
  </div>
</template>

<script>
const ALERT_TYPES = {
  primary: 'alert_primary',
  success: 'alert_success',
  danger: 'alert_danger',
}

export default {
  name: 'UiAlert',

  props: {
    type: {
      type: String,
      required: false,
      validator: (value) => Object.keys(ALERT_TYPES).includes(value),
    },
  },

  computed: {
    alertClass() {
      return ALERT_TYPES[this.type];
    },
  },
}
</script>

<style scoped>
.alert {
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1.4;
  color: var(--accent-color);
  border: 2px solid var(--line-color);
  border-radius: var(--border-radius);
  margin: 2rem 0;
}

.alert_primary {
  color: var(--blue);
  background-color: var(--blue-extra);
}

.alert_success {
  color: var(--green);
  background-color: var(--green-light);
}

.alert_danger {
  color: var(--red);
  background-color: var(--red-light);
}
</style>