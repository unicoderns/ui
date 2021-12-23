import { shallowMount, mount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiAlert } from '../../src'
import { bsUiAlertThemeConfigDefaults } from '../../src/defaults/bs-ui-alert-theme.config'

const theme = bsUiAlertThemeConfigDefaults

describe('ui-alert.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiAlert, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should displays text as slot', () => {
    const defaultText = 'Default text'
    const wrapper = mount(UiAlert, {
      slots: { default: defaultText },
    })
    expect(wrapper.html()).toContain(defaultText)
  })

  it('should have dismissible class when dismissible prop is true', () => {
    const wrapper = mount(UiAlert, {
      props: {
        dismissible: true,
      },
    })

    expect(wrapper.findComponent({ name: 'UiButtonClose' })).toBeTruthy()
    expect(wrapper.find('div').classes()).toContain(theme.cssClass.dismissible)
  })

  it('should have animate class when prop animate is true', () => {
    const wrapper = mount(UiAlert, {
      props: {
        animate: true,
      },
    })

    expect(wrapper.find('div').classes()).toContain(theme.cssClass.animated)
  })

  it('should not be displayed when show prop is setted false', () => {
    const wrapper = mount(UiAlert, {
      props: {
        show: false,
      },
    })

    expect(wrapper.find('div').exists()).toBeFalsy()
  })

  it('should render custom accessibility role when props.role is set', () => {
    const role = 'some role'

    const wrapper = mount(UiAlert, {
      props: { ['aria:role']: role, variant: BootstrapVariants.Primary },
    })

    const div = wrapper.find('div')
    expect(div.attributes().role).toEqual(role)
  })

  it('should render custom accessibility label when props.label is set', () => {
    const buttonClose = 'some buttonClose'

    const wrapper = mount(UiAlert, {
      props: {
        dismissible: true,
        ['aria:buttonClose']: buttonClose,
        variant: BootstrapVariants.Primary,
      },
    })

    const button = wrapper.find('button')
    expect(button.attributes('aria-label')).toEqual(buttonClose)
  })

  it('should emit close action with true when props.dismissible is true', () => {
    const wrapper = mount(UiAlert, {
      props: {
        dismissible: true,
      },
    })

    wrapper.vm.$emit('close')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should emit show action with true', () => {
    const wrapper = mount(UiAlert, {
      props: {},
    })

    wrapper.vm.$emit('show')
    expect(wrapper.emitted().show).toBeTruthy()
  })

  it('should emit hide action with true', () => {
    const wrapper = mount(UiAlert, {
      props: {},
    })

    wrapper.vm.$emit('hide')
    expect(wrapper.emitted().hide).toBeTruthy()
  })
})
