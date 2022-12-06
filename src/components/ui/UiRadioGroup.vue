<template>
  <div class="radio-group">
    <div v-for="option in options" class="radio-group__button">
      <label class="radio-group__label">
        <input class="radio-group__input" type="radio" :name="name" :value="options.value"
          :checked="option.value === modelValue" @input="handleCheck(option.value)" />
        <span class="radio-group__label-text">{{ option.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>

let id = 0

export default {
  name: 'UiRadioGroup',

  props: {
    options: {
      type: Array,
      required: true,
    },

    modelValue: {
      type: String,
    },

    name: {
      type: String,
      default: () => `radio-group-${id++}`,
    },
  },

  emits: ['update:modelValue'],

  methods: {
    handleCheck(value) {
      this.$emit('update:modelValue', value)
    }
  },

}
</script>

<style scoped>
.radio-group {
  display: flex;
  flex-direction: row;
}

.radio-group__button {
  position: relative;
  display: inline-flex;
}

.radio-group__label-text {
  --height: 2.2em;
  --rad: calc(var(--height) / 2);

  display: inline-block;
  margin-right: 0.8em;
  /* height: var(--height); */
  border-radius: var(--rad);
  padding: 0.3em 0.8em;
  border: 2px solid transparent;
  color: var(--main-color);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.4;
  transition-duration: var(--transition-duration);
  transition-property: border-color;
}

.radio-group__label-text:hover,
.radio-group__input:checked+.radio-group__label-text {
  border-color: var(--main-color);
}

.radio-group__input {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

@media all and (max-width: 767px) {
  .radio-group__label-text {
    margin-right: 0.4em;
    padding: 0.3em 0.4em;
  }
}
</style>