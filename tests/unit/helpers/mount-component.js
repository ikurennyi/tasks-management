import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

export function mountComponent(component, options = {}) {
  return shallowMount(component, {
    global: {
      provide: {
        store: createStore(),
      },
      stubs: { ...options.stubs },
    },
    data: () => ({
      ...options.data,
    }),
  })
}
