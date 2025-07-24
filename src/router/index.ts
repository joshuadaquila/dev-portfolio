import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SampleView from '../views/SampleView.vue'
// Supports weights 100-900
import '@fontsource-variable/lexend'
import ClassSchedProjectView from '@/views/ClassSchedProjectView.vue'
import AlumniHubProjectView from '@/views/AlumniHubProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sample',
      name: 'sample',
      component: SampleView,
    },
    {
      path: '/projects/ccs-web-based-class-scheduling-system',
      name: 'ccs-web-based-class-scheduling-system',
      component: ClassSchedProjectView,
    },
    {
      path: '/projects/alumni-hub',
      name: 'alumni-hub',
      component: AlumniHubProjectView,
    },
  ],
})

export default router
