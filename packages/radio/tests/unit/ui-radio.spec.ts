import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@uicr/core'
import { UiRadio } from '../../src'

describe('ui-radio.vue', () => {
  it('should render when props are set', () => {
    const wrapper = shallowMount(UiRadio, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
