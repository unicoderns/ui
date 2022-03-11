import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@uicr/core'
import { UiChip } from '../../src'
import { uiChipThemeConfigDefaults } from '../../src/defaults/ui-chip-theme.config'

describe('ui-chip.vue', () => {
  it('should render when props are set', () => {
    const wrapper = shallowMount(UiChip, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render custom content when default slot is set', () => {
    const content = 'some content'
    const wrapper = shallowMount(UiChip, {
      props: { variant: BootstrapVariants.Primary },
      slots: {
        default: content,
      },
    })

    expect(wrapper.text()).toBe(content)
  })

  it.skip('should render as link when anchor prop is set', () => {
    const wrapper = shallowMount(UiChip, {
      props: {
        variant: BootstrapVariants.Primary,
        anchor: true,
      },
    })

    const anchor = wrapper.find('a')
    const span = wrapper.find('span')

    expect(anchor.exists()).toBeTruthy()
    expect(span.exists()).toBeFalsy()
  })

  it('should render with a variant class', () => {
    const theme = uiChipThemeConfigDefaults
    const variant = BootstrapVariants.Success
    const wrapper = shallowMount(UiChip, {
      props: {
        variant,
      },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.variants[variant])
  })

  it('should render pilled class when pill prop is set true', () => {
    const theme = uiChipThemeConfigDefaults
    const wrapper = shallowMount(UiChip, {
      props: {
        variant: BootstrapVariants.Primary,
        pill: true,
      },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.pill)
  })

  it('should render text-dark class when textDark prop is set true', () => {
    const theme = uiChipThemeConfigDefaults
    const wrapper = shallowMount(UiChip, {
      props: {
        variant: BootstrapVariants.Primary,
        textDark: true,
      },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.textDark)
  })

  it('should trigger click callback', async () => {
    const wrapper = shallowMount(UiChip, {
      props: {
        variant: BootstrapVariants.Primary,
      },
    })

    wrapper.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should render aria role when it is set in props', () => {
    const role = 'some role'
    const wrapper = shallowMount(UiChip, {
      props: {
        variant: BootstrapVariants.Primary,
        ['aria:role']: role,
      },
    })

    expect(wrapper.attributes('role')).toEqual(role)
  })
})
