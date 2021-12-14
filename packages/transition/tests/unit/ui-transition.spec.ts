import { shallowMount } from '@vue/test-utils'
import { UiTransition } from '../../src'

describe('ui-transition.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiTransition, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
