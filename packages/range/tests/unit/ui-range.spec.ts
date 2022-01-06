import { shallowMount } from '@vue/test-utils'
import { UiRange } from '../../src'

describe('ui-range.vue', () => {
  it('should render with no props', () => {
    const wrapper = shallowMount(UiRange, {
      props: {},
    })

    const range = wrapper.find('input')

    expect(range.exists()).toBeTruthy()
  })

  it('should render a disabled range', () => {
    const wrapper = shallowMount(UiRange, {
      props: { disabled: true },
    })

    const range = wrapper.find('input')

    expect(range.attributes('disabled')).toBeDefined()
  })

  it('should render when props are set', () => {
    const wrapper = shallowMount(UiRange, {
      props: {},
    })

    const label = wrapper.find('label')

    expect(label.exists()).toBeFalsy()
  })

  it('should render when props are set', () => {
    const wrapper = shallowMount(UiRange, {
      props: { label: 'Example' },
    })

    const label = wrapper.find('label')

    expect(label.exists()).toBeTruthy()
  })
})
