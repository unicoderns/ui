import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiDropdown } from '../../src'

describe('ui-dropdown.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiDropdown, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
