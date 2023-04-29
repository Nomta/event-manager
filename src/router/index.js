import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: () =>
      import(/* webpackChunkName: "events" */ '@/views/EventView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
