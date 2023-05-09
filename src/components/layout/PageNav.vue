<template>
  <nav class="nav">
    <RouterLink :to="{ name: 'index' }" class="nav__link">Home</RouterLink>
    <RouterLink :to="{ name: 'events' }" class="nav__link">Events</RouterLink>
    <RouterLink :to="{ name: 'login' }" class="nav__link">Login</RouterLink>
    <RouterLink :to="{ name: 'register' }" class="nav__link">Register</RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.5rem;
}

.nav__link {
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--default-color);
  text-decoration: none;
  padding: 0 1em;
  position: relative;
  display: inline-flex;
}

.nav__link:hover {
  color: var(--main-color);
}

.nav__link.router-link-exact-active {
  color: var(--accent-color);
}

@media all and (min-width: 992px) {
  .nav {
    flex-direction: row;
    align-items: center;
    margin-left: 0;
  }

  .nav__link {
    font-size: 1.25rem;
  }

  .nav__link:not(:first-of-type):before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-2px, -50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--grey);
  }
}
</style>
