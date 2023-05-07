<template>
  <header class="header">
    <PageLogo />
    <PageNav />
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import PageLogo from '@/components/layout/PageLogo'
import PageNav from '@/components/layout/PageNav'

export default defineComponent({
  name: 'PageHeader',
  components: { PageNav, PageLogo },
})
</script>

<style scoped>
.header {
  padding: 2.75rem 0 1.5rem;
  background-color: var(--white);
}

@media all and (min-width: 992px) {
  .header {
    padding-bottom: 1.75rem;
  }
}
</style>
