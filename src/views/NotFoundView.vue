<template>
  <div class="page-error">
    <UiContainer>
      <h2 class="page-error__title">
        <span class="page_error__status-text">Страница не найдена</span>
        <span class="page-error__status-code">404</span>
      </h2>
    </UiContainer>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView.vue',
}
</script>

<style scoped>
.page-error {
  padding: 6.25rem 0;
}

.page-error__title {
  font-size: 2.25rem;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  color: var(--default-color);
}

.page-error__status-code {
  display: block;
  font-size: 6.75rem;
}

@media all and (min-width: 768px) {
  .page-error__title {
    font-size: 4.25rem;
  }

  .page-error__status-code {
    font-size: 9rem;
  }
}
</style>
