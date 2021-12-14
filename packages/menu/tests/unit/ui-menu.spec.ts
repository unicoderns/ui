import { shallowMount } from '@vue/test-utils'
import { UiMenu } from '../../src'

describe('ui-menu.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiMenu, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
