<template>
  <span class="badge">
    <slot />
  </span>
</template>

<script>

export default {
  name: 'UiBadge',
}
</script>

<style scoped>
.badge {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
}
</style>