<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/meetups">Meetups</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: var(--accent-color);
}
</style>
