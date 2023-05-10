<template>
  <PageLayout>
    <RouterView />
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout'

export default {
  name: 'App',

  components: {
    PageLayout,
  },
}
</script>
