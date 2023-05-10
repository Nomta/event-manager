<template>
  <template v-if="layout">
    <component :is="layout">
      <slot />
    </component>
  </template>

  <template v-else>
    <slot />
  </template>
</template>

<script>
export default {
  name: 'PageLayout',

  computed: {
    layout() {
      return this.$route.meta?.layout
    }
  },
}
</script>