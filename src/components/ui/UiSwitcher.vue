<template>
  <div class="switcher" role="group">
    <UiButton v-for="{ value, text, label, icon } in viewOptions" :key="value" :inverted="modelValue === value"
      :aria-label="label" :type="type" @click="select(value)">
      <InlineSvg v-if="icon" :src="icon" />
      <span v-if="text">{{ text }}</span>
    </UiButton>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import UiButton from '@/components/ui/UiButton'
import { PATH_TO_ICONS } from '@/services/app.config'

export default {
  name: 'UiSwitcher',

  components: {
    UiButton,
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
    type: String
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
</style>