import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiButton } from '../../src'

describe('ui-button.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiButton, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders as anchor when props.anchor is true', () => {
    const wrapper = shallowMount(UiButton, {
      props: { anchor: true, variant: BootstrapVariants.Primary },
    })

    const anchor = wrapper.find('a')
    const button = wrapper.find('button')
    expect(anchor.exists()).toBeTruthy()
    expect(button.exists()).toBeFalsy()
  })
})
