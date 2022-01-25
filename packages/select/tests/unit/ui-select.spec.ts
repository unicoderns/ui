import { shallowMount } from '@vue/test-utils'
import { InputSizeVariants } from '@uicr/core'
import { UiSelect } from '../../src'
import { uiSelectThemeConfigDefaults } from '../../src/defaults/ui-select-theme.config'

const theme = uiSelectThemeConfigDefaults

describe('ui-select.vue', () => {
  it('should render a disabled select', () => {
    const wrapper = shallowMount(UiSelect, {
      props: { disabled: true },
    })

    const select = wrapper.find('select')

    expect(select.attributes('disabled')).toBeDefined()
  })
  it('should render a multiple select', () => {
    const wrapper = shallowMount(UiSelect, {
      props: { multiple: true },
    })

    const select = wrapper.find('select')

    expect(select.attributes('multiple')).toBeDefined()
  })
  it('should render a textarea with the size variant sm', () => {
    const wrapper = shallowMount(UiSelect, {
      props: {
        size: InputSizeVariants.Small,
      },
    })

    const select = wrapper.find('select')
    expect(select.classes()).toContain(theme.cssClass.sizes.sm)
  })

  it('should render a textarea with the size variant md', () => {
    const wrapper = shallowMount(UiSelect, {
      props: {
        size: InputSizeVariants.Medium,
      },
    })

    const select = wrapper.find('select')
    expect(select.classes()).toContain(theme.cssClass.sizes.md)
  })

  it('should render a textarea with the size variant lg', () => {
    const wrapper = shallowMount(UiSelect, {
      props: {
        size: InputSizeVariants.Large,
      },
    })

    const select = wrapper.find('select')
    expect(select.classes()).toContain(theme.cssClass.sizes.lg)
  })
})
