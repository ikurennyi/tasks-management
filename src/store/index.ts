import { createStore } from 'vuex'
import projects, { type ProjectsStore } from './modules/projects'
import tasks, { type TasksStore } from './modules/tasks'
import snacks, { type SnackBarStore } from './modules/snackbar'

export interface RootStore {
  project: ProjectsStore
  task: TasksStore
  snack: SnackBarStore
}

const store = createStore({
  modules: {
    projects,
    tasks,
    snacks,
  },
})

export default store
