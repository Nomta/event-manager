<template>
  <div class="auth-page">
    <UiContainer>
      <slot />
    </UiContainer>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style scoped>
.auth-page {
  max-width: 23.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
}

.auth-page :deep(h1),
.auth-page :deep(h2) {
  margin: 0 0 2rem;
  font-size: 2rem;
  line-height: 1.15;
  font-weight: 700;
  text-align: center;
  color: var(--default-color);
}
</style>
