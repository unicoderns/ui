import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@uicr/core'
import { UiButtonClose } from '../../src'
import { uiButtonCloseThemeConfigDefaults } from '../../src/defaults/ui-button-close-theme.config'

describe('ui-button-close.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should trigger onClick close', async () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {},
    })

    wrapper.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should be inverted', () => {
    const theme = uiButtonCloseThemeConfigDefaults
    const wrapper = shallowMount(UiButtonClose, {
      props: {
        invert: true,
      },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.inverted)
  })

  it('sholud be disabled', () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('should render custom accessibility label when props.label is set', () => {
    const label = 'some label'
    const wrapper = shallowMount(UiButtonClose, {
      props: { ['aria:label']: label, variant: BootstrapVariants.Primary },
    })

    expect(wrapper.attributes('aria-label')).toEqual(label)
  })
})
