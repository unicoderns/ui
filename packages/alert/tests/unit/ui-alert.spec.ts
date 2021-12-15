import { shallowMount, mount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiAlert } from '../../src'
import { bsUiAlertThemeConfigDefaults } from '../../src/defaults/bs-ui-alert-theme.config'

describe('ui-alert.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiAlert, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('displays text as slot', () => {
    const defaultText = 'Default text'
    const wrapper = mount(UiAlert, {
      slots: { default: defaultText },
    })
    expect(wrapper.html()).toContain(defaultText)
  })

  it('should be dismissible', () => {
    const theme = bsUiAlertThemeConfigDefaults
    const wrapper = mount(UiAlert, {
      props: {
        dismissible: true,
      },
    })

    expect(wrapper.findComponent({ name: 'UiButtonClose' }))
    expect(wrapper.find('div').classes()).toContain(theme.cssClass.dismissible)
  })

  it('should emit close alert', () => {
    const wrapper = mount(UiAlert, {
      props: {
        dismissible: true,
      },
    })

    wrapper.vm.$emit('close')
    expect(wrapper.emitted().close).toBeTruthy()
  })
})
