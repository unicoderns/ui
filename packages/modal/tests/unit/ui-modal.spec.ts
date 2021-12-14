import { shallowMount } from '@vue/test-utils'
import { UiModal } from '../../src'

describe('ui-modal.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiModal, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
