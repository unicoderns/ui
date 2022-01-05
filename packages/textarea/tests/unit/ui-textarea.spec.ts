import { shallowMount, mount } from '@vue/test-utils'
import { InputSizeVariants } from '@unicodernsui/core'
import { UiTextarea } from '../../src'
import { bsUiTextareaThemeConfigDefaults } from '../../src/defaults/bs-ui-textarea-theme.config'

const theme = bsUiTextareaThemeConfigDefaults
describe('ui-textarea.vue', () => {
  it('should render a label with the text setted in label prop', () => {
    const labelText = 'Label'
    const wrapper = shallowMount(UiTextarea, {
      props: {
        label: labelText,
      },
    })

    const label = wrapper.find('label')
    expect(label.text()).toBe(labelText)
  })

  it('should render a disabled textarea', () => {
    const wrapper = shallowMount(UiTextarea, {
      props: {
        disabled: true,
      },
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain(theme.cssClass.disabled)
    expect(textarea.attributes('disabled')).toBeDefined()
  })

  it('should render a textarea with the size variant sm', () => {
    const wrapper = shallowMount(UiTextarea, {
      props: {
        size: InputSizeVariants.Small,
      },
    })

    const textareaWrapper = wrapper.find('div')
    expect(textareaWrapper.classes()).toContain(theme.cssClass.sizes.sm)
  })

  it('should render a textarea with the size variant md', () => {
    const wrapper = shallowMount(UiTextarea, {
      props: {
        size: InputSizeVariants.Medium,
      },
    })

    const textareaWrapper = wrapper.find('div')
    expect(textareaWrapper.classes()).toContain(theme.cssClass.sizes.md)
  })

  it('should render a textarea with the size variant lg', () => {
    const wrapper = shallowMount(UiTextarea, {
      props: {
        size: InputSizeVariants.Large,
      },
    })

    const textareaWrapper = wrapper.find('div')
    expect(textareaWrapper.classes()).toContain(theme.cssClass.sizes.lg)
  })

  it('should render a textarea with max length', () => {
    const MAX_LENGTH = 15
    const wrapper = mount(UiTextarea, {
      props: {
        maxLength: MAX_LENGTH,
      },
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('maxlength')).toBe(MAX_LENGTH + '')
  })
})
