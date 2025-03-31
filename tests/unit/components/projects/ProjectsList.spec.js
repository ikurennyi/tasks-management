import { describe, expect, test } from 'vitest'
import { mountComponent } from '@tests/helpers/mount-component'

import ProjectsList from '@/components/projects/ProjectsList.vue'

describe('ProjectsList component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mountComponent(ProjectsList, { stubs: { RouterLink: true } })
  })

  test('renders correct height', () => {
    expect(wrapper.find('h1').text()).toBe('Projects List')
  })

  test('renders Add New Project button', () => {
    expect(wrapper.find('v-btn').text()).toBe('Add New Project')
  })
})
