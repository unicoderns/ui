import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiAlert } from '../../src'

describe('ui-alert.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiAlert, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
