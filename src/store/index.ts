import { createStore } from 'vuex'
import projects, { type ProjectsStore } from './modules/projects'
import tasks, { type TasksStore } from './modules/tasks'

export interface RootStore {
  project: ProjectsStore
  task: TasksStore
}

const store = createStore({
  modules: {
    projects,
    tasks,
  },
})

export default store
