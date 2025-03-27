import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import HomeView from '/src/views/HomeView.vue'

test('renders properly', () => {
  const wrapper = mount(HomeView, { props: { msg: 'Hello Cypress' } })
  expect(wrapper.text()).toContain('Hello Cypress')
})
