import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiCheckbox } from '../../src'

describe('ui-checkbox.vue', () => {
  it('should render when props are set', () => {
    const wrapper = shallowMount(UiCheckbox, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
