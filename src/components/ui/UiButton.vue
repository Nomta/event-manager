<template>
  <button type="button" class="button" :class="[buttonType, ...buttonClasses, isInverted]" :style="style"
    :aria-label="ariaLabel ?? label" v-bind="$attrs" @click="handleClick">
    <span v-if="containsPlainText">
      <slot />
    </span>
    <slot v-else />
  </button>
</template>

<script>
const BUTTON_TYPES = {
  primary: 'button_primary',
  success: 'button_success',
}

const BUTTON_CLASSES = {
  rounded: 'button_rounded',
}

export default {
  name: 'UiButton',

  props: {
    label: String,
    ariaLabel: String,

    inverted: Boolean,
    rounded: Boolean,

    type: {
      type: String,
      validator: (value) => Object.keys(BUTTON_TYPES).includes(value),
    },
  },

  emits: ['click'],

  computed: {
    buttonType() {
      return BUTTON_TYPES[this.type]
    },
    buttonClasses() {
      const classes = []

      for (const key of Object.keys(BUTTON_CLASSES)) {
        if (this[key]) {
          classes.push(BUTTON_CLASSES[key])
        }
      }

      return classes
    },
    isInverted() {
      if (this.inverted) {
        return 'button_inverted'
      }
    },
    containsPlainText() {
      const slotDefault = this.$slots.default

      if (slotDefault) {
        return slotDefault().some((child) => String(child.type) === 'Symbol(Text)')
      }
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
  --rad: var(--border-radius);

  height: var(--height);
  min-width: 2.7em;
  border: 2px solid var(--base-color);
  border-radius: var(--rad);
  padding: var(--padding);
  font-size: 1.125rem;
  background-color: var(--base-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--padding);
  transition-duration: var(--transition-duration);
  transition-property: background-color;
  box-shadow: none;
  outline: none;
  cursor: pointer;
}

.button_rounded {
  --rad: calc(var(--height) / 2);
}

.button_primary {
  color: var(--blue);
}

.button_success {
  color: var(--green);
}

.button *,
.button :slotted(*) {
  transition-duration: var(--transition-duration);
  transition-property: color, fill;
  color: var(--inverted-color);
  fill: var(--inverted-color);
}


.button:hover,
.button_inverted {
  background-color: var(--inverted-color);
}

.button:hover *,
.button_inverted *,
.button:hover :slotted(*),
.button_inverted :slotted(*) {
  color: var(--base-color);
  fill: var(--base-color);
}

.button_inverted:hover {
  background-color: var(--base-color);
}

.button_inverted:hover *,
.button_inverted:hover :slotted(*) {
  color: var(--inverted-color);
  fill: var(--inverted-color);
}
</style>