import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  {
    path: '/meetups',
    name: 'meetups',
    component: () =>
      import(/* webpackChunkName: "meetups" */ '@/views/MeetupView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
