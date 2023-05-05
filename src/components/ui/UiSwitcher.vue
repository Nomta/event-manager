<template>
  <div class="switcher" role="group">
    <UiButton v-for="{ value, text, label, icon } in viewOptions" :key="value" class="switcher__button"
      :inverted="modelValue !== value" :aria-label="label" :type="type" :rounded="rounded" @click="select(value)">
      <InlineSvg v-if="icon" :src="icon" />
      <span v-if="text">{{ text }}</span>
    </UiButton>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import { PATH_TO_ICONS } from '@/services/app.config'

export default {
  name: 'UiSwitcher',

  components: {
    InlineSvg,
  },

  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      required: true
    },
    type: String,
    rounded: Boolean,
  },

  emits: ['update:modelValue'],

  computed: {
    viewOptions() {
      return this.options.map(this.mapOptions)
    },
  },


  methods: {
    select(value) {
      this.$emit('update:modelValue', value);
    },
    mapOptions({ text, icon, value, label }) {
      return {
        value,
        text,
        label: label ?? text,
        icon: this.requireIcon(icon),
      }
    },
    requireIcon(name) {
      return name && require(`@/${PATH_TO_ICONS}inline-icon-${name}.svg`)
    }
  },
}
</script>

<style scoped>
.switcher {
  display: inline-flex;
  white-space: nowrap;
}

.switcher__button:first-of-type {
  border-radius: var(--rad) 0 0 var(--rad);
  padding-left: var(--padding-2);
}

.switcher__button:last-of-type {
  border-radius: 0 var(--rad) var(--rad) 0;
  padding-right: var(--padding-2);
}

.switcher__button:not(:first-of-type) {
  border-left-width: 1px;
}

.switcher__button:not(:last-of-type) {
  border-right-width: 1px;
}
</style>