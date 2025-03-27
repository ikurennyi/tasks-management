import { createStore } from 'vuex'
import projects, { type ProjectsStore } from './projects'
import tasks, { type TasksStore } from './tasks'

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
