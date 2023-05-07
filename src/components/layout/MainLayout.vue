<template>
  <div class="wrapper">
    <PageHeader />
    <main class="main">
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
.wrapper {
  background-color: var(--grey-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
}
</style>
