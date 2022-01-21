import { shallowMount, mount } from '@vue/test-utils'
import exp from 'constants'
import { UiTextarea } from '../../src'
import { uiTextareaThemeConfigDefaults } from '../../src/defaults/ui-textarea-theme.config'

const theme = uiTextareaThemeConfigDefaults
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

  it('should render aria role when it is set in props', () => {
    const role = 'some role'
    const wrapper = shallowMount(UiTextarea, {
      props: {
        ['aria:role']: role,
      },
    })
    const textarea = wrapper.find('textarea')

    expect(textarea.attributes().role).toBe(role)
  })

  it('should set the value', () => {
    const text = 'some text'
    const wrapper = shallowMount(UiTextarea)
    const textarea = wrapper.find('textarea')

    textarea.setValue(text)
    expect(textarea.element.value).toBe(text)
  })
})
