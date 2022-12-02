<template>
  <img :src="src" class="icon" :alt="alt" />
</template>

<script>

export default {
  name: 'UiIcon',

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: String
  },
}
</script>

<style scoped>
.icon {
  display: block;
}
</style>