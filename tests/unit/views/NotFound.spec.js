import { describe, expect, test } from 'vitest'
import { mountComponent } from '@tests/helpers.js'

import NotFound from '@/views/NotFound.vue'

describe('NotFound page', () => {
  test('should render Page not Found title', () => {
    const wrapper = mountComponent(NotFound, { stubs: { RouterLink: true } })
    expect(wrapper.find('h1').text()).toBe('Page not Found')
  })

  test('should render Projects List link', () => {
    const wrapper = mountComponent(NotFound)
    expect(wrapper.find('p').text()).toContain('Projects List')
  })
})
