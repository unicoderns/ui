import { shallowMount } from '@vue/test-utils'
import { InputTypes } from '@uicr/core'
import { UiInput } from '../../src'

describe('ui-input.vue', () => {
  it('should render a disabled input', () => {
    const wrapper = shallowMount(UiInput, {
      props: { disabled: true },
    })

    const input = wrapper.find('input')

    expect(input.attributes('disabled')).toBeDefined()
  })

  it('should render input with type email', () => {
    const wrapper = shallowMount(UiInput, {
      props: { type: InputTypes.Email },
    })

    const input = wrapper.find('input')

    expect(input.attributes('type')).toContain(InputTypes.Email)
  })

  it('should render input with type password', () => {
    const wrapper = shallowMount(UiInput, {
      props: { type: InputTypes.Password },
    })

    const input = wrapper.find('input')

    expect(input.attributes('type')).toContain(InputTypes.Password)
  })

  it('should render input with type text', () => {
    const wrapper = shallowMount(UiInput, {
      props: { type: InputTypes.Text },
    })

    const input = wrapper.find('input')

    expect(input.attributes('type')).toContain(InputTypes.Text)
  })
})
