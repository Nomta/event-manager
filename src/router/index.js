import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/HomeView.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: () =>
      import(/* webpackChunkName: "events" */ '@/views/EventView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/RegisterView'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFoundView'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
