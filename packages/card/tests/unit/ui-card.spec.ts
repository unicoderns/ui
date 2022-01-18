import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiCard } from '../../src'
import { bsUiCardThemeConfigDefaults } from '../../src/defaults/bs-ui-card-theme.config'

describe('ui-card.vue', () => {
  it('should render when props are set', async () => {
    const wrapper = shallowMount(UiCard, {
      props: { centerText: true },
    })

    await wrapper.vm.$nextTick()

    const card = wrapper.find('div')

    expect(card.classes()).toContain(
      bsUiCardThemeConfigDefaults.cssClass.center
    )
  })
})
