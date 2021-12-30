import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiAccordion } from '../../src'

describe('ui-accordion.vue', () => {
  it('should render when props are set', () => {
    const wrapper = shallowMount(UiAccordion, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
