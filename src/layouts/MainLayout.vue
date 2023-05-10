<template>
  <div class="main-page">
    <PageHeader />
    <main class="main-page__content">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/layout/PageHeader'
import PageFooter from '@/components/layout/PageFooter'

export default {
  name: 'MainLayout',

  components: {
    PageFooter,
    PageHeader,
  },
}
</script>

<style>
.main-page {
  background-color: var(--grey-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-page__content {
  flex: 1 0 auto;
}
</style>
