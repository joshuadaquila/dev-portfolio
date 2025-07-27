import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SampleView from '../views/SampleView.vue'
import '@fontsource-variable/lexend'
import ClassSchedProjectView from '@/views/ClassSchedProjectView.vue'
import AlumniHubProjectView from '@/views/AlumniHubProjectView.vue'
import LibrarySysProjectView from '@/views/LibrarySysProjectView.vue'
import VermiProjectView from '@/views/VermiProjectView.vue'
import PlantCareProjectView from '@/views/PlantCareProjectView.vue'
import HotelSysProjectView from '@/views/HotelSysProjectView.vue'
import SkProjectView from '@/views/SkProjectView.vue'

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
    {
      path: '/projects/library-system',
      name: 'library-system',
      component: LibrarySysProjectView,
    },
    {
      path: '/projects/vermiexpert',
      name: 'vermiexpert',
      component: VermiProjectView,
    },
    {
      path: '/projects/plantcarerecommender-system',
      name: 'plantcarerecommender-system',
      component: PlantCareProjectView,
    },
    {
      path: '/projects/hotel-management-system',
      name: 'hotel-management-system',
      component: HotelSysProjectView,
    },
    {
      path: '/projects/sk-event-management-system',
      name: 'sk-event-management-system',
      component: SkProjectView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
