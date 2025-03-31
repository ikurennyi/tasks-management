interface Route {
  path: string
  name: string
}

import {
  PROJECTS_LIST_PATH,
  NEW_PROJECT_PATH,
  PROJECT_DETAILS_PATH,
  TASK_FORM_PATH,
  TASK_NEW_PATH,
  EDIT_TASK_PATH,
  NOT_FOUND_PATH,
  EDIT_PROJECT_PATH,
} from '@/config'

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
    path: PROJECTS_LIST_PATH,
    name: 'projects',
  },
  NEW_PROJECT: {
    path: NEW_PROJECT_PATH,
    name: 'newProject',
  },
  EDIT_PROJECT: {
    path: EDIT_PROJECT_PATH,
    name: 'editProject',
  },
  PROJECT_DETAILS: {
    path: PROJECT_DETAILS_PATH,
    name: 'projectDetails',
  },
  TASK_FORM: {
    path: TASK_FORM_PATH,
    name: 'task',
  },
  TASK_NEW: {
    path: TASK_NEW_PATH,
    name: 'taskNew',
  },
  EDIT_TASK: {
    path: EDIT_TASK_PATH,
    name: 'taskEdit',
  },
  NOT_FOUND: {
    path: NOT_FOUND_PATH,
    name: 'not-found',
  },
} as const)
export type RouteNames = Routes[keyof Routes]['name']
