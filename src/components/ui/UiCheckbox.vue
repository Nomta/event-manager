<template>
  <label class="checkbox">
    <input type="checkbox" v-model="value" class="checkbox__input" />
    <span class="checkbox__box"></span>
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'UiCheckbox',

  props: {
    label: String,
  },

  events: ['update:modelValue'],

  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
  },
}
</script>

<style scoped>
.checkbox {
  display: inline-block;
  position: relative;
  padding-left: 2.75rem;
  margin-bottom: 0.625rem;
  text-align: left;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1.4;
  transition-duration: var(--transition-duration);
  transition-timing-function: ease;
  transition-property: background-color, border-color;
}

.checkbox>.checkbox__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  padding: 0;
}

.checkbox>.checkbox__box {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.75rem;
  width: 1.75rem;
  border: 2px solid var(--line-color);
  border-radius: var(--border-radius);
  background: 0 0;
}

.checkbox>.checkbox__input:checked~.checkbox__box:after {
  display: block;
}

.checkbox>.checkbox__box:after {
  content: '';
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 13px;
  background-image: url('@/assets/icons/icon-check.svg');
  border: none;
  transform: translate(-50%, -50%);
}
</style>