<template>
  <h1 class="logo">
    <RouterLink :to="{ name: 'index' }">
      <img src="@/assets/images/logo.svg" alt="Logo" width="174" height="30" />
    </RouterLink>
  </h1>
</template>

<script>
export default {
  name: 'PageLogo',
};
</script>

<style scoped>
.logo {
  display: block;
  font-weight: 900;
  font-size: 34px;
  line-height: 30px;
  text-align: center;
  margin: 0 0 24px;
  text-transform: uppercase;
  color: var(--body-color);
  text-decoration: none;
}
</style>
