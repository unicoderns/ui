import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiInputGroup } from '../../src'
import { uiInputGroupThemeConfigDefaults } from '../../src/defaults/ui-input-group-theme.config'
import { InputSizeVariants } from '@unicodernsui/core'

const theme = uiInputGroupThemeConfigDefaults

describe('ui-input-group.vue', () => {
  it('should render when props are set', () => {
    const wrapper = shallowMount(UiInputGroup, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
  it('should render label when label prop is set', () => {
    const labelText = 'some label'
    const wrapper = shallowMount(UiInputGroup, {
      props: { label: labelText },
    })
    const label = wrapper.find('label')

    expect(label.exists()).toBeTruthy()
    expect(label.text()).toBe(labelText)
  })

  it('should render aria-role when it is set in props', () => {
    const role = 'some role'
    const wrapper = shallowMount(UiInputGroup, {
      props: { ['aria:role']: role },
    })
    const groupWrapper = wrapper.find('div')

    expect(groupWrapper.attributes().role).toEqual(role)
  })

  it('should render no-wrap class when nowrap is set true in props', () => {
    const wrapper = shallowMount(UiInputGroup, {
      props: { nowrap: true },
    })
    const groupWrapper = wrapper.find('div')

    expect(groupWrapper.classes()).toContain(theme.cssClass.nowrap)
  })
  it('should render small class when size is set small in props', () => {
    const theme = uiInputGroupThemeConfigDefaults
    const wrapper = shallowMount(UiInputGroup, {
      props: { size: InputSizeVariants.Small },
    })
    const groupWrapper = wrapper.find('div')

    expect(groupWrapper.classes()).toContain(theme.cssClass.sizes.sm)
  })

  it('should render medium class when size is set medium in props', () => {
    const theme = uiInputGroupThemeConfigDefaults
    const wrapper = shallowMount(UiInputGroup, {
      props: { size: InputSizeVariants.Medium },
    })
    const groupWrapper = wrapper.find('div')

    expect(groupWrapper.classes()).toContain(theme.cssClass.sizes.md)
  })

  it('should render large class when size is set large in props', () => {
    const theme = uiInputGroupThemeConfigDefaults
    const wrapper = shallowMount(UiInputGroup, {
      props: { size: InputSizeVariants.Large },
    })
    const groupWrapper = wrapper.find('div')

    expect(groupWrapper.classes()).toContain(theme.cssClass.sizes.lg)
  })

  it('should render medium class as default', () => {
    const theme = uiInputGroupThemeConfigDefaults
    const wrapper = shallowMount(UiInputGroup, {
      props: {},
    })
    const groupWrapper = wrapper.find('div')

    expect(groupWrapper.classes()).toContain(theme.cssClass.sizes.md)
  })

  it('should render only wrapper without label when label is not set in props', () => {
    const wrapper = shallowMount(UiInputGroup, {
      props: {},
    })

    expect(wrapper.find('label').exists()).toBeFalsy()
  })
})
