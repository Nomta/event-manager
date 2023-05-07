<template>
  <footer class="footer">
    <UiContainer>&copy; 2022-{{ new Date().getFullYear() }}</UiContainer>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style scoped>
.footer {
  padding: 6.25rem 0 3.75rem;
  text-align: center;
  background-color: var(--white);
}
</style>
