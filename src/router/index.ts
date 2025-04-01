import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { ROUTES } from '@/types/routes'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import projectsGuard from './guards/projects-guard'
import tasksGuard from './guards/tasks-guard'

const routes: RouteRecordRaw[] = [
  {
    path: ROUTES.PROJECTS_LIST.path,
    name: ROUTES.PROJECTS_LIST.name,
    component: ProjectsList,
  },
  {
    path: ROUTES.NEW_PROJECT.path,
    name: ROUTES.NEW_PROJECT.name,
    component: () => import('@/components/projects/ProjectForm.vue'),
  },
  {
    path: ROUTES.PROJECT_DETAILS.path,
    children: [
      {
        path: '',
        name: ROUTES.PROJECT_DETAILS.name,
        component: () => import('@/components/projects/ProjectDetails.vue'),
      },
      {
        path: ROUTES.EDIT_PROJECT.path,
        name: ROUTES.EDIT_PROJECT.name,
        component: () => import('@/components/projects/ProjectForm.vue'),
      },
      {
        path: ROUTES.TASK.path,
        name: ROUTES.TASK.name,
        component: () => import('@/components/tasks/TaskView.vue'),
      },
      {
        path: ROUTES.TASK_NEW.path,
        name: ROUTES.TASK_NEW.name,
        component: () => import('@/components/tasks/TaskForm.vue'),
      },
      {
        path: ROUTES.EDIT_TASK.path,
        name: ROUTES.EDIT_TASK.name,
        component: () => import('@/components/tasks/TaskForm.vue'),
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND.path,
    name: ROUTES.NOT_FOUND.name,
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  strict: true,
})
router.beforeEach((to) => {
  const guards = [projectsGuard, tasksGuard]

  for (const guard of guards) {
    const redirect = guard(to)
    if (redirect) return redirect
  }
})

export default router
