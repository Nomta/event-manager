<template>
  <button type="button" class="button" :class="isInverted" :style="style" :aria-label="label" @click="handleClick">
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton',

  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    text: String,
    ariaLabel: String,
    color: String,
  },

  emits: ['click'],

  computed: {
    isInverted() {
      if (this.inverted) {
        return 'button_inverted'
      }
    },
    label() {
      return this.ariaLabel ?? this.text
    },
    style() {
      return { color: this.color }
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
}
</script>

<style scoped>
.button {
  --base-color: currentColor;
  --inverted-color: var(--white, white);

  height: 44px;
  min-width: 48px;
  border: 2px solid var(--base-color);
  padding: 8px;
  font-size: 18px;
  background-color: var(--inverted-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition-duration: 0.3s;
  transition-property: background-color, fill;
  box-shadow: none;
  outline: none;
  cursor: pointer;
}

.button:first-of-type {
  border-radius: 22px 0 0 22px;
  padding-left: 10px;
}

.button:last-of-type {
  border-radius: 0 22px 22px 0;
  padding-right: 10px;
}

.button:not(:first-of-type) {
  border-left-width: 1px;
}

.button:not(:last-of-type) {
  border-right-width: 1px;
}

.button:first-of-type {
  border-radius: 22px 0 0 22px;
  padding-left: 10px;
}

.button:only-of-type {
  border-radius: 22px;
}

.button :slotted(svg) {
  fill: var(--base-color);
}


.button:hover,
.button_inverted {
  background-color: var(--base-color);
}

.button:hover :slotted(*),
.button_inverted :slotted(*) {
  color: var(--inverted-color);
  fill: var(--inverted-color);
}
</style>