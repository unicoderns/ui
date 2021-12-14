---
to: packages/<%= h.changeCase.param(name) %>/tests/unit/ui-<%= h.changeCase.param(name) %>.spec.ts
---
import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { Ui<%= h.changeCase.pascal(name) %> } from '../../src'

describe('ui-<%= h.changeCase.param(name) %>.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(Ui<%= h.changeCase.pascal(name) %>, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
