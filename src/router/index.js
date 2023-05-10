import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/HomeView.vue'),
    meta: { layout: MainLayout },
  },
  {
    path: '/events',
    name: 'events',
    component: () =>
      import(/* webpackChunkName: "events" */ '@/views/EventView.vue'),
    meta: { layout: MainLayout },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView'),
    meta: { layout: AuthLayout },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/RegisterView'),
    meta: { layout: AuthLayout },
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
