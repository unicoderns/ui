import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants, ButtonSizeVariants } from '@uicr/core'
import { UiButton } from '../../src'
import { uiButtonThemeConfigDefaults } from '../../src/defaults/ui-button-theme.config'

describe('ui-button.vue', () => {
  const theme = uiButtonThemeConfigDefaults

  it('should render when props are set', () => {
    const wrapper = shallowMount(UiButton, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render custom content when default slot is set', () => {
    const wrapper = shallowMount(UiButton, {
      props: { variant: BootstrapVariants.Primary },
      slots: {
        default: '<span class="custom">something</span>',
      },
    })

    const slotContent = wrapper.find('span.custom')
    expect(slotContent.exists()).toBeTruthy()
  })

  it('should render as anchor when props.anchor is true', () => {
    const wrapper = shallowMount(UiButton, {
      props: { anchor: true, variant: BootstrapVariants.Primary },
    })

    const anchor = wrapper.find('a')
    const button = wrapper.find('button')
    expect(anchor.exists()).toBeTruthy()
    expect(button.exists()).toBeFalsy()
  })

  it('should render custom accessibility role when props.role is set', () => {
    const role = 'some role'

    const wrapper = shallowMount(UiButton, {
      props: { ['aria:role']: role, variant: BootstrapVariants.Primary },
    })

    const button = wrapper.find('button')
    expect(button.attributes().role).toEqual(role)
  })

  it.skip('should emit toggle action with true when props.toggle is true', async () => {
    const wrapper = shallowMount(UiButton, {
      props: { toggle: true, variant: BootstrapVariants.Primary },
    })

    wrapper.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle[0]).toEqual([true])
    expect(wrapper.classes()).toContain(theme.cssClass.active)
  })

  it('should emit toggle action with false when props.toggle is true and is already active', async () => {
    const wrapper = shallowMount(UiButton, {
      props: { toggle: true, active: true, variant: BootstrapVariants.Primary },
    })

    wrapper.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle[0]).toEqual([false])
    expect(wrapper.classes()).not.toContain(theme.cssClass.active)
  })

  it.skip('should render outline class when props.outline is set true', () => {
    const wrapper = shallowMount(UiButton, {
      props: { outline: true, variant: BootstrapVariants.Danger },
    })

    expect(wrapper.classes()).toContain(
      theme.cssClass.outlineVariants[BootstrapVariants.Danger]
    )
  })

  it.skip('should render large size class when props.size is set lg', () => {
    const wrapper = shallowMount(UiButton, {
      props: {
        size: ButtonSizeVariants.Large,
        variant: BootstrapVariants.Danger,
      },
    })

    expect(wrapper.classes()).toContain(
      theme.cssClass.sizes[ButtonSizeVariants.Large]
    )
  })

  it.skip('should render active class when props.active is set true', () => {
    const wrapper = shallowMount(UiButton, {
      props: {
        active: true,
        variant: BootstrapVariants.Danger,
      },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.active)
  })
})
