<template>
  <div class="dropdown" ref="dropdown" :class="{ 'dropdown_opened': opened }" @click="toggle">
    <div class="dropdown__toggle" :class="{ 'dropdown__toggle_icon': optionsHaveIcons }">
      <UiIcon v-if="selectedOption?.icon" :name="selectedOption.icon" class="dropdown__icon" />
      <span class="dropdown__title">{{ dropdownTitle }}</span>
    </div>

    <ul class="dropdown__menu" role="listbox">
      <li v-for="option in options" class="dropdown__item" :class="{ 'dropdown__item_icon': optionsHaveIcons }"
        :key="option.value" role="option" @click.stop="select(option)">
        <UiIcon v-if="option.icon" :name="option.icon" class="dropdown__icon" />
        <span class="dropdown__item-text">{{ option.text }}</span>
      </li>
    </ul>
  </div>

  <select value="" @change="handleNativeSelect" style="display: none">
    <option v-for="option in options" :value="option.value" :selected="option.value === modelValue" :key="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'UiDropdown',

  props: {
    options: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    modelValue: String
  },

  emits: ['update:modelValue'],

  data() {
    return {
      titleWidth: 'auto',
      opened: false
    }
  },

  computed: {
    selectedOption() {
      return this.options.find(option => option.value === this.modelValue)
    },
    optionsHaveIcons() {
      return this.options.some(option => option.icon)
    },
    dropdownTitle() {
      return this.selectedOption?.text || this.title
    },
  },

  methods: {
    toggle() {
      this.opened = !this.opened
    },
    select({ value }) {
      this.$emit('update:modelValue', value)
      this.opened = false
    },
    closeOut(e) {
      if (!this.$refs.dropdown.contains(e.target)) {
        this.opened = false
      }
    },
    updateWidth() {
      const options = this.$refs.dropdown.querySelectorAll('.dropdown__item-text')
      const title = this.$refs.dropdown.querySelector('.dropdown__title')

      const maxWidth = Array.from(options).reduce((max, option) => {
        return Math.max(max, option.clientWidth)
      }, title.clientWidth)

      if (maxWidth) {
        this.titleWidth = `${maxWidth}px`
      }
    },
    handleNativeSelect(e) {
      this.select(this.options.find(option => option.value === e.target.value))
    },
  },

  mounted() {
    this.updateWidth()
    document.addEventListener('click', this.closeOut)
  },

  beforeUnmount() {
    document.removeEventListener('click', this.closeOut)
  }

};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__toggle {
  position: relative;
  display: inline-block;
  border: 2px solid var(--line-color);
  border-radius: var(--border-radius);
  padding: 0.5rem 3.5rem 0.5rem 1.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25;
  color: initial;
  text-align: center;
  background-color: var(--white);
  background-position: calc(100% - 0.5em) calc(100% - 0.5em);
  outline: none;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
}

.dropdown__toggle:after {
  content: '';
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  transform: none;
  background: url('@/assets/icons/icon-chevron-down.svg') no-repeat;
  background-size: cover;
  display: block;
  width: 1.2em;
  height: 1.2em;
  transition: var(--transition-duration) transform;
}

.dropdown__toggle.dropdown__toggle_icon {
  padding-left: 3.5rem;
}

.dropdown_opened .dropdown__toggle {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.dropdown_opened .dropdown__toggle:after {
  transform: rotate(180deg);
}

.dropdown__title {
  display: inline-block;
  width: v-bind(titleWidth);
}

.dropdown__menu {
  position: absolute;
  width: 100%;
  height: 0;
  margin: 0;
  margin-top: -1px;
  padding: 0;
  left: 0;
  z-index: 95;
  background-clip: padding-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dropdown_opened .dropdown__menu {
  height: auto;
  border: 2px solid var(--line-color);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  border-top: none;
  will-change: transform;
}

.dropdown__item {
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4;
  margin-top: -1px;
  background-color: var(--white);
  box-shadow: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition-duration: var(--transition-duration);
  transition-property: background-color, border-color, color;
  outline: none;
  text-decoration: none;
}

.dropdown__item:hover,
.dropdown__item:focus {
  background-color: var(--blue-extra);
}

.dropdown__item.dropdown__item_icon {
  position: relative;
  padding-left: 3.5rem;
}

.dropdown__item.dropdown__item_icon .dropdown__icon,
.dropdown__toggle_icon .dropdown__icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translate(0, -50%);
}

.dropdown__item-text {
  display: inline-block;
}
</style>
