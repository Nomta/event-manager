<template>
  <button type="button" class="button" :class="[buttonClass, isInverted]" :style="style" :aria-label="label"
    @click="handleClick">
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script>
const BUTTON_TYPES = {
  primary: 'button_primary',
  success: 'button_success',
}

export default {
  name: 'UiButton',

  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    text: String,
    ariaLabel: String,

    type: {
      type: String,
      validator: (value) => Object.keys(BUTTON_TYPES).includes(value),
    },
  },

  emits: ['click'],

  computed: {
    buttonClass() {
      return BUTTON_TYPES[this.type];
    },
    isInverted() {
      if (this.inverted) {
        return 'button_inverted'
      }
    },
    label() {
      return this.ariaLabel ?? this.text
    },
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
  --height: 2.44em;
  --padding: 0.44em;
  --padding-2: 0.55em;
  --rad: calc(var(--height) / 2);

  height: var(--height);
  min-width: 2.7em;
  border: 2px solid var(--base-color);
  padding: var(--padding);
  font-size: 1.125rem;
  background-color: var(--inverted-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--padding);
  transition-duration: var(--transition-duration);
  transition-property: background-color;
  box-shadow: none;
  outline: none;
  cursor: pointer;
}

.button_primary {
  color: var(--blue);
}

.button_success {
  color: var(--green);
}

.button:first-of-type {
  border-radius: var(--rad) 0 0 var(--rad);
  padding-left: var(--padding-2);
}

.button:last-of-type {
  border-radius: 0 var(--rad) var(--rad) 0;
  padding-right: var(--padding-2);
}

.button:not(:first-of-type) {
  border-left-width: 1px;
}

.button:not(:last-of-type) {
  border-right-width: 1px;
}

.button:only-of-type {
  border-radius: var(--rad);
}

.button :slotted(*) {
  transition-duration: var(--transition-duration);
  transition-property: color, fill;
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