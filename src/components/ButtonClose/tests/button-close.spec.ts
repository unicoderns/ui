import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ButtonClose from '@/components/ButtonClose/button-close.vue'

describe('button-close.vue', () => {
  it('renders aria-label when passed as prop', () => {
    const ariaLabel = 'Custom aria label'
    const wrapper = shallowMount(ButtonClose, {
      props: { ariaLabel },
    })
    expect(wrapper.attributes()['aria-label']).equal(ariaLabel)
  })
})
