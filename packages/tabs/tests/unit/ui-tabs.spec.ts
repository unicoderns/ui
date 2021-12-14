import { shallowMount } from '@vue/test-utils'
import { UiTabs } from '../../src'

describe('ui-tabs.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiTabs, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
