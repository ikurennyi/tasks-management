interface Route {
  path: string
  name: string
}

interface Routes {
  readonly PROJECTS_LIST: Route
  readonly NEW_PROJECT: Route
  readonly EDIT_PROJECT: Route
  readonly PROJECT_DETAILS: Route
  readonly TASK_FORM: Route
  readonly TASK_NEW: Route
  readonly EDIT_TASK: Route
  readonly NOT_FOUND: Route
}

export const ROUTES: Routes = Object.freeze({
  PROJECTS_LIST: {
    path: '/',
    name: 'projects',
  },
  NEW_PROJECT: {
    path: '/projects/new',
    name: 'newProject',
  },
  EDIT_PROJECT: {
    path: 'edit',
    name: 'editProject',
  },
  PROJECT_DETAILS: {
    path: '/projects/:projectId',
    name: 'projectDetails',
  },
  TASK_FORM: {
    path: 'tasks/:taskId',
    name: 'task',
  },
  TASK_NEW: {
    path: 'tasks/new',
    name: 'taskNew',
  },
  EDIT_TASK: {
    path: 'tasks/:taskId/edit',
    name: 'taskEdit',
  },
  NOT_FOUND: {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
  },
} as const)
