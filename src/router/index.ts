import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/ReportsView.vue'),
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('@/views/PeopleView.vue'),
    },
  ],
})

export default router
