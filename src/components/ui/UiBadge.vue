<template>
  <span class="badge" :class="badgeClass">
    <slot />
  </span>
</template>

<script>
const BADGE_TYPES = {
  primary: 'badge_primary',
  success: 'badge_success',
}

export default {
  name: 'UiBadge',

  props: {
    type: {
      type: String,
      validator: (value) => Object.keys(BADGE_TYPES).includes(value),
    },
  },

  computed: {
    badgeClass() {
      return BADGE_TYPES[this.type];
    },
  },

}
</script>

<style scoped>
.badge {
  font-size: 0.875rem;
  line-height: 1.7;
  text-align: right;
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
}

.badge_primary {
  color: var(--blue);
  background-color: var(--blue-extra);
}

.badge_success {
  color: var(--green);
  background-color: var(--green-light);
}
</style>