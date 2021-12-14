import { shallowMount } from '@vue/test-utils'
import { UiToastContainer } from '../../src'

describe('ui-toast-container.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiToastContainer, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
