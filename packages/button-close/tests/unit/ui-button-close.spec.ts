import { shallowMount } from '@vue/test-utils'
import { UiButtonClose } from '../../src'

describe('ui-button-close.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
