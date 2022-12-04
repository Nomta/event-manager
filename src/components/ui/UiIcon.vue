<template>
  <img :src="icon" class="icon" :alt="type" />
</template>

<script>
import { PATH_TO_ICONS } from '@/services/app.config'

export default {
  name: 'UiIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      return require(`@/${PATH_TO_ICONS}icon-${this.name}.svg`)
    },
  },
}
</script>

<style scoped>
.icon {
  display: block;
}
</style>