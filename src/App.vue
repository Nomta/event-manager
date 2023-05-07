<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script>
import MainLayout from './components/layout/MainLayout'

export default {
  name: 'App',

  components: {
    MainLayout,
  },
}
</script>
